var https = require('https');

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io', // note the comma -- you're working in an object here!
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data){
      console.log(data + '\n');
    });

  });

  // Use HTTPS lib to GET given URL
}
 getAndPrintHTMLChunks();