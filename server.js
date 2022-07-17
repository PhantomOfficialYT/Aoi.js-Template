const express = require('express');

const server = express();

server.all('/', (req, res) => {
	res.setHeader('Content-Type', 'text/html');

	res.write(
		'<link href="https://fonts.googleapis.com/css?family=Roboto Condensed" rel="stylesheet"> <style> body {font-family: "Roboto Condensed";font-size: 22px;} <p>Hosting Active</p>'
	);

	res.end();
});

function keepAlive() {
	server.listen(6969, () => {
		console.log('Bot is online!');
	});
}

module.exports = keepAlive;
