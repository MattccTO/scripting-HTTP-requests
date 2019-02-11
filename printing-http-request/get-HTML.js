const https = require('https');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html',
};

function getHTML(options, callback) {
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
}

function printHTML(html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
