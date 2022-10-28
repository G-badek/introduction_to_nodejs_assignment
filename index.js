const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', getUrl(req));
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(data);
        }
        
    });

});

function getUrl(request) {
    if(request.url === '/') {
        return 'index.html';
    } else if (request.url === '/home') {
        return 'index.html';
    } else {
        return request.url;
    }
}

const port = 4000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});