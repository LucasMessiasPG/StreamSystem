'use strict';

class Socket{

	constructor(io){
		this.io = io;
		this.rooms = [];
	}

	init(){
		this.io.on('connection',(socket) => {

			console.log(socket);

			this.subscribe(socket);
			this.unsubscribe(socket);
	       	this.message(socket);
	    });
	}

	subscribe(socket){
		socket.on('subscribe', (data) => {
        	// console.log("subscribe",room);
            // socket.join(room);
            if(!data.room){
				throw new Error("get room undefined");
			}

			// connect on room
			socket.join(data.room);



			if(!this.rooms[data.room]){
				this.rooms[data.room] = {};
				this.rooms[data.room].watchers = [];
			}else{
				if(this.rooms[data.room].data){
					if(data.type == "preview"){
						this.rooms[data.room].data.preview = true;
					}
					this.io.sockets.connected[socket.id].emit('data', this.rooms[data.room].data);
				}

				if(this.rooms[data.room].time){
					var t1 = this.rooms[data.room].time.timestamp;
					var t2 = new Date();
					var dif = t1.getTime() - t2.getTime();

					var Seconds_from_T1_to_T2 = dif / 1000;
					var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

					this.rooms[data.room].time.value = Math.floor(Seconds_Between_Dates) + this.rooms[data.room].time.value;
					this.rooms[data.room].time.timestamp = new Date();

					this.io.sockets.connected[socket.id].emit('data-time', this.rooms[data.room].time);
				}
			}

			// save log
			let
				hasWatcher = false;
			for(let watcher of this.rooms[data.room].watchers){
				if(watcher.type == data.type){
					hasWatcher = true;
				}
			}

			if(hasWatcher === false){
				this.rooms[data.room].watchers.push({
					id: socket.id,
					type: data.type
				});
			}

			if(!this.rooms[data.room].prize){
				this.rooms[data.room].prize = {
					prize1: 6,
					prize2: 6
				};
				this.io.sockets.connected[socket.id].emit('data-prize', this.rooms[data.room].prize);
			}else{
				this.io.sockets.connected[socket.id].emit('data-prize', this.rooms[data.room].prize);
			}

			if(this.rooms[data.room].img){
				let	
					img = this.rooms[data.room].img;

				if(img.interval){
					delete img.interval;
				}
				
				this.io.to(data.room).emit('data-img', img);
			}

			console.log(this.rooms[data.room]);
        });
	}

	unsubscribe(socket){
		socket.on('unsubscribe', (data) => {

			if(!data.room){
				throw new Error("get room undefined");
			}

            socket.leave(data.room);

            this.rooms[data.room].watchers = this.rooms[data.room].watchers.filter((room) => {
            	if(room.id == socket.id && data.type == room.type){
            		return false;
            	}
            	return true;
            });

            console.log(this.rooms[data.room]);
        });
	}

	message(socket){
		socket.on('message',(data) => {
        	let
        		room = data.room;

        	this.rooms[data.room].data = data;

        	delete data.room;
        	delete data.preview;

            this.io.to(room).emit('data', data);
        });

		socket.on('prize',(data) => {
        	let
        		room = data.room;

        	this.rooms[data.room].prize = data;

        	delete data.room;
        	delete data.preview;

            this.io.to(room).emit('data-prize', data);
        });

		socket.on('time',(data) => {
        	let
        		room = data.room;

        	data.timestamp = new Date();

        	this.rooms[data.room].time = data;

            this.io.to(room).emit('data-time', data);
        });

		socket.on('img',(data) => {
        	let
        		room = data.room;

        	if(this.rooms[data.room].img){
        		if(this.rooms[data.room].img.interval){
        			clearInterval(this.rooms[data.room].img.interval);
        		}
        	}

        	this.rooms[data.room].img = data;


        	if(data.cooldown > 0){
        		this.rooms[data.room].img.interval = setTimeout(() => {
        			this.rooms[data.room].img = "";
        			data.img = "";
        			data.cooldown = -1;
        			this.io.to(room).emit('data-img', data);
        		},data.cooldown * 1000);
        	}

            this.io.to(room).emit('data-img', data);
        });
	}
}

module.exports = Socket;