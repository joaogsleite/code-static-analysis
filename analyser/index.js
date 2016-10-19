
module.exports = (code)=>{
    if (code.indexOf('mysql_query(')!==-1){
        console.log('Checking SQL Injection')
        // CALL sql_analyser
    }

    if (code.indexOf('db2_exec')!==-1){
        console.log('Checking DB2 Injection')
        // CALL db2_analyser
    }
    
    if (code.indexOf('pg_query')!==-1){
        console.log('Checking PostgreSQL Injection')
    	  // CALL postgree_analyser
    }

    if (code.indexOf('echo')!==-1){
        console.log('Checking Cross Site Scripting Injection')
        // CALL css_analyser
    }
}
