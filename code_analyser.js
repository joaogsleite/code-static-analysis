
module.exports = (code)=>{
    if (code.indexOf('mysql_query(')!==-1){
        console.log('Checking SQL Injection')
    }
}
