const http = require('http');
const { json } = require('stream/consumers');
const Data = require('./Data')


http.createServer((req,resp) => {
    resp.writeHead(200,{'Content-type':'application\json'});
    resp.write(JSON.stringify(Data));
    resp.end();
}).listen(5000);