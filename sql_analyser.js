/*
//
// DENTRO DE UM FICHEIRO CHAMADO SQL_ANALYSER //          								  
//

    if ((code.indexOf('POST') || code.indexOf('GET'))!==-1){
    	// ENTRY POINTS ASSOCIATED:
    	//
    	// -> POST
    	// -> GET
    	// -> COOKIE
    	// -> REQUEST
    	// -> HTTP_GET_VARS
    	// -> HTTP_POST_VARS
    	// -> HTTP_COOKIE_VARS
    	// -> HTTP_REQUEST_VARS
    	console.log('Found Entry points')
    }

    if ((code.indexOf('mysql_real_escape_string') || (code.indexOf('mysql_escape_string')))!==-1){
    	// SENSITIVE SINKS USED FOR UNTAINTING:
    	//
    	// -> mysql_query
    	// -> mysql_unbuffered_query
    	// -> mysql_db_query == mysql_query
    	// -------------------------------------
    	// -> mysqli_query
 		// -> mysqli_real_query
		// -> mysqli_master_query
		// -> mysqli_multi_query
    	// 
    	console.log('Found one sanitization/validation function')
    	// FOR CORRECTION USE:
    	// -> mysql_real_escape_string
    }

    if (code.indexOf('mysqli_stmt_bind_param')!==-1){
    	// SENSITIVE SINKS ASSOCIATED:
    	//
    	// -> mysqli_stmt_execute
		// -> mysqli_execute == mysqli_stmt_execute
		//
		console.log('Found one sanitization/validation function')
		// FOR CORRECTION USE:
		// -> mysqli_stmt_bind_param
    }

    if ((code.indexOf('mysqli::escape_string') || (code.indexOf('mysqli::real_escape_string')))!==-1){
    	// SENSITIVE SINKS ASSOCIATED:
    	//
    	// -> mysqli::query
		// -> mysqli::multi_query
		// -> mysqli::real_query
		//
    	console.log('Found one sanitization/validation function')
    	// FOR CORRECTION USE:
		// -> mysqli::real_escape_string
    }

    if (code.indexOf('mysqli_stmt::bind_param')!==-1){
    	// SENSITIVE SINKS ASSOCIATED:
    	//
    	// -> mysqli_stmt::execute
		//
    	console.log('Found one sanitization/validation function')
    	// FOR CORRECTION USE:
		// -> mysqli_stmt::bind_param
    }
    else{
		console.log('There is a SQL Injection problem')
    }
    */







