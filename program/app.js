const http=require('http'); //http->node core module
const server=http.createServer((req,res)=>{//arrow function u can also use normal function 

    console.log(req);//requst in server client entere the browser "localhost:3000 ->come into this req"
});

server.listen(3000);