
const analyse_query = (query)=>{
    console.log(query)
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
        analyse_query(get_var_content(query))
    }
}
