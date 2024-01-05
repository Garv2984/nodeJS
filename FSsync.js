const {readFileSync , writeFileSync} = require('fs')

// same as prev methods but different way of accessing methods 

const first = readFileSync('../content/first.txt','utf-8')
const second =readFileSync('../content/second.txt','utf-8')

writeFileSync('../content/result.txt', `here is the result: ${first} , ${second}`)

