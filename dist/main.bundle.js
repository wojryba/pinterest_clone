webpackJsonp([1,4],{

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 117;


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(134);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(219),
        styles: [__webpack_require__(206)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_masonry__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_my_pics_my_pics_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_all_pics_all_pics_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_user_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__ = __webpack_require__(133);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_all_pics_all_pics_component__["a" /* AllPicsComponent */] },
    { path: 'myPics', component: __WEBPACK_IMPORTED_MODULE_11__components_my_pics_my_pics_component__["a" /* MyPicsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_13__components_user_user_component__["a" /* UserComponent */] }
];
function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthConfig"]({}), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_my_pics_my_pics_component__["a" /* MyPicsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_all_pics_all_pics_component__["a" /* AllPicsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_user_user_component__["a" /* UserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_8_angular2_masonry__["a" /* MasonryModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_15__services_api_service__["a" /* ApiService */], {
                provide: __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]]
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPicsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllPicsComponent = (function () {
    function AllPicsComponent(api, auth, router) {
        this.api = api;
        this.auth = auth;
        this.router = router;
        this.myOptions = {
            gutter: 10,
            columnWidth: 2,
            itemSelector: '.grid-item'
        };
    }
    AllPicsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.api.Sockets().subscribe(function (data) {
            _this.handleSocet(data);
        });
        this.getPics();
    };
    AllPicsComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    AllPicsComponent.prototype.getPics = function () {
        var _this = this;
        this.api.getAllPics().subscribe(function (response) {
            _this.images = JSON.parse(response['_body']);
        }, function (error) { return console.log(error); });
    };
    AllPicsComponent.prototype.handleSocet = function (data) {
        if (data.type === 'deletePic') {
            this.images = this.images.filter(function (img) {
                if (img._id !== data.pic._id) {
                    return img;
                }
            });
        }
        else if (data.type === 'addPic') {
            data.pic.creator = {
                nick: data.user.nickname,
                picture: data.user.picture,
                user_id: data.user.user_id
            };
            this.images.push(data.pic);
        }
        else if (data.type === 'like') {
            var j = this.images.findIndex(function (val) {
                if (val._id === data.pic._id) {
                    return val;
                }
            });
            this.images[j].likes = data.pic.likes;
        }
    };
    AllPicsComponent.prototype.like = function (i) {
        var _this = this;
        var pic = this.images[i];
        this.api.likePic(pic._id).subscribe(function (response) {
            var likes = JSON.parse(response['_body']);
            pic.likes = likes;
            _this.api.changeLike(pic);
        }, function (error) { return console.log(error); });
    };
    AllPicsComponent.prototype.userClick = function (i) {
        var _this = this;
        this.api.findUser(this.images[i].creator._id).subscribe(function (response) {
            _this.api.userData = JSON.parse(response['_body']);
            if (_this.api.userData.user === _this.auth.userProfile['user_id']) {
                _this.router.navigate(['/myPics']);
            }
            else {
                _this.router.navigate(['/user']);
            }
        }, function (error) { return console.log(error); });
    };
    return AllPicsComponent;
}());
AllPicsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-all-pics',
        template: __webpack_require__(220),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AllPicsComponent);

var _a, _b, _c;
//# sourceMappingURL=all-pics.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPicsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyPicsComponent = (function () {
    function MyPicsComponent(api, ref) {
        this.api = api;
        this.ref = ref;
        this.user = [];
        this.images = [];
        this.myOptions = {
            gutter: 10,
            columnWidth: 2,
            itemSelector: '.grid-item'
        };
    }
    MyPicsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.api.Sockets().subscribe(function (data) {
            _this.handleSocet(data);
        });
        this.api.getMyPics().subscribe(function (response) {
            console.log(response);
            var pics = JSON.parse(response['_body']);
            if (pics.length !== 0) {
                _this.images = pics[0].images;
                _this.user = {
                    nick: pics[0].nick,
                    picture: pics[0].picture
                };
            }
        }, function (error) { return console.log(error); });
    };
    MyPicsComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    MyPicsComponent.prototype.handleSocet = function (data) {
        console.log(data);
        if (data.type === 'addPic') {
            if (this.images) {
                this.images.push(data.pic);
                this.user = {
                    nick: data.user.nickname,
                    picture: data.user.picture
                };
            }
        }
        else if (data.type === 'deletePic') {
            this.images = this.images.filter(function (img) {
                if (img._id !== data.pic._id) {
                    return img;
                }
            });
        }
        else if (data.type === 'like') {
            var j = this.images.findIndex(function (val) {
                if (val._id === data.pic._id) {
                    return val;
                }
            });
            this.images[j].likes = data.pic.likes;
        }
    };
    MyPicsComponent.prototype.deletePic = function (i) {
        var _this = this;
        var pic = this.images[i];
        this.api.deletePic(pic._id).subscribe(function (response) {
            _this.images.splice(i, 1);
            _this.api.deletePicSocet(pic);
        }, function (error) { return console.log(error); });
    };
    MyPicsComponent.prototype.like = function (i) {
        var _this = this;
        var pic = this.images[i];
        this.api.likePic(pic._id).subscribe(function (response) {
            var likes = JSON.parse(response['_body']);
            pic.likes = likes;
            _this.api.changeLike(pic);
        }, function (error) { return console.log(error); });
    };
    return MyPicsComponent;
}());
MyPicsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-my-pics',
        template: __webpack_require__(221),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], MyPicsComponent);

var _a, _b;
//# sourceMappingURL=my-pics.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = (function () {
    function NavbarComponent(auth, api, fb, _flashMessagesService) {
        this.auth = auth;
        this.api = api;
        this.fb = fb;
        this._flashMessagesService = _flashMessagesService;
        this.dropdown = false;
        this.disable = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            Url: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            Description: ['']
        });
    };
    NavbarComponent.prototype.dropdownChange = function () {
        this.dropdown = !this.dropdown;
    };
    NavbarComponent.prototype.onSubmit = function () {
        var _this = this;
        this.disable = true;
        this.api.addImg(this.form.value, this.auth.userProfile).subscribe(function (response) {
            _this.form.reset();
            _this.disable = false;
            _this._flashMessagesService.show('Pic was added!', { cssClass: 'alert-success', timeout: 2000 });
            var pic = JSON.parse(response['_body']);
            _this.api.addPic(pic, _this.auth.userProfile);
        }, function (error) {
            console.log(error);
            _this.disable = false;
        }, function () { return console.log('complete'); });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(222),
        styles: [__webpack_require__(209)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["f" /* trigger */])('enterAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* animate */])('200ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({ opacity: 1 }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({ opacity: 1 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* animate */])('200ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({ opacity: 0 }))
                ])
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(api, router) {
        this.api = api;
        this.router = router;
        this.user = this.api.userData;
        this.images = this.api.userData.images;
        this.myOptions = {
            gutter: 10,
            columnWidth: 2,
            itemSelector: '.grid-item'
        };
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.onClick = function () {
        this.router.navigate(['']);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(223),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.auth.authenticated()) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = (function () {
    function ApiService(authHttp, http) {
        this.authHttp = authHttp;
        this.http = http;
    }
    ApiService.prototype.Sockets = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__('/');
            _this.socket.on('addPic', function (data) {
                observer.next(data);
            });
            _this.socket.on('deletePic', function (pic) {
                observer.next(pic);
            });
            _this.socket.on('like', function (pic) {
                observer.next(pic);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ApiService.prototype.addPic = function (pic, user) {
        this.socket.emit('addPic', pic, user);
    };
    ApiService.prototype.deletePicSocet = function (pic) {
        this.socket.emit('deletePic', pic);
    };
    ApiService.prototype.changeLike = function (pic) {
        this.socket.emit('like', pic);
    };
    ApiService.prototype.addImg = function (imgData, user) {
        var data = JSON.stringify({ imgData: imgData, user: user });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/img', data, options);
    };
    ApiService.prototype.getMyPics = function () {
        return this.authHttp.get('api/getMyPics');
    };
    ApiService.prototype.getAllPics = function () {
        return this.http.get('api/getAllPics');
    };
    ApiService.prototype.deletePic = function (pic) {
        var data = JSON.stringify({ pic: pic });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/deletePic', data, options);
    };
    ApiService.prototype.likePic = function (pic) {
        var data = JSON.stringify({ pic: pic });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/likePic', data, options);
    };
    ApiService.prototype.findUser = function (id) {
        var data = JSON.stringify({ id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/findUser', data, options);
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object])
], ApiService);

var _a, _b;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<masonry *ngIf=\"images && images.length !== 0; else noImages\" [options]=\"myOptions\" [useImagesLoaded]=\"true\">\n  <masonry-brick class=\"brick\" *ngFor=\"let img of images, let i = index\">\n    <div class=\"grid-item\">\n      <div class=\"image\">\n        <img src={{img.url}} onError=\"this.src='../../../assets/placeholder.png';\"/>\n      </div>\n      <div class=\"user\">\n        <h4>{{img.description}}</h4>\n        <img (click)=\"userClick(i)\" src={{img.creator.picture}}  />\n        <button class=\"btn btn-default\" (click)=\"like(i)\"><i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>\n          {{img.likes.length}}</button>\n          <p (click)=\"userClick(i)\">{{img.creator.nick}}</p> \n      </div>\n    </div>\n  </masonry-brick>\n</masonry>\n\n<ng-template #noImages><h1 class=\"user\">There are no pics yet!</h1></ng-template>\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<masonry *ngIf=\"images && images.length !== 0; else noImages\" [options]=\"myOptions\" [useImagesLoaded]=\"true\">\n  <masonry-brick class=\"brick\" *ngFor=\"let img of images, let i = index\">\n    <div class=\"grid-item\">\n      <div class=\"image\">\n        <img src={{img.url}} onError=\"this.src='../../../assets/placeholder.png';\"/>\n      </div>\n      <div class=\"user\">\n        <h4>{{img.description}}</h4>\n        <img src={{user.picture}}  />\n        <i class=\"fa fa-times fa-lg\" aria-hidden=\"true\" (click)=\"deletePic(i)\"></i>\n        <button class=\"btn btn-default\" (click)=\"like(i)\"><i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>\n          {{img.likes.length}}</button>\n        <p>{{user.nick}}</p>\n      </div>\n    </div>\n  </masonry-brick>\n</masonry>\n\n<ng-template #noImages><h1 class=\"user\">You have not added any pics!</h1></ng-template>\n"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['/']\" class=\"navbar-brand\">Pinterest Clone</a>\n    </div>\n\n    <div>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" *ngIf=\"auth.authenticated()\"><a [routerLink]=\"['/']\">All</a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" *ngIf=\"auth.authenticated()\"><a [routerLink]=\"['/myPics']\">My Pics</a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"dropdown\" *ngIf=\"auth.authenticated()\"><a (click)=\"dropdownChange()\">Add a Pic</a>\n          <div class=\"dropdown-content\" *ngIf=\"dropdown\" [@enterAnimation]>\n            <form class=\"form-group\" novalidate [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form)\">\n              <label class=\"control-label\">Image Url:\n                <input class=\"form-control\"  type=\"text\" formControlName=\"Url\" />\n                <p *ngIf=\"form.get('Url').touched && form.get('Url').hasError('required')\">You need to input some Url</p>\n              </label>\n              <label class=\"control-label\">Description:\n                <input class=\"form-control\" type=\"text\" formControlName=\"Description\"/>\n              </label>\n              <br />\n              <button class=\"btn btn-info\" [disabled]=\"form.invalid || disable\" type=\"Submit\">ADD</button>\n            </form>\n            <flash-messages></flash-messages>\n          </div>\n        </li>\n        <li><button class=\"btn btn-primary btn-margin\" (click)=\"auth.login()\" *ngIf=\"!auth.authenticated()\">Log In</button></li>\n        <li><button class=\"btn btn-primary btn-margin\" (click)=\"auth.logout()\" *ngIf=\"auth.authenticated()\">Log Out</button></li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<masonry *ngIf=\"images && images.length !== 0; else noImages\" [options]=\"myOptions\" [useImagesLoaded]=\"true\">\n  <masonry-brick class=\"brick\" *ngFor=\"let img of images, let i = index\">\n    <div class=\"grid-item\">\n      <div class=\"image\">\n        <img src={{img.url}} onError=\"this.src='../../../assets/placeholder.png';\"/>\n      </div>\n      <div class=\"user\">\n        <h4>{{img.description}}</h4>\n        <img src={{user.picture}}  />\n        <button class=\"btn btn-default\"  (click)=\"like(i)\"><i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>\n          {{img.likes.length}}</button>\n        <p>{{user.nick}}</p>\n      </div>\n    </div>\n  </masonry-brick>\n</masonry>\n\n<ng-template #noImages><h1 class=\"user\">This user doesn't have any pics!</h1></ng-template>\n<div>\n  <h1 class=\"user\" (click)=\"onClick()\"><a>Go back</a></h1>\n</div>\n"

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(118);


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(router) {
        var _this = this;
        this.router = router;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["JwtHelper"]();
        // Configure Auth0
        this.lock = new Auth0Lock('dfPTgXtWaiVI8BYJC3BUhugCmN4x6pcE', 'wojryba.eu.auth0.com', {});
        // Set userProfile attribute of already saved profile
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
        // Add callback for the Lock `authenticated` event
        this.lock.on('authenticated', function (authResult) {
            localStorage.setItem('token', authResult.idToken);
            // Fetch profile information
            _this.lock.getProfile(authResult.idToken, function (error, profile) {
                if (error) {
                    // Handle error
                    alert(error);
                    return;
                }
                localStorage.setItem('profile', JSON.stringify(profile));
                _this.userProfile = profile;
            });
        });
    }
    AuthService.prototype.login = function () {
        // Call the show method to display the widget.
        this.lock.show();
    };
    AuthService.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        // Remove token and profile from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
        this.userProfile = undefined;
        this.router.navigate(['']);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ })

},[266]);
//# sourceMappingURL=main.bundle.js.map