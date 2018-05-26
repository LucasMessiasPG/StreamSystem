webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-logged{\n\tmargin: 0 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.title = 'app';
        this.login = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        this.me();
    };
    AppComponent.prototype.me = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.onSubmit = function (login) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.doLogin(login.email, login.password)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.me()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.logout = function () {
        this.userService.logout();
        this.me();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_topbar_topbar_component__ = __webpack_require__("../../../../../src/app/components/topbar/topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_card_card_component__ = __webpack_require__("../../../../../src/app/components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_scoreboard_scoreboard_component__ = __webpack_require__("../../../../../src/app/components/scoreboard/scoreboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_room_room_component__ = __webpack_require__("../../../../../src/app/components/dashboard/room/room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipe_safe_pipe__ = __webpack_require__("../../../../../src/app/pipe/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__interceptor__ = __webpack_require__("../../../../../src/app/interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Components








// Services


// Interceptor

// Socket

var config = {
    url: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].domain,
    options: {
        path: (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production === true ? "/api" : "") + "/socket"
    }
};
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'card/:room', component: __WEBPACK_IMPORTED_MODULE_9__components_card_card_component__["a" /* CardComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'scoreboard/:room', component: __WEBPACK_IMPORTED_MODULE_10__components_scoreboard_scoreboard_component__["a" /* ScoreboardComponent */] },
    // { path: 'hero/:id',      component: HeroDetailComponent },
    // {
    //   path: 'heroes',
    //   component: HeroListComponent,
    //   data: { title: 'Heroes List' }
    // },
    // { path: '',
    //   redirectTo: '/heroes',
    //   pathMatch: 'full'
    // },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_topbar_topbar_component__["a" /* TopbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_scoreboard_scoreboard_component__["a" /* ScoreboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_room_room_component__["a" /* RoomComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pipe_safe_pipe__["a" /* SafePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_17_ng_socket_io__["SocketIoModule"].forRoot(config)
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_16__interceptor__["a" /* AuthInterceptor */],
                multi: true,
            },
            __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_15__services_socket_service__["a" /* SocketService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#card{\n\t/*background-image: url(\"/assets/img/background-card.jpg\");*/\n\twidth: 303px;\n\theight: 400px;\n\t/*border: 1px solid black;*/\n    /*border-radius: 20px;*/\n    /*box-shadow: 5px 5px 14px black;*/\n    position: relative;\n}\n#card IMG{\n\tmax-height: 100%;  \n    max-width: 100%; \n    height: auto;\n    position: absolute;  \n    top: 0;  \n    bottom: 0;  \n    left: 0;  \n    right: 0;  \n    margin: auto;\n\twidth: 255px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"card\">\n\t<img [src]=\"data.img\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var CardComponent = (function () {
    function CardComponent(socketService, route) {
        this.socketService = socketService;
        this.route = route;
    }
    CardComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.room) {
                    this.setup(this.room, "preview");
                }
                else {
                    this.route.params.subscribe(function (params) { return _this.setup(params['room'], "card"); });
                }
                return [2 /*return*/];
            });
        });
    };
    CardComponent.prototype.ngOnDestroy = function () {
        this.socketService.leaveRoom(this.room, this.type);
    };
    CardComponent.prototype.setup = function (room, type) {
        var _this = this;
        this.room = room;
        this.type = type;
        this.socketService.enterRoom(room, type);
        this.socketService.getMesssage("data-img")
            .subscribe(function (data) {
            _this.data = JSON.parse(JSON.stringify(data));
        });
    };
    return CardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CardComponent.prototype, "room", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CardComponent.prototype, "priview", void 0);
CardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'card-ss',
        template: __webpack_require__("../../../../../src/app/components/card/card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card/card.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], CardComponent);

var _a, _b;
//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<topbar-ss></topbar-ss>\n<div class=\"container\">\n\t\n\t<div>\n\t\t<h1>dashboard</h1>\n\n\t\t<div *ngIf=\"!room\">\n\t\t\t<!-- <p>Hello {{ user.name }}</p> -->\n\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"room\">Dashboard code</label>\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"_room\" name=\"room\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"enter(_room)\">Enter Dashboard</button>\n\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"create()\" >Create a new dashboard</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"room\">\n\t\t\t<room-ss [room]=\"room\" (leave)=\"disconect()\"></room-ss>\n\t\t</div>\n\t</div>\n\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js_sha256__ = __webpack_require__("../../../../crypto-js/sha256.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_crypto_js_sha256__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var DashboardComponent = (function () {
    function DashboardComponent(userService, socketService) {
        this.userService = userService;
        this.socketService = socketService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.userService.me()];
                    case 1:
                        _a.user = _b.sent();
                        this.room = localStorage.getItem("room");
                        if (this.room) {
                            this.enter(this.room);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.create = function () {
        var room = __WEBPACK_IMPORTED_MODULE_3_crypto_js_sha256___default()(new Date().getTime() + "").toString();
        this.enter(room);
    };
    DashboardComponent.prototype.enter = function (room) {
        this.room = room;
        this.socketService.enterRoom(room, "dashboard");
        localStorage.setItem("room", room);
    };
    DashboardComponent.prototype.disconect = function () {
        this.socketService.leaveRoom(this.room, "dashboard");
        localStorage.removeItem("room");
        delete this.room;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dashboard-ss',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/room/room.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-inline .pokeball{\n\twidth: 30px;\n\tcursor: pointer;\n}.list-inline .pokeball:not(.selected){\n\t-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */\n    filter: grayscale(100%);\n}\n\n\n@media screen and (max-width: 400px){\n\t.preview{\n\t\tdisplay: none;\n\t}\n}\n\n#frame { width: 1200px;}\n#frame {\n    -ms-zoom: 0.75;\n    -moz-transform: scale(0.75);\n    -moz-transform-origin: 0 0;\n    -o-transform: scale(0.75);\n    -o-transform-origin: 0 0;\n    -webkit-transform: scale(0.75);\n    -webkit-transform-origin: 0 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/room/room.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<h4 style=\"word-wrap: break-word;\">Room - {{ room }}</h4>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-12 col-lg-2 col-md-3\">\n\t\t\t<a class=\"btn btn-block btn-outline-success\" href=\"/scoreboard/{{ room }}\" target=\"_blank\">Open scoreboard</a>\n\t\t</div>\n\t\t<div class=\"col-12 col-lg-2 col-md-3\">\n\t\t\t<a class=\"btn btn-block btn-outline-success\" href=\"/card/{{ room }}\" target=\"_blank\">Open Img Link</a>\n\t\t</div>\n\t\t<div class=\"col-12 col-lg-2 col-md-3 preview\">\n\t\t\t<button class=\"btn btn-block btn-outline-info\" type=\"button\" (click)=\"showPreveiew = !showPreveiew\">Show Preview</button>\n\t\t</div>\n\t\t<div class=\"col-12 ml-auto col-lg-2 col-md-3\">\n\t\t\t<button class=\"btn btn-block btn-outline-danger\" type=\"butoon\" (click)=\"leaveRoom()\" >Leave</button>\n\t\t</div>\n\t</div>\n\n\n\t<br/>\n\n\t<div *ngIf=\"showPreveiew\">\n\t\t<p align=\"center\">\n\t\t\t<iframe id=\"frame\" [src]=\"url | safe\" frameborder=\"0\"></iframe>\n\t\t</p>\n\t\t<!-- <scoreboard-ss [priview]=\"true\" [room]=\"room\"></scoreboard-ss> -->\n\t</div>\n\n\t<br/>\n\n\t<hr>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-12\">\n\t\t\t<h3>Timer</h3>\n\t\t</div>\n\t\t<div class=\"col-12 text-center\">\n\t\t\t{{ makeTime(cooldown) }}\n\t\t</div>\n\t\t<div class=\"col\">\n\t\t\t<button [disabled]=\"status_cooldown == false\" type=\"button\" (click)=\"startTime()\" class=\"btn btn-block btn-success\">Start</button>\n\t\t</div>\n\t\t<div class=\"col\">\n\t\t\t<button type=\"button\" (click)=\"resetTime()\" class=\"btn btn-block btn-warning\">Reset</button>\n\t\t</div>\n\t\t<div class=\"col\">\n\t\t\t<button [disabled]=\"status_cooldown == true\" type=\"button\" (click)=\"stopTime()\" class=\"btn btn-block btn-danger\">Stop</button>\n\t\t</div>\n\t</div>\n\n\t<hr>\n\n\t<form (ngSubmit)=\"onSubmit(dashboard)\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"card-name\">Decription</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"dashboard.player1.decription\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\t\n\t\t\t<div class=\"col-12 col-sm-6\">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<legend>\n\t\t\t\t\t\t<span>Player 1</span>\n\t\t\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><img (click)=\"setPokeball(1,1)\" class=\"pokeball\" [ngClass]=\"{'selected': dashboard.prize1 >= 1}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><img (click)=\"setPokeball(2,1)\" class=\"pokeball\" [ngClass]=\"{'selected': dashboard.prize1 >= 2}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><img (click)=\"setPokeball(3,1)\" class=\"pokeball\" [ngClass]=\"{'selected': dashboard.prize1 >= 3}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><img (click)=\"setPokeball(4,1)\" class=\"pokeball\" [ngClass]=\"{'selected': dashboard.prize1 >= 4}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><img (click)=\"setPokeball(5,1)\" class=\"pokeball\" [ngClass]=\"{'selected': dashboard.prize1 >= 5}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><img (click)=\"setPokeball(6,1)\" class=\"pokeball\" [ngClass]=\"{'selected': dashboard.prize1 == 6}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</legend>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"namePlayer1\">Name</label>\n\t\t\t\t\t\t<input [(ngModel)]=\"dashboard.player1.name\" type=\"text\" class=\"form-control\" id=\"DashboardPlayer1name\" name=\"DashboardPlayer1name\" placeholder=\"Enter name\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"surnamePlayer1\">Surname</label>\n\t\t\t\t\t\t\t\t<input [(ngModel)]=\"dashboard.player1.surname\" type=\"text\" class=\"form-control\" id=\"DashboardPlayer1surname\" name=\"DashboardPlayer1surname\" placeholder=\"Enter surname\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-12 col-lg-4\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"scorePlayer1\">Score</label>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"changeScore(1,-1)\" type=\"button\" class=\"btn btn-warning btn-block\">-1</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"changeScore(1,1)\" type=\"button\" class=\"btn btn-success btn-block\">+1</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <input [(ngModel)]=\"dashboard.player1.score\" type=\"text\" class=\"form-control\" id=\"DashboardPlayer1score\" name=\"DashboardPlayer1score\" placeholder=\"Enter score\"> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"deckPlayer1\">Deck</label>\n\t\t\t\t\t\t\t\t<input [(ngModel)]=\"dashboard.player1.deck\" type=\"text\" class=\"form-control\" id=\"DashboardPlayer1deck\" name=\"DashboardPlayer1deck\" placeholder=\"Enter deck\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-12 col-lg-4\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"historyPlayer1\">History</label>\n\t\t\t\t\t\t\t\t<input [(ngModel)]=\"dashboard.player1.history\" type=\"text\" class=\"form-control\" id=\"DashboardPlayer1history\" name=\"DashboardPlayer1history\" placeholder=\"Enter history\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-sm-6\">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<legend>\n\t\t\t\t\t\t<span>Player 2</span>\n\t\t\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><img (click)=\"setPokeball(1,2)\" class=\"pokeball\" [ngClass]=\"{'selected': dashboard.prize2 >= 1}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><img (click)=\"setPokeball(2,2)\" class=\"pokeball\" [ngClass]=\"{'selected': dashboard.prize2 >= 2}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><img (click)=\"setPokeball(3,2)\" class=\"pokeball\" [ngClass]=\"{'selected': dashboard.prize2 >= 3}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><img (click)=\"setPokeball(4,2)\" class=\"pokeball\" [ngClass]=\"{'selected': dashboard.prize2 >= 4}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><img (click)=\"setPokeball(5,2)\" class=\"pokeball\" [ngClass]=\"{'selected': dashboard.prize2 >= 5}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><img (click)=\"setPokeball(6,2)\" class=\"pokeball\" [ngClass]=\"{'selected': dashboard.prize2 == 6}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</legend>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"namePlayer1\">Name</label>\n\t\t\t\t\t\t<input [(ngModel)]=\"dashboard.player2.name\" type=\"text\" class=\"form-control\" id=\"DashboardPlayer2name\" name=\"DashboardPlayer2name\" placeholder=\"Enter name\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"surnameplayer2\">Surname</label>\n\t\t\t\t\t\t\t\t<input [(ngModel)]=\"dashboard.player2.surname\" type=\"text\" class=\"form-control\" id=\"DashboardPlayer2surname\" name=\"DashboardPlayer2surname\" placeholder=\"Enter surname\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-12 col-lg-4\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"scoreplayer2\">Score</label>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"changeScore(2,-1)\" type=\"button\" class=\"btn btn-warning btn-block\">-1</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"changeScore(2,1)\" type=\"button\" class=\"btn btn-success btn-block\">+1</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <input [(ngModel)]=\"dashboard.player2.score\" type=\"text\" class=\"form-control\" id=\"DashboardPlayer2score\" name=\"DashboardPlayer2score\" placeholder=\"Enter score\"> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"deckplayer2\">Deck</label>\n\t\t\t\t\t\t\t\t<input [(ngModel)]=\"dashboard.player2.deck\" type=\"text\" class=\"form-control\" id=\"DashboardPlayer2deck\" name=\"DashboardPlayer2deck\" placeholder=\"Enter deck\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-12 col-lg-4\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"historyplayer2\">History</label>\n\t\t\t\t\t\t\t\t<input [(ngModel)]=\"dashboard.player2.history\" type=\"text\" class=\"form-control\" id=\"DashboardPlayer2history\" name=\"DashboardPlayer2history\" placeholder=\"Enter history\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 text-center\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-outline-success\">Send</button>\t\n\t\t\t</div>\n\n\t\t</div>\n\n\t</form>\n\n\t<form (ngSubmit)=\"search(card_name)\" autocomplete=\"off\" style=\"margin-top: 20px;\">\n\t\t<div class=\"row\">\n\t\n\n\t\t\t<div class=\"col-12 col-md-2 text-center\" *ngIf=\"img\">\n\t\t\t\t<img style=\"width: 60px;\" [src]=\"img.img\">\n\t\t\t</div>\n\n\n\t\t\t<div class=\"col-12 col-md-5\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"card-name\">Card Name</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"card_name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Search</button>\n\t\t\t\t\t\t\t<button type=\"button\" (click)=\"hideImg()\" class=\"btn btn-info\">Hide</button>\n\t\t\t\t\t\t\t<button type=\"button\" (click)=\"show_preloaded = !show_preloaded\" class=\"btn btn-info\">Pre loaded</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\n\t\t\t<div class=\"col-12 col-md-5\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"\">Link Img</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"list_card\" [(ngModel)]=\"link_card\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"showImg({ imageUrl: link_card },-1)\">Show</button>\n\t\t\t\t\t\t\t<button type=\"button\" (click)=\"logo_show_preloaded = !logo_show_preloaded\" class=\"btn btn-info\">Pre loaded</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\n\n\n\t\t\t<div *ngIf=\"logo_show_preloaded\" class=\"col-12\">\n\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-3\" *ngFor=\"let logo of link_logo_pre_loaded\">\n\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t\t\t<img style=\"width: 40px\" [src]=\"logo.imageUrl\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-10\">\n\t\t\t\t\t\t\t\t<div class=\"col\"><button (click)=\"showImg(logo,-1)\" class=\"btn btn-block btn-success\">Mostra</button></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\t\t\t<div *ngIf=\"show_preloaded\" class=\"col-12\">\n\t\t\t\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-3\" *ngFor=\"let pre of link_card_pre_loaded\">\n\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t\t\t<img style=\"width: 40px\" [src]=\"pre.imageUrl\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-10\">\n\t\t\t\t\t\t\t\t<p style=\"text-align: center; margin-bottom: 2px;\">{{ pre.name }}</p>\n\t\t\t\t\t\t\t\t<div class=\"col\"><button (click)=\"showImg(pre,-1)\" class=\"btn btn-block btn-success\">Mostra</button></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</form>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-12 col-md-4 col-lg-3\" style=\"margin-top: 5px; margin-bottom: 5px;\" *ngFor=\"let card of cards\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t<img style=\"width: 80px\" [src]=\"card.imageUrl\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t<p style=\"text-align: center; margin-bottom: 2px;\">{{ card.name }}</p>\n\t\t\t\t\t<div class=\"col\"><button (click)=\"showImg(card,20)\" class=\"btn btn-block btn-primary\">20s</button></div>\n\t\t\t\t\t<div class=\"col\"><button (click)=\"showImg(card,-1)\" class=\"btn btn-block btn-success\">Mostra</button></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/room/room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomComponent = (function () {
    function RoomComponent(socketService, http) {
        this.socketService = socketService;
        this.http = http;
        this.leave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.cooldown = 0;
        this.status_cooldown = true;
        this.player1 = {
            decription: "",
            history: "",
            name: "",
            surname: "",
            deck: "",
            score: 0
        };
        this.player2 = {
            decription: "",
            history: "",
            name: "",
            surname: "",
            deck: "",
            score: 0
        };
        this.dashboard = {
            prize1: this.prize1,
            prize2: this.prize2,
            player1: this.player1,
            player2: this.player2
        };
    }
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.link_card_pre_loaded = this.getCards();
        this.link_logo_pre_loaded = [
            {
                imageUrl: "https://assets.pokemon.com//assets/cms2/img/attend-events/championship-slider/regional_championships_logo_en.png"
            },
            {
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Pok%C3%A9mon_Trading_Card_Game_logo.svg/2000px-Pok%C3%A9mon_Trading_Card_Game_logo.svg.png"
            },
            {
                imageUrl: "https://assets.pokemon.com//assets/cms2/img/attend-events/attend-events/play_pokemon_logo.png"
            }
        ];
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].web_link + "/scoreboard/" + this.room;
        this.socketService.getMesssage("data")
            .subscribe(function (data) {
            if (!data.preview) {
                _this.dashboard = data;
            }
            else {
                delete data.preview;
            }
            if (!_this.dashboard.prize1) {
                _this.dashboard.prize1 = 6;
            }
            if (!_this.dashboard.prize2) {
                _this.dashboard.prize2 = 6;
            }
        });
        this.socketService.getMesssage("data-prize")
            .subscribe(function (data) {
            var _data = JSON.parse(JSON.stringify(data));
            _this.dashboard.prize1 = _data.prize1;
            _this.dashboard.prize2 = _data.prize2;
        });
        this.socketService.getMesssage("data-time")
            .subscribe(function (data) {
            _this.cooldown = data.value;
            if (data.status == "running") {
                if (_this.inteval) {
                    clearInterval(_this.inteval);
                }
                _this.inteval = setInterval(function () {
                    _this.status_cooldown = false;
                    _this.cooldown++;
                }, 1000);
            }
            else {
                clearInterval(_this.inteval);
                _this.status_cooldown = true;
            }
        });
        this.socketService.getMesssage("data-img")
            .subscribe(function (data) {
            _this.img = JSON.parse(JSON.stringify(data));
        });
    };
    RoomComponent.prototype.sendTransaction = function () {
        this.socketService.sendMessage(this.room, { message: new Date().toString() });
    };
    RoomComponent.prototype.leaveRoom = function () {
        this.leave.emit();
    };
    RoomComponent.prototype.onSubmit = function (data) {
        this.socketService.sendMessage(this.room, data);
    };
    RoomComponent.prototype.setPokeball = function (number, player) {
        this.dashboard["prize" + player] = number;
        var _data = JSON.parse(JSON.stringify(this.dashboard));
        delete _data.player1;
        delete _data.player2;
        this.socketService.sendMessagePrize(this.room, _data);
    };
    RoomComponent.prototype.startTime = function () {
        this.socketService.sendMessageTime(this.room, {
            value: this.cooldown,
            status: "running"
        });
    };
    RoomComponent.prototype.resetTime = function () {
        this.cooldown = 0;
        this.stopTime();
    };
    RoomComponent.prototype.stopTime = function () {
        this.socketService.sendMessageTime(this.room, {
            value: this.cooldown,
            status: "stop"
        });
    };
    RoomComponent.prototype.makeTime = function (time) {
        if (time < 60) {
            return "00:00:" + ("0" + time).slice(-2);
        }
        var hours = 0, minutes = 0, seconds = time;
        do {
            if (seconds > 0) {
                seconds -= 60;
                minutes++;
                if (minutes >= 60) {
                    minutes -= 60;
                    hours++;
                }
            }
        } while (60 <= seconds && seconds > 0);
        var response = (hours > 0 ? (("0" + hours).slice(-2) + ":") : ("")) + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
        return response;
    };
    RoomComponent.prototype.changeScore = function (player, number) {
        if (typeof this.dashboard["player" + player].score === 'undefined') {
            this.dashboard["player" + player].score = 0;
        }
        this.dashboard["player" + player].score += number;
        if (this.dashboard["player" + player].score < 0) {
            this.dashboard["player" + player].score = 0;
        }
        if (this.dashboard["player" + player].score > 9) {
            this.dashboard["player" + player].score = 9;
        }
        this.socketService.sendMessage(this.room, this.dashboard);
    };
    RoomComponent.prototype.search = function (name) {
        var _this = this;
        console.log(name);
        this.http.get("https://api.pokemontcg.io/v1/cards?name=" + name)
            .toPromise()
            .then(function (apiResult) {
            _this.cards = apiResult.cards;
        });
    };
    RoomComponent.prototype.searchNumber = function (number) {
        var _this = this;
        this.http.get("https://api.pokemontcg.io/v1/cards?number=" + number)
            .toPromise()
            .then(function (apiResult) {
            _this.cards = apiResult.cards;
        });
    };
    RoomComponent.prototype.hideImg = function () {
        this.socketService.sendMessageImg(this.room, { img: "", cooldown: -1 });
    };
    RoomComponent.prototype.showImg = function (card, cooldown) {
        if (cooldown === -1) {
            this.socketService.sendMessageImg(this.room, { img: card.imageUrl, cooldown: -1 });
        }
        else {
            this.socketService.sendMessageImg(this.room, { img: card.imageUrl, cooldown: cooldown });
        }
    };
    RoomComponent.prototype.getCards = function () {
        return [
            {
                "imageUrl": "https://images.pokemontcg.io/xy10/105.png",
                "name": "N"
            },
            {
                "imageUrl": "https://images.pokemontcg.io/xy9/107.png",
                "name": "Sycamore"
            },
            {
                "imageUrl": "https://images.pokemontcg.io/sm3/116.png",
                "name": "Kiawe"
            },
            {
                "imageUrl": "https://images.pokemontcg.io/xy8/134.png",
                "name": "Brigette"
            },
            {
                "imageUrl": "https://images.pokemontcg.io/xy10/113.png",
                "name": "Ultra Ball"
            },
            {
                "imageUrl": "https://images.pokemontcg.io/sm1/122.png",
                "name": "Lillie"
            },
            {
                "name": "Hala",
                "imageUrl": "https://images.pokemontcg.io/sm2/126.png"
            },
            {
                "name": "Professor Kukui",
                "imageUrl": "https://images.pokemontcg.io/sm1/128.png"
            },
            {
                "name": "Shauna",
                "imageUrl": "https://images.pokemontcg.io/xy4/104.png"
            },
            {
                "name": "Acerola",
                "imageUrl": "https://images.pokemontcg.io/sm3/112.png"
            },
            {
                "name": "Guzma",
                "imageUrl": "https://images.pokemontcg.io/sm3/115.png"
            },
            {
                "name": "Tapu Lele-GX",
                "imageUrl": "https://images.pokemontcg.io/sm2/60.png"
            },
            {
                "name": "Drampa-GX",
                "imageUrl": "https://images.pokemontcg.io/sm2/115.png"
            },
            {
                "name": "Gardevoir-GX",
                "imageUrl": "https://images.pokemontcg.io/sm3/93.png"
            },
            {
                "name": "Sylveon-GX",
                "imageUrl": "https://images.pokemontcg.io/sm2/92.png"
            },
            {
                "name": "Tapu Bulu-GX",
                "imageUrl": "https://images.pokemontcg.io/sm3/130.png"
            },
            {
                "name": "Golisopod-GX",
                "imageUrl": "https://images.pokemontcg.io/sm3/17.png"
            },
            {
                "name": "Ho-Oh-GX",
                "imageUrl": "https://images.pokemontcg.io/sm3/21.png"
            },
            {
                "name": "Volcanion-EX",
                "imageUrl": "https://images.pokemontcg.io/xy11/26.png"
            },
            {
                "name": "Octillery",
                "imageUrl": "https://images.pokemontcg.io/xy8/33.png"
            },
            {
                "name": "Garbodor",
                "imageUrl": "https://images.pokemontcg.io/sm2/51.png"
            },
            {
                "name": "Garbodor (hab)",
                "imageUrl": "https://images.pokemontcg.io/xy9/57.png"
            },
            {
                "name": "Rainbow Energy",
                "imageUrl": "https://images.pokemontcg.io/xy8/152.png"
            },
            {
                "name": "Double Colorless Energy",
                "imageUrl": "https://images.pokemontcg.io/xy4/111.png"
            }
        ];
    };
    return RoomComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], RoomComponent.prototype, "room", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], RoomComponent.prototype, "leave", void 0);
RoomComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'room-ss',
        template: __webpack_require__("../../../../../src/app/components/dashboard/room/room.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/room/room.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_socket_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], RoomComponent);

var _a, _b;
//# sourceMappingURL=room.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<topbar-ss></topbar-ss>\n<div class=\"container\">\n\t<div>\n\t\t<h1>Home</h1>\n\t</div>\n\t\n\t<h4>Register</h4>\n\t<form (ngSubmit)=\"register(user)\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-6\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"name\">Name</label>\n\t\t\t\t\t<input [(ngModel)]=\"user.name\" type=\"text\" class=\"form-control\" id=\"name\" name=\"name\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t\t<input [(ngModel)]=\"user.email\" type=\"text\" class=\"form-control\" id=\"email\" name=\"email\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t<input [(ngModel)]=\"user.password\" type=\"password\" class=\"form-control\" id=\"password\" name=\"password\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"password2\">Retry password</label>\n\t\t\t\t\t<input [(ngModel)]=\"user.password2\" type=\"password\" class=\"form-control\" id=\"password2\" name=\"password2\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Send</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n\n\t<div *ngIf=\"error\" class=\"alert alert-danger\">\n\t\t{{ error }}\n\t</div>\n\n\t<div *ngIf=\"success\" class=\"alert alert-success\">\n\t\t{{ success }}\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(http) {
        this.http = http;
        this.user = {
            name: "",
            email: "",
            password: "",
            password2: ""
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.register = function (user) {
        var _this = this;
        this.error = "";
        var err = [];
        if (!user.name) {
            err.push("name is required");
        }
        if (!user.email) {
            err.push("email is required");
        }
        if (!user.password) {
            err.push("password is required");
        }
        if (!user.password2) {
            err.push("retry password is required");
        }
        if (user.password !== user.password2) {
            err.push("password not match");
        }
        if (err.length) {
            this.error = err.join(", ");
        }
        else {
            delete user.password2;
            this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api + "/v1/user", user)
                .toPromise()
                .then(function (result) {
                if (result.success) {
                    _this.user = {
                        name: "",
                        email: "",
                        password: "",
                        password2: ""
                    };
                    _this.success = result.message;
                }
                else {
                    _this.error = result.message;
                }
            })
                .catch(function (err) {
                if (err.error) {
                    _this.error = err.error.message;
                }
                else {
                    _this.error = err.message;
                }
            });
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'home-ss',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/scoreboard/scoreboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n\tfont-family: Calibri, Candara, Segoe, \"Segoe UI\", Optima, Arial, sans-serif;\n\t/*font-size: 30px;*/\n\t/*background-color: #00d200;*/\n\tcolor: white;\n\ttext-shadow: 1px 1px 5px black;\n}\nbody{\n\theight: 100%;\n}\n.list-inline .pokeball{\n\twidth: 25px;\n\tcursor: pointer;\n}.list-inline .pokeball:not(.selected){\n\t-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */\n    filter: grayscale(100%);\n}\n\n.deck{\n\tfont-size: 24px;\n}\n\n.surname{\n\tfont-size: 18px;\n\tline-height: 12px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/scoreboard/scoreboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" [ngStyle]=\"{'font-size.px': fontSize}\">\n\t<div class=\"col-5 text-right\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-4\">{{ data.player1.history || \"0-0-0\" }}</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-12\">{{ data.player1.name || \"Name\" }}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-12 surname\">{{ data.player1.surname }}</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col deck\">{{ data.player1.deck || \"Deck\" }}</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"pokeball\" [ngClass]=\"{'selected': data.prize1 >= 1}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"pokeball\" [ngClass]=\"{'selected': data.prize1 >= 2}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"pokeball\" [ngClass]=\"{'selected': data.prize1 >= 3}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"pokeball\" [ngClass]=\"{'selected': data.prize1 >= 4}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"pokeball\" [ngClass]=\"{'selected': data.prize1 >= 5}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"pokeball\" [ngClass]=\"{'selected': data.prize1 == 6}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-2 text-center\">\n\t\t<div class=\"row\" style=\"margin-top: 5px;\">\n\t\t\t<div class=\"col\" [ngStyle]=\"{'font-size.px': fontScore}\">{{ data.player1.score || 0 }}</div>\n\t\t\t<div class=\"col\"><img [ngStyle]=\"{'width.px': imgSize}\" src=\"/assets/img/logo.png\" alt=\"\"></div>\n\t\t\t<div class=\"col\" [ngStyle]=\"{'font-size.px': fontScore}\">{{ data.player2.score || 0 }}</div>\n\t\t</div>\n\t\t<div class=\"row\" style=\"margin-top: 5px;\">\n\t\t\t<div *ngIf=\"data.player1.decription\" class=\"col-12\" [ngStyle]=\"{'font-size.px': fontSamllSize}\">{{ data.player1.decription }}</div>\n\t\t\t<div class=\"col\">{{ makeTime(cooldown) }}</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-5 text-left\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-12\">{{ data.player2.name || \"Name\" }}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-12 surname\">{{ data.player2.surname }}</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-4\">{{ data.player2.history || \"0-0-0\" }}</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"pokeball\" [ngClass]=\"{'selected': data.prize2 == 6}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"pokeball\" [ngClass]=\"{'selected': data.prize2 >= 5}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"pokeball\" [ngClass]=\"{'selected': data.prize2 >= 4}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"pokeball\" [ngClass]=\"{'selected': data.prize2 >= 3}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"pokeball\" [ngClass]=\"{'selected': data.prize2 >= 2}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"pokeball\" [ngClass]=\"{'selected': data.prize2 >= 1}\" src=\"/assets/img/pokeball.png\" alt=\"\"></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"col deck\">{{ data.player2.deck || \"Deck\" }}</div>\n\t\t</div>\t\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/scoreboard/scoreboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ScoreboardComponent = (function () {
    function ScoreboardComponent(socketService, route) {
        this.socketService = socketService;
        this.route = route;
        this.player1 = {
            decription: "",
            history: "",
            name: "",
            surname: "",
            deck: "",
            score: 0
        };
        this.player2 = {
            history: "",
            name: "",
            surname: "",
            deck: "",
            score: 0
        };
        this.cooldown = 0;
        this.data = {
            prize1: this.prize1,
            prize2: this.prize2,
            player1: this.player1,
            player2: this.player2
        };
    }
    ScoreboardComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (typeof this.priview === 'undefined') {
                    this.fontScore = 40;
                    this.fontSize = 30;
                    this.fontSamllSize = 22;
                    this.imgSize = 60;
                    this.priview = false;
                }
                else {
                    this.fontScore = 30;
                    this.fontSize = 20;
                    this.imgSize = 40;
                    this.fontSamllSize = 18;
                }
                if (this.room) {
                    this.setup(this.room, "preview");
                }
                else {
                    this.route.params.subscribe(function (params) { return _this.setup(params['room'], "scoreboard"); });
                }
                return [2 /*return*/];
            });
        });
    };
    ScoreboardComponent.prototype.ngOnDestroy = function () {
        this.socketService.leaveRoom(this.room, this.type);
    };
    ScoreboardComponent.prototype.setup = function (room, type) {
        var _this = this;
        this.room = room;
        this.type = type;
        this.socketService.enterRoom(room, type);
        this.socketService.getMesssage("data")
            .subscribe(function (data) {
            console.log(data);
            _this.data = JSON.parse(JSON.stringify(data));
        });
        this.socketService.getMesssage("data-prize")
            .subscribe(function (data) {
            var _data = JSON.parse(JSON.stringify(data));
            console.log(data);
            _this.data.prize1 = _data.prize1;
            _this.data.prize2 = _data.prize2;
        });
        this.socketService.getMesssage("data-time")
            .subscribe(function (data) {
            _this.cooldown = data.value;
            if (data.status == "running") {
                if (_this.inteval) {
                    clearInterval(_this.inteval);
                }
                _this.inteval = setInterval(function () {
                    _this.status_cooldown = false;
                    _this.cooldown++;
                }, 1000);
            }
            else {
                clearInterval(_this.inteval);
                _this.status_cooldown = true;
            }
        });
    };
    ScoreboardComponent.prototype.makeTime = function (time) {
        if (time < 60) {
            return "00:00:" + ("0" + time).slice(-2);
        }
        var hours = 0, minutes = 0, seconds = time;
        do {
            if (seconds > 0) {
                seconds -= 60;
                minutes++;
                if (minutes >= 60) {
                    minutes -= 60;
                    hours++;
                }
            }
        } while (60 <= seconds && seconds > 0);
        var response = (hours > 0 ? (("0" + hours).slice(-2) + ":") : ("")) + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
        return response;
    };
    return ScoreboardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ScoreboardComponent.prototype, "room", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ScoreboardComponent.prototype, "priview", void 0);
ScoreboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'scoreboard-ss',
        template: __webpack_require__("../../../../../src/app/components/scoreboard/scoreboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/scoreboard/scoreboard.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], ScoreboardComponent);

var _a, _b;
//# sourceMappingURL=scoreboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/topbar/topbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/topbar/topbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <a class=\"navbar-brand\">StreamSystem</a>\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n            </li>\n        </ul>\n        <form class=\"form-inline\" (ngSubmit)=\"onSubmit(loginForm.value)\" #loginForm=\"ngForm\">\n            <div *ngIf=\"!user\">\n                <input class=\"form-control mr-sm-2\" placeholder=\"Email\" type=\"text\" name=\"email\" ngModel>\n                <input class=\"form-control mr-sm-2\" placeholder=\"Password\" type=\"password\" name=\"password\" ngModel>\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Log in</button>\n            </div>\n            <div *ngIf=\"user\">\n                <span class=\"user-logged\">Hello {{ user.name }} </span>\n                <button  class=\"btn btn-outline-warning my-2 my-sm-0\" type=\"button\" (click)=\"logout()\">Log out</button>\n            </div>\n        </form>\n    </nav>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/topbar/topbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var TopbarComponent = (function () {
    function TopbarComponent(userService) {
        this.userService = userService;
        this.login = {};
    }
    TopbarComponent.prototype.ngOnInit = function () {
        this.me();
    };
    TopbarComponent.prototype.me = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.userService.me()];
                    case 1:
                        _a.user = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TopbarComponent.prototype.onSubmit = function (login) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.doLogin(login.email, login.password)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.me()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TopbarComponent.prototype.logout = function () {
        this.userService.logout();
        this.me();
    };
    return TopbarComponent;
}());
TopbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'topbar-ss',
        template: __webpack_require__("../../../../../src/app/components/topbar/topbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/topbar/topbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], TopbarComponent);

var _a;
//# sourceMappingURL=topbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthInterceptor = (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        if (localStorage.getItem("token") != undefined) {
            return next.handle(req.clone({
                setHeaders: {
                    'X-api-key': localStorage.getItem("token")
                }
            }));
        }
        else {
            return next.handle(req);
        }
    };
    return AuthInterceptor;
}());
AuthInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], AuthInterceptor);

//# sourceMappingURL=interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService(socket) {
        this.socket = socket;
    }
    SocketService.prototype.enterRoom = function (room, type) {
        this.socket.emit("subscribe", { room: room, type: type });
    };
    SocketService.prototype.leaveRoom = function (room, type) {
        this.socket.emit("unsubscribe", { room: room, type: type });
    };
    SocketService.prototype.sendMessage = function (room, data) {
        data.room = room;
        this.socket.emit("message", data);
    };
    SocketService.prototype.sendMessagePrize = function (room, data) {
        data.room = room;
        this.socket.emit("prize", data);
    };
    SocketService.prototype.sendMessageTime = function (room, data) {
        data.room = room;
        this.socket.emit("time", data);
    };
    SocketService.prototype.sendMessageImg = function (room, data) {
        data.room = room;
        this.socket.emit("img", data);
    };
    SocketService.prototype.getMesssage = function (channel) {
        return this.socket
            .fromEvent(channel);
    };
    return SocketService;
}());
SocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"]) === "function" && _a || Object])
], SocketService);

var _a;
//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getToken = function () {
        return localStorage.getItem("token");
    };
    UserService.prototype.removeToken = function () {
        localStorage.removeItem("token");
        return true;
    };
    UserService.prototype.setToken = function (token) {
        localStorage.setItem("token", token);
        return true;
    };
    UserService.prototype.me = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                user = { name: "", email: "" };
                return [2 /*return*/, user];
            });
        });
    };
    UserService.prototype.doLogin = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.user) return [3 /*break*/, 2];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(true).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        body = { email: email, password: password };
                        return [4 /*yield*/, this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].api + "/v1/login", body)
                                .toPromise()
                                .then(function (result) {
                                if (result.success) {
                                    return _this.setToken(result.token);
                                }
                                return false;
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.logout = function () {
        delete this.user;
        return this.removeToken();
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    api: "http://scoreboardtcg.kinghost.net/api",
    domain: "http://scoreboardtcg.kinghost.net/api",
    web_link: "http://scoreboardtcg.kinghost.net"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map