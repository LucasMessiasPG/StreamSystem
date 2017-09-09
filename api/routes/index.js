'use strict';

class Routes{

	constructor(express){
		this.express = express;
		this.routes =  express.Router();
	}

	init(){
		this.make("/v1/me",require("./v1/me.route"));
		this.make("/v1/login",require("./v1/login.route"));
		this.make("/v1/user",require("./v1/user.route"));
		return this.routes;
	}

	make(path, Ruoute){
		return this.routes.use(path, new Ruoute(this.express).init());
	}
}

module.exports = Routes;