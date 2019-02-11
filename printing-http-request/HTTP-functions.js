const https = require('https');

module.exports = function getHTML (options, callback) {
  let bufferedString = '';

  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      bufferedString += data;
    });
    response.on('end', function () {
      callback(bufferedString);
      console.log(`Response stream complete.`)
    });
  });
};