
const sql = ['mysql_query(','mysql_unbuffered_query(','mysql_db_query(','pg_query(','pg_send_query(','db2_exec(']
const xss = ['echo','print','printf','die','error','exit','file_put_contents','file_get_contents']
const php = ['eval']

module.exports = (code)=>{
    if (code.contains(sql)){
		console.log('SQL Injection')
        require('./sql_analyser')(code)
    }

    if (code.contains(xss)){
		console.log('Cross Site Scripting')
        require('./xss_analyser')(code)
    }

    if (code.contains(php)){
        console.log('Checking PHP Code Injection')
        // CALL php_injection_analyser
    }
}
