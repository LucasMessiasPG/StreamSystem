'use strict';

const
	model = require("../../models");

class Routes{

	constructor(express){
		this.express = express;
		this.router = express.Router({mergeParams: true});
		this.basePath = "/user";
	}

	init(){
		this.router
			.route("/")
			.post(this.post);


		return this.router;
	}

	post(req, res, next){

		let
			User = model.User;

		let
			user = new User();

		user.name = req.body.name;
		user.email = req.body.email;
		user.password = req.body.password;

		user.save()
		.then(() => {
			return res.json({ success: true, message: "user created" });
		})
		.catch(err => {
			return res.status(500).json({ success: false, message: "Error on save user", err: err });
		});

	}
}

module.exports = Routes;