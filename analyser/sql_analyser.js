
const get_var_content = require('../tools/get_var_content')

const entries = ['$_GET','$_POST','$_COOKIE','$_REQUEST','HTTP_GET_VARS','HTTP_POST_VARS','HTTP_COOKIE_VARS','HTTP_REQUEST_VARS']


const analyse_query = (sanitize,code)=>{
	let safe = true
	for(let i in entries){
		let index = code.indexOf(entries[i]);
		if(index!==-1){
			if(code.substr(index-14,14)!=='_escape_string'){
				if(safe) console.log(">> Program is not safe!")
				console.log(">> Entry Point is "+entries[i])
				safe = false
			}
		}
	}
	if(safe) console.log('Program is safe!\nEntry point is sanitized by '+sanitize)
	else console.log('>> To sanitize entry point use: '+sanitize)
}


module.exports = (code)=>{

    let queries = code.split('query(')
    queries.shift()

    for(i in queries){
        let query = queries[i]

        while(query[0]===' ' || query[0]==='\t' || query[0]==='\n')
            query = query.substr(1)

        // if var passed to query function
        if(query[0]==='$'){
            query = query.split(',')[0]
        }
        // if string directly in query function
        else{
            let open = query[0]
            query = query.split(');')[0]
            if(query.contains('mysql_connect('))
                query = query.split('mysql_')[0]
            let index = query.lastIndexOf(open)
            query = query.substr(0,index+1)
        }
		let sanitize = 'mysql_real_escape_string'
		if(code.indexOf('pg_query')!==-1 || code.indexOf('pg_send_query')!==-1)
			sanitize = 'pg_escape_string or pg_escape_bytea'
		if(code.indexOf('db2_exec')!==-1)
			sanitize = 'db2_escape_string'

        query = get_var_content(code.split('query(')[0],query)
        analyse_query(sanitize,query)
    }
}
