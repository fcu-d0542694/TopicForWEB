var http    = require("http");
var express = require("express");
var app     = express();
var path    = require("path");
var io      = require("socket.io");
var fs      = require("fs");

/*app.get('/', function(req,res){
  app.use(express.static(path.join(__dirname+'./public')))
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});*/
app.use(express.static(path.join(__dirname+'/public')));
var server = http.createServer(app);

io = io.listen(server);
server.listen(8080);

console.log("Running at Port 8080");

io.sockets.on('connection', function (socket) {
  console.log("有人連過來了!!");

  socket.on("message", function (data) {
    console.log(data);
    fs.appendFile('test.json', JSON.stringify(data),  function (err) {
  		if (err)
  			console.log(err);
  		else
  			console.log('Write operation complete.');
  	});

    socket.broadcast.emit("everyone", data);
  });
});
