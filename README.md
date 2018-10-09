# sixargs
minimalist node command line arg parser

usage: 
```javascript
//test.js
const {
  n:name = 'sixargs',
  v:version = '1.0'
} = require('./sixargs')

console.log(`My name is ${name} and my version is ${version}`)
```

```bash
node test -n foo -v 2.0   #My name is foo and my version is 2.0
node test -n=bar -v=3.0   #My name is bar and my version is 3.0

node test                 #My name is sixargs and my version is 1.0
```
