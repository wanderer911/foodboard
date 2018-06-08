const express = require('express');


const app = express();
const port = process.env.PORT || 8080;
const distDir = __dirname + "/public/";

app.use('/static', express.static(distDir))

app.listen(port,function(){
	console.log(`app is working on http://localhost:${port}/`);
});

//if not in router. render index.
app.get('*', function(req, res) {
	res.sendFile(distDir+'index.html');
});