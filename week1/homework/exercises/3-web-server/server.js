/**
 * Exercise 3: Create an HTTP web server
 */

var http = require('http');
const fs = require('fs');
const PORT = 3000;

//create a server
let server = http.createServer((req, res) => {
	// YOUR CODE GOES IN HERE
	const serverHandler = (fileName, contentType) => {// I preferred to put the repetitive code into a function.
		fs.readFile(fileName, (err, data) => {
			res.writeHead(200, { 'Content-Type': contentType });
			if (err) throw err;
			res.write(data);
			res.end();
		});
	}
	if (req.url === '/') {//If the URL is / send the HTML file, same as before
		serverHandler('index.html', 'text/html')
	} else if (req.url === '/index.js') { //If the URL is /index.js send the corresponding JavaScript file.
		serverHandler('index.js', 'text/JavaScript')
	} else if (req.url === '/style.css') {//If the URL is /style.css send the css file
		serverHandler('style.css', 'text/css')
	}
});
server.listen(PORT, () => console.log(`Server is running on ${PORT}...`));
