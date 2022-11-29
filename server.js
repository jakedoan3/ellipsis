const http = require('http')
const server = http.createServer((req, res) => {
    console.log("requested");
});

server.listen(3001, 'localhost', ()=> {
    console.log('listening to port 3001')
})