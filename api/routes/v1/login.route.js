// jshint ignore:start
'use strict';

const
	env = require("../../env"),
	jwt = require("jsonwebtoken"),
	Models = require("../../models");

class Routes{

	constructor(express){
		this.express = express;
		this.router = express.Router({mergeParams: true});
		this.basePath = "/login";
	}

	init(){
		this.router
			.route("/")
			.post(this.post);


		return this.router;
	}

	async post(req, res, next){

		let
			User = Models.User,
			email = req.body.email,
			password = req.body.password;

		let
			dataToken = {},
			user = await User.findOne({email: new RegExp('^' + email + '$', 'i')});

		dataToken.email = user.email;
		dataToken.name = user.name;

		let
			token = jwt.sign(dataToken, env.secrect, {
				expiresIn: 365 * 24 * 60 * 60
			});

		return res.json({ success: true, message: "get your token", token: token });
	}
}

module.exports = Routes;