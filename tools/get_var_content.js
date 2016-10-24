
letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_'

get_var_content = (code,variable)=>{
    
    if(variable[0]==='$' && variable[1]!='_'){
        
        let parts = code.split(variable)
        parts.shift()
        let content = parts.join('')
        parts = content.split('=')
        parts.shift()
        content = parts.join('')

        while(content[0]===' ' || content[0]==='\t' || content[0]==='\n')
            content = content.substr(1)

        variable = content
    }
    parts = variable.split('$')
    
    for(i in parts){
        if(i==0)
            continue
        let k=0
        let word = parts[i]
        while(letters.indexOf(word[k])){
            k++;
        }
        word = '$'+word.substr(0,k)
        word = get_var_content(code,word)
    } 
    

    
    return variable
}

module.exports = get_var_content
