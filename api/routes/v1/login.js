// jshint ignore:start
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var env = require("../../env"),
    jwt = require("jsonwebtoken"),
    Models = require("../../models");

var Routes = function () {
	function Routes(express) {
		_classCallCheck(this, Routes);

		this.express = express;
		this.router = express.Router({ mergeParams: true });
		this.basePath = "/login";
	}

	_createClass(Routes, [{
		key: "init",
		value: function init() {
			this.router.route("/").post(this.post);

			return this.router;
		}
	}, {
		key: "post",
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
				var User, email, password, dataToken, user, token;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:

								console.log(req.body);

								User = Models.User, email = req.body.email, password = req.body.password;
								dataToken = {};
								_context.next = 5;
								return User.findOne({ email: new RegExp('^' + email + '$', 'i') });

							case 5:
								user = _context.sent;

								if (user) {
									_context.next = 8;
									break;
								}

								return _context.abrupt("return", res.status(404).json({ success: false, message: "user not found" }));

							case 8:

								dataToken.email = user.email;
								dataToken.name = user.name;

								token = jwt.sign(dataToken, env.secrect, {
									expiresIn: 365 * 24 * 60 * 60
								});
								return _context.abrupt("return", res.json({ success: true, message: "get your token", token: token }));

							case 12:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function post(_x, _x2, _x3) {
				return _ref.apply(this, arguments);
			}

			return post;
		}()
	}]);

	return Routes;
}();

module.exports = Routes;