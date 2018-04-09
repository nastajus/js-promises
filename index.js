let fetch = require('./fetch.js');
const express = require('express');
const port = 9966;

const app = express();


let promise = fetch('bears.txt');
// so what this is going to do is return a "promise" that will have a `then` and `catch` on it

promise.then(function(bears){
	console.log(bears);
})
//so we're gonna CALL that function and it's gonna  GIVE US a list of bears
//so once the request has finished, it will call this `then` function, and supply our *bears* here

app.listen(port, function () {
	console.log('listening on port ' + port);
});