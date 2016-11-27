
letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_'

get_var_content = (code,variable)=>{

	if(variable.indexOf('$_')!==-1) return variable

	var content = variable

	if(content[0]=='$'){

		for(i=0; i<variable.length-2; i++)
			if(variable[i]==='$' && variable[i+1]==='_')
				return variable

	    var instrutions = code.split(';');
		var instrution = ""

		for(var i=0; i<instrutions.length; i++)
			if(instrutions[i].indexOf(variable)!==-1)
				instrution = instrutions[i]

		var inst = instrution.split('=');
		inst.shift()
		content = inst.join('=')

		code = code.split(instrution)[0]
	}
	var new_content = ""
	for(var i=0; i<content.length; i++){
		if(content[i]!='$'){
			new_content += content[i]
			continue
		}

		i++, find = "$"
		while(letters.indexOf(content[i])!==-1)
			find += content[i] , i++

		new_content += get_var_content(code,find)
		i--
	}

	return new_content
}

module.exports = get_var_content
