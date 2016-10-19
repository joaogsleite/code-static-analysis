/*
//
// DENTRO DE UM FICHEIRO CHAMADO DB2_ANALYSER //                                          
//
    if (code.indexOf(' db2_escape_string')!==-1){
        // SENSITIVE SINKS ASSOCIATED:
        //
        // -> db2_exec
        //
        console.log('Found one sanitization/validation function')
        // FOR CORRECTION USE:
        // -> db2_escape_string
    }
    else{
        console.log('There is a DB2 Injection problem')
    }
    */