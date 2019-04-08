var express = require('express');
var ParseServer = require('parse-server').ParseServer;

var app = express();

var api = new ParseServer({
    databaseURI: 'mongodb+srv://vvx1208:3142@cluster0-t0q4s.mongodb.net/test?retryWrites=true',
    appId: 'kangdongwoo',
    masterKey: '3142',
    fileKey: '3142',
    serverURL: "http://localhost:1337/parse"
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

var port = process.env.PORT || 1337;
app.listen(port, function() {
    console.log('parse-server running on port'+ port + '.');
});