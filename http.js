const http = require('http')
// req and res are objects
const server= http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("hello , welcome to the boys page");
    }
    if(req.url === '/about'){
        res.end('HELL YEAHHHHH');
    }
    res.end('bye bye');
})

server.listen(5001)