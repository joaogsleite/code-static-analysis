
const mysql = ['mysql_query(','mysql_unbuffered_query(','mysql_db_query(']
const postgree = ['pg_query(','pg_send_query(']
const xss = ['echo','print','printf','die','error','exit']
const php = ['eval','file_put_contents','file_get_contents']

module.exports = (code)=>{
    if (code.contains(mysql)){
        console.log('Checking SQL Injection')
        require('./sql_analyser')(code)
    }

    if (code.contains(['db2_exec'])){
        console.log('Checking DB2 Injection')
        // CALL db2_analyser
    }
    
    if (code.contains(postgree)){
        console.log('Checking PostgreSQL Injection')
    	  // CALL postgree_analyser
    }

    if (code.contains(xss)){
        console.log('Checking Cross Site Scripting Injection')
        // CALL xss_analyser
    }

    if (code.contains(php)){
        console.log('Checking PHP Code Injection')
        // CALL php_injection_analyser
    }
}
