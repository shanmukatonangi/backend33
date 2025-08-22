
let http = require('http');


let server =http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
})


server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});