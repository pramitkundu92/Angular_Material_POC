var http = require('http');
var express = require('express');

var contextRoot = '/webapp/dpdx/ui';
var app = express();
var router = express.Router();
var server = http.createServer(app);

app.use(contextRoot, express.static(__dirname + '/webapp'));
app.use(contextRoot, router);

router.get('/index',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

server.listen(10000);
console.log('Server running at : http://localhost:10000/webapp/dpdx/ui/index');