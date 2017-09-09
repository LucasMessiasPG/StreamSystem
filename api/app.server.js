'use strick';

const
	env 		= require("./env"),
	express 	= require("express"),
	app 		= express(),
	morgan      = require('morgan'),
	mongoose    = require('mongoose'),
	http        = require('http').Server(app),
	bodyParser  = require('body-parser'),
	io          = require('socket.io')(http,{ path: "/socket" });

process.on('unhandledRejection', (err, p) => {
	console.log(err);
});


let
	Routes = require('./routes'),
	Middleware = require("./middleware"),
	configExpress = () => {

		// basic config
		app.use(morgan('tiny'));
		app.use(bodyParser.urlencoded({ extended: true }));
    	app.use(bodyParser.json());

    	// middleware
    	app.use(new Middleware(express).init());

    	// routes
    	app.use(new Routes(express).init());

    	// socket
    	io.on('connection', function(socket) {

	        socket.on('subscribe', (hash) => {
	            socket.join(hash);
	        });

	        socket.on('unsubscribe', (hash) => {
	            socket.leave(hash);
	            socket.disconnect();
	        });

	        socket.on('transactions', function(data) {
	            socket.broadcast.to(data.hash).emit('transactions', data);
	        });

	    });


	    return http;
	};


module.exports = () => {
	mongoose.Promise = global.Promise;

	return mongoose.connect(env.database[env.environment])
	    .then(configExpress,function(err){
	        throw new Error(err);
	    });
};