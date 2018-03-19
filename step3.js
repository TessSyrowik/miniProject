var https = require('https');

function getAndPrintHTML (options) {
  var buffer = [""]; // In this situation, we don't need to buffer...
// var options = {""}; // we want requestOptions to live in here with varibale host and path values...
// options is an object that contains values for host and path...
  https.get(requestOptions, function (response){ // This is where we're asking the Q
    response.setEncoding('utf8');  // Requested response type
    response.on('data', function (data){ // requested response and its format
      console.log(data + '\n');
    });
    for (var i = 0; i < response.length; i++) {
        buffer += data;
      }
      return buffer;
  });
}

var requestOptions = {
host: 'sytantris.github.io',
path: '/http-examples/step2.html'
};

getAndPrintHTML(requestOptions);












