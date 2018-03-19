// Printing with Callbacks:

// We want to be able to GET the HTML and also ACT on that HTML
  // ➜ Callbacks! 🦆

// Step 1: accept a callback as a second param ✅
// Step 2: function body will call the callback when data is fully recieved ➜ replace the console.log();

var https = require('https');

function getHTML (options, callback) {
  https.get(requestOptions, function (response){
    response.setEncoding("utf8");
    response.on("data", function(data){
      console.log(data + "\n"); // This is where our callback function will be invoked.
    });
    // callback(" outside function level 2" + requestOptions);
    for (var i = 0; i < response.length; i++) {
      buffer += data;
    }
    // return buffer;
  });

}

// callback("outside of function " + requestOptions);
function printHTML (html) {
  callback(requestOptions);
  // console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions);