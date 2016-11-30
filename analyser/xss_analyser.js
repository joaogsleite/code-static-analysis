
const get_var_content = require('../tools/get_var_content')

const entries = ['$_GET','$_POST','$_COOKIE','$_REQUEST','HTTP_GET_VARS','HTTP_POST_VARS','HTTP_COOKIE_VARS','HTTP_REQUEST_VARS','$_FILES','$_SERVER']
const corrections = ['htmlentities','htmlspecialchars','strip_tags','urlencode','san_out','san_wdata','san_rdata']

const analyse_query = (sanitize,code,sensitive)=>{
	let safe = true
	for(let i in entries){
		let index = code.indexOf(entries[i]);
		if(index!==-1){
			let bad = true
			for(let c in corrections){
				if(code.substr(index-corrections[c].length-1,corrections[c].length)==corrections[c])
					bad = false
			}
			if(bad){
				if(safe) console.log(">> Program is not safe!")
				console.log(">> Entry Point is "+entries[i])
				safe = false
			}

		}
	}
	if(safe) console.log('Program is safe!\nEntry point is sanitized by '+sanitize)
	else{
		console.log('>> To sanitize entry point use: '+sanitize)
		console.log('>> Sensitive Sinks: '+sensitive)
	}
}


module.exports = (code)=>{

	possibilities = ['echo','print','printf','die','error','exit','file_put_contents','file_get_contents']
	for(let p in possibilities){
	    let queries = code.split(possibilities[p])
	    queries.shift()

	    for(i in queries){
	        let query = queries[i]

	        while(query[0]===' ' || query[0]==='\t' || query[0]==='\n')
	            query = query.substr(1)

	        // if var passed to query function
	        if(query[0]==='$')
	            query = query.split(';')[0]

	        // if string directly in query function
	        else
	            query = query.split(';')[0]

			let sanitize = 'san_out'
			if(possibilities[p]=='file_put_contents') sanitize = 'san_wdata'
			if(possibilities[p]=='file_get_contents') sanitize = 'san_rdata'

	        query = get_var_content(code.split(possibilities[p])[0],query)
			sensitive = possibilities[p]
	        analyse_query(sanitize,query,sensitive)
	    }
	}
}
