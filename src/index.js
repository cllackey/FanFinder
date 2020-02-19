const express = require('express')
const app = express()
const http = require('http').createServer(app);
const port = 9000
const io = require('socket.io')(http);


app.use(express.static('static'))

io.on('connection', function(socket){

	socket.on("joinTeam", function(teamName) {

		var rooms = io.sockets.adapter.sids[socket.id]; 
		console.log("rooms:", rooms);

		for(var room in rooms) { 
			socket.leave(room); 
		}


		socket.join(teamName);
				console.log("rooms:", rooms);

	});

	socket.on("msg", function(message) {
		var rooms = io.sockets.adapter.sids[socket.id]; 

		console.log("received message:", message);
		console.log("rooms:", rooms);



		for(var room in rooms) { 
			io.to(room).emit('receive', message);
		}


	})

  console.log('a user connected');
});
//app.get('/', (req, res) => res.send('Hello World!'))

http.listen(port, () => console.log(`Example app listening on port ${port}!`))