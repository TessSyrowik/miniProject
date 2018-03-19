var https = require('https');

function getAndPrintHTML () {

  var buffer = [""];
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response){
    response.setEncoding('utf8');
    response.on('data', function (data){
      console.log(data + '\n');

    });
    for (var i = 0; i < response.length; i++) {
        buffer += data;
      }
      return buffer;

  });

}

getAndPrintHTML();
// console.log(buffer);
