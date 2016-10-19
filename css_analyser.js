/*
    //
    // DENTRO DE UM FICHEIRO CHAMADO CSS_ANALYSER //          								  
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
    	// -> FILES
    	// -> SERVERS
    	console.log('Found Entry points')
	}

    if ((code.indexOf('htmlentities') || (code.indexOf('htmlspecialchars') || (code.indexOf('strip_tags') || (code.indexOf('urlencode')))!==-1){
    	 
    	// SENSITIVE SINKS ASSOCIATED:
    	//
    	// -> echo
    	// -> print
    	// -> die
    	// -> error
    	// -> exit
		// 
		console.log('Found Cross Site Scripting Injection')
    	// FOR CORRECTION USE:
		// -> san_out
		//
		---------------
		// OTHER:
		//
		// SENSITIVE SINKS ASSOCIATED:
    	//
    	// -> file_put_contents
		console.log('Found Cross Site Scripting Injection')
		// FOR CORRECTION USE:
		// -> san_wdata
		---------------
		// OTHER:
		// 
		// SENSITIVE SKINS ASSOCIATED:
		// 
		// -> file_get_contents
		console.log('Found Cross Site Scripting Injection')
		// FOR CORRECTION USE:
		// -> san_rdata
    }*/