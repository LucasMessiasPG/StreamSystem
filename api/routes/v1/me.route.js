'use strict';

class Routes{

	constructor(express){
		this.express = express;
		this.router = express.Router({mergeParams: true});
		this.basePath = "/me";
	}

	init(){
		this.router
			.route("/")
			.get(this.get);


		return this.router;
	}

	get(req, res, next){
		if(!req.user){
			return res.status(400).json({ success: false, message: "token not found" });
		}
		return res.json({ success: true, message: "token decoded", item: req.user });
	}
}

module.exports = Routes;