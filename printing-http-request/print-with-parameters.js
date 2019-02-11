const https = require('https');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html',
};

function getAndPrintHTML(options) {
  let bufferedString = '';

  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      bufferedString += data;
    });
    response.on('end', function () {
      console.log(bufferedString);
      console.log(`Response stream complete.`)
    });
  });
}

getAndPrintHTML(requestOptions);
