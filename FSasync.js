const {readFile , writeFile} = require('fs')


readFile('../content/first.txt','utf-8', (err,result )=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})

readFile('../content/first.txt','utf-8', (err,result )=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('../content/second.txt' , 'utf-8' ,(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('../content/resultasync.txt' , `here is the result : ${first} , ${second}`, (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    } )
})
