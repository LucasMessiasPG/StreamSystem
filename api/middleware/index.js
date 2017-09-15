'use strict';

const
	env = require("../env"),
	jwt = require("jsonwebtoken");

class Routes{

	constructor(express){
		this.express = express;
		this.router = express.Router({mergeParams: true});
	}

	init(){

		this.router
			.use(this.enableCors);

		this.router
			.use(this.decodeToken);

		return this.router;
	}

	decodeToken(req, res, next){

		let
			token = req.body.token || req.params.token || req.headers["x-api-key"] || req.query.token;

		if(token){
			jwt.verify(token, env.secrect, (err, decoded) => {
				if(err)
					return res.status(403).send({ success: false, message: err });

				req.user = decoded;

				next();
			});
		}else{
			req.user = {
				public: true
			};
			next();
		}

	}

	enableCors(req, res, next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS, DELETE');
        res.header('Allow', 'GET, POST, PATCH, OPTIONS, DELETE');
        res.header('Access-Control-Allow-Credentials', 'true');
		res.header('Access-Control-Allow-Headers', 'X-api-key, content-type');

        next();
	}

}

module.exports = Routes;