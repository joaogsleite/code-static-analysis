
const fs = require('fs')
const code_analyser = require('./analyser')
require('./tools/string_contains')

const file = process.argv[2]
if (!file){
    console.log('USAGE: ./analyser <file.php>')
    process.exit()
}
try {
    const code = fs.readFileSync(__dirname+'/'+file).toString();
    code_analyser(code)
}
catch(err) {
    console.log(err)
    console.log('Invalid file: '+file)
}







