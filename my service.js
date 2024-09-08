const http= require('http');
http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/plain; charset=UTF-8'});
    res.end('hello cooper!');
}).listen(3000);

console.log('server run on 3000 port');