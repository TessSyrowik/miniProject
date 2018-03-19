// MODULE-CEPTION: putting a module into a module.
// Module needs to export function so it's available via "require"

var https = require('https');


module.exports = function getHTML (options, callback) {
    https.get(options, function (response){
      response.setEncoding("utf8");
      response.on("data", function(data){
        console.log(data + "\n"); // This is where our callback function will be invoked.
      });
    });
};

