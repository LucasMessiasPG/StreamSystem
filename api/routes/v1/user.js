'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var model = require("../../models");

var Routes = function () {
	function Routes(express) {
		_classCallCheck(this, Routes);

		this.express = express;
		this.router = express.Router({ mergeParams: true });
		this.basePath = "/user";
	}

	_createClass(Routes, [{
		key: "init",
		value: function init() {
			this.router.route("/").post(this.post);

			return this.router;
		}
	}, {
		key: "post",
		value: function post(req, res, next) {

			var User = model.User;

			var user = new User();

			user.name = req.body.name;
			user.email = req.body.email;
			user.password = req.body.password;

			user.save().then(function () {
				return res.json({ success: true, message: "user created" });
			}).catch(function (err) {
				return res.status(500).json({ success: false, message: "Error on save user", err: err });
			});
		}
	}]);

	return Routes;
}();

module.exports = Routes;