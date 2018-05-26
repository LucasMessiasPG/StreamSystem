'use strick';

const
	env 		= require("./env"),
	express 	= require("express"),
	app 		= express(),
	morgan      = require('morgan'),
	mongoose    = require('mongoose'),
	http        = require('http').Server(app),
	bodyParser  = require('body-parser'),
	io          = require('socket.io')(http,{ path: "/api" });

process.on('unhandledRejection', (err, p) => {
	console.log(err);
});

let
	Routes = require('./routes'),
	Middleware = require("./middleware"),
	Socket = require("./socket"),
	socket = new Socket(io),
	configExpress = () => {

		app.use(function (req, res, next) {
			// res.setHeader('Content-Encoding', 'gzip');
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS, DELETE');
			res.setHeader('Allow', 'GET, POST, PATCH, OPTIONS, DELETE');
			res.setHeader('Access-Control-Allow-Credentials', 'true');
			next();
		});

		// basic config
		app.use(morgan('tiny'));
		app.use(bodyParser.urlencoded({ extended: true }));
    	app.use(bodyParser.json());

    	// middleware
    	app.use(new Middleware(express).init());

    	// routes
    	app.use(new Routes(express).init());

    	// socket
    	socket.init();

	    return http;
	};


module.exports = () => {
	mongoose.Promise = global.Promise;

	// return mongoose.connect(env.database[env.environment])
	//     .then(configExpress,function(err){
	//         throw new Error(err);
	//     });

	return new Promise(function(resolve){
		return resolve(configExpress());
	});
};