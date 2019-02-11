const https = require('https');

function getAndPrintHTML() {
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html',
  };

  let bufferedString = '';

  https.get(requestOptions, function (response) {
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

getAndPrintHTML();
