export (()=>{
	let parsed = {}
	let args = process.argv
	for (let i=2; i<args.length ;i++){
		let a = args[i]		
		if (a[0]=='-')
			a=a.substr(1)
		else continue
		a = a.split('=')
		if (a.length==1) {
			a[1]=args[++i]
		}
		parsed[a[0]] = a[1]
	}
	return parsed
})()
