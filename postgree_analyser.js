/*
//
// DENTRO DE UM FICHEIRO CHAMADO PostgreSQL_Analyser //         								  
//   
    if ((code.indexOf('pg_escape_string') || (code.indexOf('pg_escape_bytea')))!==-1){
    	// SENSITIVE SINKS ASSOCIATED:
    	//
    	// -> pg_query
    	// -> pg_send_query
		//
		console.log('Checking PostgreSQL Injection')
    	// FOR CORRECTION USE:
		// -> pg_escape_string
		// -> pg_escape_bytea
    }*/