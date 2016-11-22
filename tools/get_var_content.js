
letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_'

get_var_content = (code,variable)=>{

	console.log("INPUT",variable)

    let content = variable

    if(variable[0]==='$'){
        if(variable[1]==='_')
            return variable

        var parts = code.split(variable)
        code = parts[0]
        parts.shift()
        content = parts.join(variable)
        parts = content.split('=')
        parts.shift()
        content = parts.join('=')

        while(content[0]===' ' || content[0]==='\t' || content[0]==='\n')
            content = content.substr(1)

        let open = content[0]
        if(open!='"' && open!="'")
            open=''
        content = content.split(open+';')[0]+open
    }

    parts = content.split('$')
    content = parts[0]
    parts.shift()


    for(i in parts){
        let k=0
        let word = parts[i]
		if(!word) continue
        while(letters.indexOf(word[k])!==-1){
            k++;
        }
        let end = word.substr(k)
        word = '$'+word.substr(0,k)


        word = get_var_content(code,word)
        content = content + ' ' + word + ' ' + end

    }
    if(content==='')
        content = variable

    return content
}

module.exports = get_var_content
