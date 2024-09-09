const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (page == '/events') {
    fs.readFile('events.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
    // } else if (page == '/api') {
    //   if ('student' in params) {
    //     if (params['student'] == 'leon') {
    //       res.writeHead(200, { 'Content-Type': 'application/json' });
    //       const objToJson = {
    //         name: 'leon',
    //         status: 'Boss Man',
    //         currentOccupation: 'Baller',
    //       };
    //       res.end(JSON.stringify(objToJson));
    //     } //student = leon
    //     else if (params['student'] != 'leon') {
    //       res.writeHead(200, { 'Content-Type': 'application/json' });
    //       const objToJson = {
    //         name: 'unknown',
    //         status: 'unknown',
    //         currentOccupation: 'unknown',
    //       };
    //       res.end(JSON.stringify(objToJson));
    //     } //student != leon
    //   } //student if
  } //else if
  else if (page == '/css/normalize.css') {
    fs.readFile('css/normalize.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else if (page == '/js/events.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else if (page == '/images/background.jpg') {
    fs.readFile('images/background.jpg', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'image/jpg' });
      res.write(data);
      res.end();
    });
  } else if (page == '/images/olympics.jpg') {
    fs.readFile('images/olympics.jpg', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'image/jpg' });
      res.write(data);
      res.end();
    });
  } else if (page == '/images/burger.svg') {
    fs.readFile('images/burger.svg', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'image/jpg' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

if (server.listen(8000)) {
  console.log('Server running...')
};
