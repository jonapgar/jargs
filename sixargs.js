module.exports = (()=>{
	let parsed = {}
	let args = process.argv
	for (let i=2; i<args.length ;i++){
		let a = args[i]		
		while (a[0]==='-')
			a=a.substr(1)
		if (!a.length)
			continue
		a = a.split('=')
		let value = a.length===1 ? args[++i]:a[1]
		if (value)
			parsed[a[0]] = value
	}
	return parsed
})()
