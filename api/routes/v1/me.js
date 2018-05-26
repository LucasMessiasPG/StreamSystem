'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Routes = function () {
	function Routes(express) {
		_classCallCheck(this, Routes);

		this.express = express;
		this.router = express.Router({ mergeParams: true });
		this.basePath = "/me";
	}

	_createClass(Routes, [{
		key: "init",
		value: function init() {
			this.router.route("/").get(this.get);

			return this.router;
		}
	}, {
		key: "get",
		value: function get(req, res, next) {
			if (!req.user || req.user && req.user.public) {
				return res.status(400).json({ success: false, message: "token not found" });
			}
			return res.json({ success: true, message: "token decoded", item: req.user });
		}
	}]);

	return Routes;
}();

module.exports = Routes;