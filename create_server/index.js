const http = require('http')
const fs = require('fs')
const port = 8000

const handle = (req,res) => {
    let pageName = "";
    switch (req.url) {
        case '/':
            pageName = './index.html'
            break;
        case '/home':
            pageName = './home.html'
            break;
        case '/about':
            pageName = './about.html'
            break;
        case '/product':
            pageName = './product.html'
            break;
    }

    fs.readFile(pageName,(err,record) => {
        if(err){
            res.end(record);
            return false
        }
        res.end(record);
    })
}

const server = http.createServer(handle);

server.listen(port,(err) => {
    if(err){
        console.log(`Server Running In Fault`);
    }
    console.log(`Server Is Running Successfully`);
})
