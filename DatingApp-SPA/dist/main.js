(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error('You shall not pass!!');
        this.router.navigate(['']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/prevent-unsaved-changes.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/_guards/prevent-unsaved-changes.guard.ts ***!
  \**********************************************************/
/*! exports provided: PreventUnsavedChangesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventUnsavedChangesGuard", function() { return PreventUnsavedChangesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreventUnsavedChangesGuard = /** @class */ (function () {
    function PreventUnsavedChangesGuard() {
    }
    PreventUnsavedChangesGuard.prototype.canDeactivate = function (component) {
        if (component.editForm.dirty) {
            return confirm('Are your sure you want to continue? Any unsaved changes will be lost!');
        }
        return true;
    };
    PreventUnsavedChangesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PreventUnsavedChangesGuard);
    return PreventUnsavedChangesGuard;
}());



/***/ }),

/***/ "./src/app/_models/pagination.ts":
/*!***************************************!*\
  !*** ./src/app/_models/pagination.ts ***!
  \***************************************/
/*! exports provided: PaginatedResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedResult", function() { return PaginatedResult; });
var PaginatedResult = /** @class */ (function () {
    function PaginatedResult() {
    }
    return PaginatedResult;
}());



/***/ }),

/***/ "./src/app/_resolvers/list.resolver.ts":
/*!*********************************************!*\
  !*** ./src/app/_resolvers/list.resolver.ts ***!
  \*********************************************/
/*! exports provided: ListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListResolver", function() { return ListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ListResolver = /** @class */ (function () {
    function ListResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.likesParam = 'Likers';
    }
    ListResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    ListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], ListResolver);
    return ListResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/member-detail.resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/_resolvers/member-detail.resolver.ts ***!
  \******************************************************/
/*! exports provided: MemberDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailResolver", function() { return MemberDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var MemberDetailResolver = /** @class */ (function () {
    function MemberDetailResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
    }
    MemberDetailResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.userService.getUser(route.params.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    MemberDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MemberDetailResolver);
    return MemberDetailResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/member-edit.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/_resolvers/member-edit.resolver.ts ***!
  \****************************************************/
/*! exports provided: MemberEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditResolver", function() { return MemberEditResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");








var MemberEditResolver = /** @class */ (function () {
    function MemberEditResolver(userService, router, alertify, authService) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
    }
    MemberEditResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving your data');
            _this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    MemberEditResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], MemberEditResolver);
    return MemberEditResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/member-list.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/_resolvers/member-list.resolver.ts ***!
  \****************************************************/
/*! exports provided: MemberListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListResolver", function() { return MemberListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var MemberListResolver = /** @class */ (function () {
    function MemberListResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageNumber = 1;
        this.pageSize = 5;
    }
    MemberListResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    MemberListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MemberListResolver);
    return MemberListResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/messages.resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/_resolvers/messages.resolver.ts ***!
  \*************************************************/
/*! exports provided: MessagesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesResolver", function() { return MessagesResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");








var MessagesResolver = /** @class */ (function () {
    function MessagesResolver(userService, router, alertify, authService) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.messageContainer = 'Unread';
    }
    MessagesResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.userService.getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving messages');
            _this.router.navigate(['']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    MessagesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], MessagesResolver);
    return MessagesResolver;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallBack) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallBack();
            }
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'auth/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        this.photoUrl = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('../../assets/user.png');
        this.currentPhotoUrl = this.photoUrl.asObservable();
    }
    AuthService.prototype.changeMemberPhoto = function (photoUrl) {
        this.photoUrl.next(photoUrl);
    };
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseURL + 'login', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                localStorage.setItem('user', JSON.stringify(user.user));
                _this.decodedToken = _this.jwtHelper.decodeToken(user.token);
                _this.currentUser = user.user;
                _this.changeMemberPhoto(_this.currentUser.photoUrl);
            }
        }));
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(this.baseURL + 'register', user);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.decodedToken = null;
        this.currentUser = null;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/error.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/_services/error.interceptor.ts ***!
  \************************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (error.status === 401) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.statusText);
                }
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    console.error(applicationError);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(applicationError);
                }
                var serverError = error.error;
                var modalStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modalStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(modalStateErrors || serverError || 'Server Error');
            }
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/pagination */ "./src/app/_models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    UserService.prototype.getUsers = function (page, itemsPerPage, userParams, likesParam) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page.toString());
            params = params.append('pageSize', itemsPerPage.toString());
        }
        if (userParams != null) {
            params = params.append('minAge', userParams.minAge);
            params = params.append('maxAge', userParams.maxAge);
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
        }
        if (likesParam === 'Likers') {
            params = params.append('likers', 'true');
        }
        if (likesParam === 'Likees') {
            params = params.append('likees', 'true');
        }
        return this.http.get(this.baseUrl + 'users', { observe: 'response', params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    UserService.prototype.checkIfLikedByMe = function (id, recipientId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('id', id.toString());
        params = params.append('recipientId', recipientId.toString());
        return this.http.get(this.baseUrl + 'users/CheckIfLikedByMe', { params: params });
    };
    UserService.prototype.toggleLikeUser = function (id, recipientId) {
        return this.http.post(this.baseUrl + 'users/' + id + '/toggleLikeUser/' + recipientId, {});
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.baseUrl + 'users/' + id);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.http.put(this.baseUrl + 'users/' + id, user);
    };
    UserService.prototype.setMainPhoto = function (userId, id) {
        return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {});
    };
    UserService.prototype.deletePhoto = function (userId, id) {
        return this.http.delete(this.baseUrl + 'users/' + userId + '/photos/' + id);
    };
    UserService.prototype.sendLike = function (id, recipientId) {
        return this.http.post(this.baseUrl + 'users/' + id + '/like/' + recipientId, {});
    };
    UserService.prototype.getMessages = function (id, page, itemsPerPage, messageContainer) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('MessageContainer', messageContainer);
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page.toString());
            params = params.append('pageSize', itemsPerPage.toString());
        }
        return this.http.get(this.baseUrl + 'users/' + id + '/messages', { observe: 'response', params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') !== null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    UserService.prototype.getMessageThread = function (id, recipientId) {
        return this.http.get(this.baseUrl + 'users/' + id + '/messages/thread/' + recipientId);
    };
    UserService.prototype.sendMessage = function (id, message) {
        return this.http.post(this.baseUrl + 'users/' + id + '/messages', message);
    };
    UserService.prototype.deleteMessage = function (id, userId) {
        return this.http.post(this.baseUrl + 'users/' + userId + '/messages/' + id, {});
    };
    UserService.prototype.markAsRead = function (userId, messageId) {
        return this.http.post(this.baseUrl + 'users/' + userId + '/messages/' + messageId + '/read', {})
            .subscribe();
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "./src/app/members/member-list/member-list.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/lists/lists.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "./src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_resolvers/member-detail.resolver */ "./src/app/_resolvers/member-detail.resolver.ts");
/* harmony import */ var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_resolvers/member-list.resolver */ "./src/app/_resolvers/member-list.resolver.ts");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "./src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_resolvers/member-edit.resolver */ "./src/app/_resolvers/member-edit.resolver.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ "./src/app/_guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var _resolvers_list_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_resolvers/list.resolver */ "./src/app/_resolvers/list.resolver.ts");
/* harmony import */ var _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_resolvers/messages.resolver */ "./src/app/_resolvers/messages.resolver.ts");
















var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            { path: 'members', component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_4__["MemberListComponent"],
                resolve: { users: _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_10__["MemberListResolver"] } },
            { path: 'members/:id', component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_8__["MemberDetailComponent"],
                resolve: { user: _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_9__["MemberDetailResolver"] } },
            { path: 'member/edit', component: _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_11__["MemberEditComponent"],
                resolve: { user: _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_12__["MemberEditResolver"] },
                canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_13__["PreventUnsavedChangesGuard"]] },
            { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"],
                resolve: { messages: _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_15__["MessagesResolver"] } },
            { path: 'lists', component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_6__["ListsComponent"],
                resolve: { users: _resolvers_list_resolver__WEBPACK_IMPORTED_MODULE_14__["ListResolver"] } }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        var user = JSON.parse(localStorage.getItem('user'));
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
        if (user) {
            this.authService.currentUser = user;
            this.authService.changeMemberPhoto(user.photoUrl);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_services/error.interceptor */ "./src/app/_services/error.interceptor.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "./src/app/members/member-list/member-list.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/lists/lists.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./members/member-card/member-card.component */ "./src/app/members/member-card/member-card.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "./src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_resolvers/member-detail.resolver */ "./src/app/_resolvers/member-detail.resolver.ts");
/* harmony import */ var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_resolvers/member-list.resolver */ "./src/app/_resolvers/member-list.resolver.ts");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "./src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_resolvers/member-edit.resolver */ "./src/app/_resolvers/member-edit.resolver.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ "./src/app/_guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./members/photo-editor/photo-editor.component */ "./src/app/members/photo-editor/photo-editor.component.ts");
/* harmony import */ var _resolvers_list_resolver__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_resolvers/list.resolver */ "./src/app/_resolvers/list.resolver.ts");
/* harmony import */ var _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_resolvers/messages.resolver */ "./src/app/_resolvers/messages.resolver.ts");
/* harmony import */ var _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./members/member-messages/member-messages.component */ "./src/app/members/member-messages/member-messages.component.ts");



































function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_18__["MemberListComponent"],
                _lists_lists_component__WEBPACK_IMPORTED_MODULE_19__["ListsComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_20__["MessagesComponent"],
                _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_23__["MemberCardComponent"],
                _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_25__["MemberDetailComponent"],
                _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_28__["MemberEditComponent"],
                _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_31__["PhotoEditorComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_9__["TimeAgoPipe"],
                _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_34__["MemberMessagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
                ngx_gallery__WEBPACK_IMPORTED_MODULE_7__["NgxGalleryModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: [src_environments_environment__WEBPACK_IMPORTED_MODULE_24__["environment"].apiDomain],
                        blacklistedRoutes: [src_environments_environment__WEBPACK_IMPORTED_MODULE_24__["environment"].apiDomain + '/api/auth/register']
                    }
                })
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
                _services_error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptorProvider"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_17__["AlertifyService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_22__["UserService"],
                _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_26__["MemberDetailResolver"],
                _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_27__["MemberListResolver"],
                _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_29__["MemberEditResolver"],
                _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_30__["PreventUnsavedChangesGuard"],
                _resolvers_list_resolver__WEBPACK_IMPORTED_MODULE_32__["ListResolver"],
                _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_33__["MessagesResolver"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div *ngIf=\"!registerMode\" style=\"text-align: center\">\n    <h1>Find your match</h1>\n    <p class=\"lead\">Come on in to view your matches...</p>\n    <p class=\"lead\" *ngIf=\"!isLoggedIn\">All you need to do is sign up!</p>\n    <div class=\"text-center\">\n      <div *ngIf=\"!isLoggedIn\">\n        <button class=\"btn btn-primary btn-lg mr-2\" (click)=\"registerToggle()\">Register</button>\n        <button class=\"btn btn-info btn-lg\">Learn More</button>\n      </div>\n      <div *ngIf=\"isLoggedIn\">\n        <button class=\"btn btn-primary btn-lg mr-2\" (click)=\"logout()\">Logout</button>\n        <button class=\"btn btn-info btn-lg\" [routerLink]=\"['/members']\"\n        routerLinkActive=\"router-link-active\">My Matches</button>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"registerMode\" class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-4\">\n        <app-register (cancelRegister)=\"cancelRegisterMode($event)\"></app-register>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.sass":
/*!******************************************!*\
  !*** ./src/app/home/home.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, authService) {
        this.http = http;
        this.authService = authService;
        this.registerMode = false;
        this.isLoggedIn = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.authService.loggedIn();
    };
    HomeComponent.prototype.logout = function () {
        this.isLoggedIn = false;
        this.authService.logout();
    };
    HomeComponent.prototype.registerToggle = function () {
        this.registerMode = true;
    };
    HomeComponent.prototype.cancelRegisterMode = function (registerMode) {
        this.registerMode = registerMode;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/home/home.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lists/lists.component.html":
/*!********************************************!*\
  !*** ./src/app/lists/lists.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mt-3\">\n  <h2>{{likesParam === 'Likers' ? 'Members who like me' : 'Members who I\\'ve Liked'}} : {{pagination.totalItems}}</h2>\n</div>\n\n<div class=\"container mt-3\">\n\n  <div class=\"row\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likers\" (click)=\"loadUsers()\">Members who like\n        me</button>\n      <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likees\" (click)=\"loadUsers()\">Members who I\n        like</button>\n    </div>\n  </div>\n\n  <br>\n\n  <div class=\"row\">\n    <div *ngFor=\"let user of users\" class=\"col-sm-6 col-md-4 col-lg-4 col-xl-2\">\n      <app-member-card [user]=\"user\" (toggleFlag)=\"toggleLikeEmitter($event)\"></app-member-card>\n    </div>\n  </div>\n\n\n\n</div>\n\n<div class=\"d-flex justify-content-center\">\n  <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\"\n    [(ngModel)]=\"pagination.currentPage\" (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\" lastText=\"&raquo;\">\n  </pagination>\n</div>\n"

/***/ }),

/***/ "./src/app/lists/lists.component.sass":
/*!********************************************!*\
  !*** ./src/app/lists/lists.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RzL2xpc3RzLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/lists/lists.component.ts":
/*!******************************************!*\
  !*** ./src/app/lists/lists.component.ts ***!
  \******************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");






var ListsComponent = /** @class */ (function () {
    function ListsComponent(authService, userService, route, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.route = route;
        this.alertify = alertify;
        this.userParams = {};
    }
    ListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data.users.result;
            _this.pagination = data.users.pagination;
        });
        this.likesParam = 'Likers';
        this.userParams.gender = 'any';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.userParams.orderBy = 'lastActive';
        this.loadUsers();
    };
    ListsComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams, this.likesParam)
            .subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ListsComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    ListsComponent.prototype.toggleLikeEmitter = function (user) {
        if (!user.isLikedByMe && this.likesParam === 'Likees') {
            this.users.splice(this.users.findIndex(function (u) { return u.id === user.id; }), 1);
        }
        this.loadUsers();
    };
    ListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(/*! ./lists.component.html */ "./src/app/lists/lists.component.html"),
            styles: [__webpack_require__(/*! ./lists.component.sass */ "./src/app/lists/lists.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./src/app/members/member-card/member-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\n  <div class=\"card-img-wrapper\">\n    <img src=\"{{getUserPhoto()}}\" alt=\"{{user.knownAs}}\" class=\"card-img-top\">\n    <ul class=\"list-inline member-icons animate text-center\">\n      <li class=\"list-inline-item\">\n        <button class=\"btn btn-primary\"\n        [routerLink]=\"['/members/', user.id]\">\n        <i class=\"fa fa-user\"></i>\n      </button>\n    </li>\n      <li class=\"list-inline-item\">\n        <button (click)=\"toggleLikeUser(user.id)\" class=\"btn\"\n        [ngClass]=\"user.isLikedByMe?'btn-success':'btn-primary'\">\n        <i class=\"fa fa-heart\"></i>\n        </button>\n      </li>\n      <li class=\"list-inline-item\">\n        <button class=\"btn btn-primary\"\n          [routerLink]=\"['/members/', user.id]\"\n          [queryParams]=\"{tab: 3}\">\n        <i class=\"fa fa-envelope\"></i>\n      </button></li>\n    </ul>\n  </div>\n  <div class=\"card-body p-1\">\n    <h6 class=\"card-title text-center mb-1\">\n      <i class=\"fa fa-user\"></i>\n      {{user.knownAs}}, {{user.age}}\n    </h6>\n    <p class=\"card-text text-muted text-center\">{{user.city}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/members/member-card/member-card.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card:hover img {\n  -webkit-transform: scale(1.2, 1.2);\n          transform: scale(1.2, 1.2);\n  transition-duration: 500ms;\n  transition-timing-function: ease-out;\n  opacity: 0.7; }\n\n.card img {\n  -webkit-transform: scale(1, 1);\n          transform: scale(1, 1);\n  transition-duration: 500ms;\n  transition-timing-function: ease-out; }\n\n.card-img-wrapper {\n  overflow: hidden;\n  position: relative; }\n\n.member-icons {\n  position: absolute;\n  bottom: -30%;\n  left: 0;\n  right: 0;\n  margin-right: auto;\n  margin-left: auto;\n  opacity: 0; }\n\n.card-img-wrapper:hover .member-icons {\n  bottom: 0;\n  opacity: 1; }\n\n.animate {\n  transition: all 0.3s ease-in-out; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGFubGV5ZXJpYy9Eb2N1bWVudHMvd29ya3NwYWNlL0RhdGluZ0FwcC9EYXRpbmdBcHAtU1BBL3NyYy9hcHAvbWVtYmVycy9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLG9DQUFvQztFQUNwQyxZQUFZLEVBQUE7O0FBRWQ7RUFDRSw4QkFBMEI7VUFBMUIsc0JBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixvQ0FBb0MsRUFBQTs7QUFFdEM7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixPQUFPO0VBQ1AsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVSxFQUFBOztBQUVaO0VBQ0UsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFFWjtFQUNFLGdDQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICBvcGFjaXR5OiAwLjc7IH1cblxuLmNhcmQgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAsIDEuMCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7IH1cblxuLmNhcmQtaW1nLXdyYXBwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLm1lbWJlci1pY29ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMzAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgb3BhY2l0eTogMDsgfVxuXG4uY2FyZC1pbWctd3JhcHBlcjpob3ZlciAubWVtYmVyLWljb25zIHtcbiAgYm90dG9tOiAwO1xuICBvcGFjaXR5OiAxOyB9XG5cbi5hbmltYXRlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/members/member-card/member-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCardComponent", function() { return MemberCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");





var MemberCardComponent = /** @class */ (function () {
    function MemberCardComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.toggleFlag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MemberCardComponent.prototype.ngOnInit = function () {
    };
    MemberCardComponent.prototype.getUserPhoto = function () {
        return this.user.photoUrl != null ? this.user.photoUrl : '../../../assets/user.png';
    };
    MemberCardComponent.prototype.sendLike = function (recipientId) {
        var _this = this;
        this.userService.sendLike(this.authService.decodedToken.nameid, recipientId)
            .subscribe(function (data) {
            _this.alertify.success('You have liked: ' + _this.user.knownAs);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberCardComponent.prototype.toggleLikeUser = function (recipientId) {
        var _this = this;
        this.userService.toggleLikeUser(this.authService.decodedToken.nameid, recipientId)
            .subscribe(function (data) {
            if (_this.user.isLikedByMe) {
                _this.user.isLikedByMe = false;
                _this.alertify.warning('You have unliked: ' + _this.user.knownAs);
            }
            else {
                _this.user.isLikedByMe = true;
                _this.alertify.success('You have liked: ' + _this.user.knownAs);
            }
            _this.toggleLikeEmitter(_this.user);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberCardComponent.prototype.toggleLikeEmitter = function (user) {
        this.toggleFlag.emit(user);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MemberCardComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MemberCardComponent.prototype, "toggleFlag", void 0);
    MemberCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-card',
            template: __webpack_require__(/*! ./member-card.component.html */ "./src/app/members/member-card/member-card.component.html"),
            styles: [__webpack_require__(/*! ./member-card.component.sass */ "./src/app/members/member-card/member-card.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MemberCardComponent);
    return MemberCardComponent;
}());



/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n  <div class=\"row\">\n    <h1>{{user.knownAs}}'s Profile</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top img-thumbnail\" src=\"{{getUserPhoto()}}\" alt=\"{{user.knownAs}}\">\n        <div class=\"card-body\">\n          <div>\n            <strong>Location:</strong>\n            <p>{{user.city}}, {{user.country}}</p>\n          </div>\n          <div>\n            <strong>Age:</strong>\n            <p>{{user.age}}</p>\n          </div>\n          <div>\n            <strong>Last Active:</strong>\n            <p>{{user.lastActive | timeAgo}}</p>\n          </div>\n          <div>\n            <strong>Member since:</strong>\n            <p>{{user.createdOn| date: 'mediumDate'}}</p>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"btn-group d-flex\">\n            <button (click)=\"toggleLikeUser()\"\n              [ngClass]=\"user.isLikedByMe?'btn-success w-100':'btn-primary w-100'\">\n              <span *ngIf=\"!user.isLikedByMe\">\n                <i class=\"fa fa-heart\"></i> Like</span>\n              <span *ngIf=\"user.isLikedByMe\">\n                <i class=\"fa fa-heart\"></i> Unlike</span>\n            </button>\n            <button class=\"btn btn-success w-100\" (click)=\"selectTab(3)\">\n              <i class=\"fa fa-envelope\"></i> Message\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"tab-panel\">\n        <tabset class=\"member-tabset\" #memberTabs>\n          <tab heading=\"About {{user.knownAs}}\">\n            <h4>Description</h4>\n            <p>{{user.introduction}}</p>\n            <h4>Looking For</h4>\n            <p>{{user.lookingFor}}</p>\n          </tab>\n          <tab heading=\"Interests\">\n            <h4>Interests</h4>\n            <p>{{user.interests}}</p>\n          </tab>\n          <tab heading=\"Photos\">\n            <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n          </tab>\n          <tab heading=\"Messages\">\n            <app-member-messages [recipientId]=\"user.id\"></app-member-messages>\n          </tab>\n        </tabset>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.sass":
/*!********************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.sass ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail {\n  margin: 25px;\n  width: 85%;\n  height: 85%; }\n\n.card-body {\n  padding: 0 25px; }\n\n.card-footer {\n  padding: 10px 25px;\n  background-color: #fff;\n  border-top: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGFubGV5ZXJpYy9Eb2N1bWVudHMvd29ya3NwYWNlL0RhdGluZ0FwcC9EYXRpbmdBcHAtU1BBL3NyYy9hcHAvbWVtYmVycy9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbCB7XG4gIG1hcmdpbjogMjVweDtcbiAgd2lkdGg6IDg1JTtcbiAgaGVpZ2h0OiA4NSU7IH1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDAgMjVweDsgfVxuXG4uY2FyZC1mb290ZXIge1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3A6IG5vbmU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: MemberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function() { return MemberDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");








var MemberDetailComponent = /** @class */ (function () {
    function MemberDetailComponent(userService, alertify, authService, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.authService = authService;
        this.route = route;
        this.toggleFlag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.likedByMe = false;
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data.user;
        });
        this.userService.checkIfLikedByMe(this.authService.decodedToken.nameid, this.user.id)
            .subscribe(function (res) {
            _this.user.isLikedByMe = res;
        }, function (error) {
            _this.alertify.error(error);
        });
        this.route.queryParams.subscribe(function (params) {
            var selectedTab = params.tab;
            _this.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
        });
        this.galleryOptions = [{
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_5__["NgxGalleryAnimation"].Slide,
                preview: false
            }];
        this.galleryImages = this.getImages();
    };
    MemberDetailComponent.prototype.getUserPhoto = function () {
        return this.user.photoUrl != null ? this.user.photoUrl : '../../../assets/user.png';
    };
    MemberDetailComponent.prototype.getImages = function () {
        var imageUrls = [];
        for (var _i = 0, _a = this.user.photos; _i < _a.length; _i++) {
            var photo = _a[_i];
            imageUrls.push({
                small: photo.url,
                medium: photo.url,
                big: photo.url,
                description: photo.description
            });
        }
        return imageUrls;
    };
    MemberDetailComponent.prototype.selectTab = function (tabId) {
        this.memberTabs.tabs[tabId].active = true;
    };
    MemberDetailComponent.prototype.toggleLikeUser = function () {
        var _this = this;
        this.userService.toggleLikeUser(this.authService.decodedToken.nameid, this.user.id)
            .subscribe(function (data) {
            if (_this.user.isLikedByMe) {
                _this.user.isLikedByMe = false;
                _this.alertify.warning('You have unliked: ' + _this.user.knownAs);
            }
            else {
                _this.user.isLikedByMe = true;
                _this.alertify.success('You have liked: ' + _this.user.knownAs);
            }
            _this.toggleLikeEmitter(_this.user);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberDetailComponent.prototype.toggleLikeEmitter = function (user) {
        this.toggleFlag.emit(user);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('memberTabs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsetComponent"])
    ], MemberDetailComponent.prototype, "memberTabs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MemberDetailComponent.prototype, "toggleFlag", void 0);
    MemberDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-detail',
            template: __webpack_require__(/*! ./member-detail.component.html */ "./src/app/members/member-detail/member-detail.component.html"),
            styles: [__webpack_require__(/*! ./member-detail.component.sass */ "./src/app/members/member-detail/member-detail.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());



/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <h1>Your Profile</h1>\n    </div>\n    <div class=\"col-sm-8\">\n      <div *ngIf=\"editForm.dirty\" class=\"alert alert-info\">\n        <strong>Information:</strong> You have made changes. Any unsaved changes will be lost!\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top img-thumbnail\" src=\"{{photoUrl || '../../../assets/user.png'}}\" alt=\"{{user.knownAs}}\">\n        <div class=\"card-body\">\n          <div>\n            <strong>Location:</strong>\n            <p>{{user.city}}, {{user.country}}</p>\n          </div>\n          <div>\n            <strong>Age:</strong>\n            <p>{{user.age}}</p>\n          </div>\n          <div>\n            <strong>Last Active:</strong>\n            <p>{{user.lastActive| timeAgo}}</p>\n          </div>\n          <div>\n            <strong>Member since:</strong>\n            <p>{{user.createdOn | date: 'mediumDate'}}</p>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n            <button [disabled]=\"!editForm.dirty\" form=\"editForm\" class=\"btn btn-success btn-block\">Save Changes</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"tab-panel\">\n        <tabset class=\"member-tabset\">\n          <tab heading=\"Edit Profile\">\n            <form #editForm=\"ngForm\" id=\"editForm\" (ngSubmit)=\"updateUser()\">\n              <h4>Description</h4>\n              <textarea name=\"introduction\" rows=\"6\" class=\"form-control\"\n                [(ngModel)]=\"user.introduction\"></textarea>\n              <h4>Looking For</h4>\n              <textarea name=\"lookingFor\" rows=\"6\" class=\"form-control\"\n                [(ngModel)]=\"user.lookingFor\"></textarea>\n              <h4>Interests</h4>\n              <textarea name=\"interests\" rows=\"6\" class=\"form-control\"\n                [(ngModel)]=\"user.interests\"></textarea>\n              <h4>Location Details:</h4>\n              <div class=\"form-inline\">\n                <label for=\"city\">City</label>\n                <input type=\"text\" name=\"city\" [(ngModel)]=\"user.city\" class=\"form-control\">\n                <label for=\"country\">City</label>\n                <input type=\"text\" name=\"country\" [(ngModel)]=\"user.country\" class=\"form-control\">\n              </div>\n            </form>\n          </tab>\n          <tab heading=\"Edit Photos\">\n            <app-photo-editor [photos]=\"user.photos\"\n              (getMemberPhotoChange)=\"updateMainPhoto($event)\"></app-photo-editor>\n          </tab>\n        </tabset>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail {\n  margin: 25px;\n  width: 85%;\n  height: 85%; }\n\n.card-body {\n  padding: 0 25px; }\n\n.card-footer {\n  padding: 10px 25px;\n  background-color: #fff;\n  border-top: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGFubGV5ZXJpYy9Eb2N1bWVudHMvd29ya3NwYWNlL0RhdGluZ0FwcC9EYXRpbmdBcHAtU1BBL3NyYy9hcHAvbWVtYmVycy9tZW1iZXItZWRpdC9tZW1iZXItZWRpdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUViO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbWJlci1lZGl0L21lbWJlci1lZGl0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy10aHVtYm5haWwge1xuICBtYXJnaW46IDI1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogODUlOyB9XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwIDI1cHg7IH1cblxuLmNhcmQtZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wOiBub25lOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function() { return MemberEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");







var MemberEditComponent = /** @class */ (function () {
    function MemberEditComponent(route, alertify, userService, authService) {
        this.route = route;
        this.alertify = alertify;
        this.userService = userService;
        this.authService = authService;
    }
    MemberEditComponent.prototype.unloadNotification = function ($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    };
    MemberEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data.user;
        });
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    MemberEditComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(function (next) {
            _this.alertify.success('Profile updated successfully');
            _this.editForm.reset(_this.user);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberEditComponent.prototype.updateMainPhoto = function (photoUrl) {
        this.user.photoUrl = photoUrl;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], MemberEditComponent.prototype, "editForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MemberEditComponent.prototype, "unloadNotification", null);
    MemberEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-edit',
            template: __webpack_require__(/*! ./member-edit.component.html */ "./src/app/members/member-edit/member-edit.component.html"),
            styles: [__webpack_require__(/*! ./member-edit.component.sass */ "./src/app/members/member-edit/member-edit.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], MemberEditComponent);
    return MemberEditComponent;
}());



/***/ }),

/***/ "./src/app/members/member-list/member-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mt-3\">\n  <h2>Your matches - {{pagination.totalItems}} found</h2>\n</div>\n\n<div class=\"container mt-3\">\n  <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"loadUsers()\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"minAge\">Age From</label>\n      <input type=\"number\" class=\"form-control ml-1\" style=\"width: 70px\" id=\"minAge\"\n        [(ngModel)]=\"userParams.minAge\" name=\"minAge\">\n    </div>\n\n    <div class=\"form-group px-2\">\n      <label for=\"maxAge\">Age To</label>\n      <input type=\"number\" class=\"form-control ml-1\" style=\"width: 70px\" id=\"maxAge\"\n      [(ngModel)]=\"userParams.maxAge\" name=\"maxAge\">\n    </div>\n\n    <div class=\"form-group px-2\">\n      <label for=\"gender\">Show: </label>\n      <select class=\"form-control ml-1\" style=\"width: 130px\" id=\"gender\"\n        [(ngModel)]=\"userParams.gender\" name=\"gender\">\n        <option *ngFor=\"let gender of genderList\" [value]=\"gender.value\">\n          {{gender.display}}\n        </option>\n      </select>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-left:10px\">Apply Filters</button>\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"resetFilters()\" style=\"margin-left:10px\">Reset Filter</button>\n\n    <div class=\"col\">\n      <div class=\"btn-group float-right\">\n        <button type=\"button\" name=\"orderBy\" class=\"btn btn-primary\"\n          [(ngModel)]=\"userParams.orderBy\" (click)=\"loadUsers()\" btnRadio=\"lastActive\">Last Active</button>\n        <button type=\"button\" name=\"orderBy\" class=\"btn btn-primary\"\n          [(ngModel)]=\"userParams.orderBy\" (click)=\"loadUsers()\" btnRadio=\"createdOn\">Newest Members</button>\n      </div>\n    </div>\n\n  </form>\n  <br>\n\n  <div class=\"row\">\n    <div *ngFor=\"let user of users\" class=\"col-lg-2 col-md-3 col-sm-6\">\n      <app-member-card [user]=\"user\"></app-member-card>\n    </div>\n  </div>\n</div>\n\n<div class=\"d-flex justify-content-center\">\n  <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\"\n    [itemsPerPage]=\"pagination.itemsPerPage\"\n    [(ngModel)]=\"pagination.currentPage\"\n    (pageChanged)=\"pageChanged($event)\"\n    previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n  </pagination>\n</div>\n"

/***/ }),

/***/ "./src/app/members/member-list/member-list.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLWxpc3QvbWVtYmVyLWxpc3QuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/members/member-list/member-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListComponent", function() { return MemberListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");






var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(userService, alertify, route, authService) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.authService = authService;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.genderList = [
            { value: 'male', display: 'Males' },
            { value: 'female', display: 'Females' }
        ];
        this.userParams = {};
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data.users.result;
            _this.pagination = data.users.pagination;
        });
        this.user = this.authService.currentUser;
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.userParams.orderBy = 'lastActive';
    };
    MemberListComponent.prototype.resetFilters = function () {
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.loadUsers();
    };
    MemberListComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    MemberListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
            .subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-list',
            template: __webpack_require__(/*! ./member-list.component.html */ "./src/app/members/member-list/member-list.component.html"),
            styles: [__webpack_require__(/*! ./member-list.component.sass */ "./src/app/members/member-list/member-list.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "./src/app/members/member-messages/member-messages.component.html":
/*!************************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n    <div *ngIf=\"messages?.length === 0\">\n      <p>No messages yet.. say hi by using the message box below</p>\n    </div>\n\n    <ul class=\"chat\">\n      <li *ngFor=\"let message of messages\">\n        <!-- to them -->\n        <div *ngIf=\"message.senderId == recipientId\">\n          <span class=\"chat-img float-left\">\n            <img src=\"{{message.senderPhotoUrl}}\" alt=\"{{message.senderPhotoUrl}}\" class=\"rounded-circle mr-2\">\n          </span>\n          <div class=\"chat-body\">\n            <div class=\"header\">\n              <strong class=\"primary-font\">{{message.senderKnownAs}}</strong>\n              <small class=\"text-muted float-right\">\n                <span class=\"fa fa-clock-o\"> {{message.dateMessageSent | timeAgo}}</span>\n              </small>\n            </div>\n            <p class=\"mr-5\">{{message.content}}</p>\n          </div>\n        </div>\n\n        <!-- to me -->\n        <div *ngIf=\"message.senderId != recipientId\">\n          <span class=\"chat-img float-right\">\n            <img src=\"{{message.senderPhotoUrl}}\" alt=\"{{message.senderPhotoUrl}}\" class=\"rounded-circle ml-2\">\n          </span>\n          <div class=\"chat-body\">\n            <div class=\"header\">\n              <small class=\"text-muted\">\n                <span class=\"fa fa-clock-o\"> {{message.dateMessageSent | timeAgo}}</span>\n                <span *ngIf=\"!message.isRead\" class=\"text-danger\"> (unread)</span>\n                <span *ngIf=\"message.isRead\" class=\"text-success\"> (Read {{message.dateMessageSent | timeAgo}})</span>\n              </small>\n              <strong class=\"primary-font float-right\">{{message.senderKnownAs}}</strong>\n            </div>\n            <p>{{message.content}}</p>\n          </div>\n        </div>\n\n      </li>\n    </ul>\n\n  </div>\n  <div class=\"card-footer\">\n    <form #messageForm=\"ngForm\" (ngSubmit)=\"messageForm.valid && sendMessage()\">\n      <div class=\"input-group\">\n        <input type=\"text\"\n          [(ngModel)]=\"newMessage.content\"\n          name=\"content\"\n          required\n          class=\"form-control input-sm\"\n          placeholder=\"send a private message\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-primary\" [disabled]=\"!messageForm.valid\">Send</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/members/member-messages/member-messages.component.sass":
/*!************************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border: none; }\n\n.chat {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.chat li {\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px dotted #b3a9a9; }\n\n.rounded-circle {\n  height: 50px;\n  width: 50px; }\n\n.card-body {\n  overflow-y: scroll;\n  height: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGFubGV5ZXJpYy9Eb2N1bWVudHMvd29ya3NwYWNlL0RhdGluZ0FwcC9EYXRpbmdBcHAtU1BBL3NyYy9hcHAvbWVtYmVycy9tZW1iZXItbWVzc2FnZXMvbWVtYmVyLW1lc3NhZ2VzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBRVo7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGlDQUFpQyxFQUFBOztBQUVuQztFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXItbWVzc2FnZXMvbWVtYmVyLW1lc3NhZ2VzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBib3JkZXI6IG5vbmU7IH1cblxuLmNoYXQge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7IH1cblxuLmNoYXQgbGkge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjYjNhOWE5OyB9XG5cbi5yb3VuZGVkLWNpcmNsZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7IH1cblxuLmNhcmQtYm9keSB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiA0MDBweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/members/member-messages/member-messages.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.ts ***!
  \**********************************************************************/
/*! exports provided: MemberMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberMessagesComponent", function() { return MemberMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var MemberMessagesComponent = /** @class */ (function () {
    function MemberMessagesComponent(userService, authService, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.alertify = alertify;
        this.newMessage = {};
    }
    MemberMessagesComponent.prototype.ngOnInit = function () {
        this.loadMessages();
    };
    MemberMessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        var currentUserId = +this.authService.decodedToken.nameid;
        this.userService.getMessageThread(this.authService.decodedToken.nameid, this.recipientId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (messages) {
            messages.forEach(function (message) {
                if (message.isRead === false && message.recipientId === currentUserId) {
                    _this.userService.markAsRead(currentUserId, message.id);
                }
            });
        }))
            .subscribe(function (messages) {
            _this.messages = messages;
            _this.messages.reverse();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberMessagesComponent.prototype.sendMessage = function () {
        var _this = this;
        this.newMessage.recipientId = this.recipientId;
        this.userService.sendMessage(this.authService.decodedToken.nameid, this.newMessage)
            .subscribe(function (message) {
            _this.messages.push(message);
            _this.newMessage.content = '';
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MemberMessagesComponent.prototype, "recipientId", void 0);
    MemberMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-messages',
            template: __webpack_require__(/*! ./member-messages.component.html */ "./src/app/members/member-messages/member-messages.component.html"),
            styles: [__webpack_require__(/*! ./member-messages.component.sass */ "./src/app/members/member-messages/member-messages.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MemberMessagesComponent);
    return MemberMessagesComponent;
}());



/***/ }),

/***/ "./src/app/members/photo-editor/photo-editor.component.html":
/*!******************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2\" *ngFor=\"let photo of photos\">\n    <img src=\"{{photo.url}}\" class=\"img-thumbnail p-1\" alt=\"\">\n    <div class=\"text-center\">\n      <button type=\"button\" class=\"btn btm-sm btn-warning btn-row mr-1\" tooltip=\"Main\"\n        (click)=\"setMainPhoto(photo)\"\n        [ngClass]=\"photo.isMain ? 'btn-success active' : 'btn-secondary'\"\n        [disabled]=\"photo.isMain\">\n        <i class=\"fa fa-id-badge\"></i>\n      </button>\n      <button type=\"button\" class=\"btn btm-sm btn-danger\" tooltip=\"Delete\"\n        (click)=\"deletePhoto(photo.id)\"\n        [disabled]=\"photo.isMain\">\n        <i class=\"fa fa-trash-o\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"row mt-5\">\n\n  <div class=\"col-md-3\">\n\n    <h3>Add Photos</h3>\n\n    <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\"\n      [uploader]=\"uploader\" class=\"card bg-faded p-3 text-center mb-3 my-drop-zone\">\n      <i class=\"fa fa-upload fa-3x\"></i>\n      Drop photos here\n    </div>\n\n    Multiple\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple /><br />\n\n    Single\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n  </div>\n\n  <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\n\n    <h3>Upload queue</h3>\n    <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th width=\"50%\">Name</th>\n          <th>Size</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of uploader.queue\">\n          <td><strong>{{ item?.file?.name }}</strong></td>\n          <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div>\n      <div>\n        Queue progress:\n        <div class=\"progress mb-4\">\n          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n        </div>\n      </div>\n      <button type=\"button\" class=\"btn btn-success btn-s mr-1\" (click)=\"uploader.uploadAll()\"\n        [disabled]=\"!uploader.getNotUploadedItems().length\">\n        <span class=\"fa fa-upload\"></span> Upload\n      </button>\n      <button type=\"button\" class=\"btn btn-warning btn-s mr-1\" (click)=\"uploader.cancelAll()\"\n        [disabled]=\"!uploader.isUploading\">\n        <span class=\"fa fa-ban\"></span> Cancel\n      </button>\n      <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\"\n        [disabled]=\"!uploader.queue.length\">\n        <span class=\"fa fa-trash\"></span> Remove\n      </button>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/members/photo-editor/photo-editor.component.sass":
/*!******************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.img-thumbnail {\n  height: 100px;\n  min-width: 100px !important;\n  margin-bottom: 2px; }\n\n.btn-row {\n  margin-left: 5px;\n  margin-right: 10px; }\n\n.nv-file-over {\n  border: dotted 3px red; }\n\ninput[type=file] {\n  color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGFubGV5ZXJpYy9Eb2N1bWVudHMvd29ya3NwYWNlL0RhdGluZ0FwcC9EYXRpbmdBcHAtU1BBL3NyYy9hcHAvbWVtYmVycy9waG90by1lZGl0b3IvcGhvdG8tZWRpdG9yLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL3Bob3RvLWVkaXRvci9waG90by1lZGl0b3IuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuaW1nLXRodW1ibmFpbCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4OyB9XG5cbi5idG4tcm93IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG5cbi5udi1maWxlLW92ZXIge1xuICBib3JkZXI6IGRvdHRlZCAzcHggcmVkOyB9XG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/members/photo-editor/photo-editor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: PhotoEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoEditorComponent", function() { return PhotoEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");







var PhotoEditorComponent = /** @class */ (function () {
    function PhotoEditorComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.getMemberPhotoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasBaseDropZoneOver = false;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    PhotoEditorComponent.prototype.ngOnInit = function () {
        this.initializeUploader();
    };
    PhotoEditorComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    PhotoEditorComponent.prototype.initializeUploader = function () {
        var _this = this;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                var res = JSON.parse(response);
                var photo = {
                    id: res.id,
                    url: res.url,
                    dateAdded: res.dateAdded,
                    description: res.description,
                    isMain: res.isMain
                };
                _this.photos.push(photo);
                if (photo.isMain) {
                    _this.authService.changeMemberPhoto(photo.url);
                    _this.authService.currentUser.photoUrl = photo.url;
                    localStorage.setItem('user', JSON.stringify(_this.authService.currentUser));
                }
            }
        };
    };
    PhotoEditorComponent.prototype.setMainPhoto = function (photo) {
        var _this = this;
        this.userService.setMainPhoto(this.authService.decodedToken.nameid, photo.id).subscribe(function () {
            _this.currentMain = _this.photos.filter(function (p) { return p.isMain === true; })[0];
            _this.currentMain.isMain = false;
            photo.isMain = true;
            _this.authService.changeMemberPhoto(photo.url);
            _this.authService.currentUser.photoUrl = photo.url;
            localStorage.setItem('user', JSON.stringify(_this.authService.currentUser));
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PhotoEditorComponent.prototype.deletePhoto = function (id) {
        var _this = this;
        this.alertify.confirm('Are your sure you want to delete this photo', function () {
            _this.userService.deletePhoto(_this.authService.decodedToken.nameid, id).subscribe(function () {
                _this.photos.splice(_this.photos.findIndex(function (p) { return p.id === id; }), 1);
                _this.alertify.success('Photo has been deleted');
            }, function (error) {
                _this.alertify.error('Failed to delete the photo');
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PhotoEditorComponent.prototype, "photos", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PhotoEditorComponent.prototype, "getMemberPhotoChange", void 0);
    PhotoEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photo-editor',
            template: __webpack_require__(/*! ./photo-editor.component.html */ "./src/app/members/photo-editor/photo-editor.component.html"),
            styles: [__webpack_require__(/*! ./photo-editor.component.sass */ "./src/app/members/photo-editor/photo-editor.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"]])
    ], PhotoEditorComponent);
    return PhotoEditorComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div class=\"row\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Unread\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-envelope\"></i> Unread\n      </button>\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Inbox\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-envelope-open\"></i> Inbox\n      </button>\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Outbox\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-paper-plane\"></i> Outbox\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"messages.length == 0\">\n    <h3>No messages</h3>\n  </div>\n\n  <div class=\"row\" *ngIf=\"messages.length > 0\">\n    <table class=\"table table-hover\" style=\"cursor: pointer\">\n      <tr>\n        <th style=\"width: 40%\">Message</th>\n        <th style=\"width: 20%\">From / To</th>\n        <th style=\"width: 20%\">Sent / Received</th>\n        <th style=\"width: 20%\"></th>\n      </tr>\n      <tr *ngFor=\"let message of messages\" [routerLink]=\"['/members',\n          messageContainer == 'Outbox' ? message.recipientId : message.senderId]\"\n            [queryParams]=\"{tab: 3}\">\n        <td>{{message.content}}</td>\n        <td>\n          <div *ngIf=\"messageContainer != 'Outbox'\">\n            <img src={{message?.senderPhotoUrl}} class=\"img-circle rounded-circle mr-2\">\n            <strong>{{message.senderKnownAs}}</strong>\n          </div>\n          <div *ngIf=\"messageContainer == 'Outbox'\">\n            <img src={{message?.recipientPhotoUrl}} class=\"img-circle rounded-circle mr-2\">\n            <strong>{{message.recipientKnownAs}}</strong>\n          </div>\n        </td>\n        <td>{{message.dateMessageSent | timeAgo}}</td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"$event.stopPropagation()\" (click)=deleteMessage(message.id)>Delete</button>\n        </td>\n      </tr>\n    </table>\n\n  </div>\n\n</div>\n\n<div class=\"d-flex justify-content-center\">\n  <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\"\n    [(ngModel)]=\"pagination.currentPage\" (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\" lastText=\"&raquo;\">\n  </pagination>\n</div>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.sass":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  margin-top: 15px; }\n\n.img-circle {\n  max-height: 50px; }\n\ntd {\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGFubGV5ZXJpYy9Eb2N1bWVudHMvd29ya3NwYWNlL0RhdGluZ0FwcC9EYXRpbmdBcHAtU1BBL3NyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICBtYXJnaW4tdG9wOiAxNXB4OyB9XG5cbi5pbWctY2lyY2xlIHtcbiAgbWF4LWhlaWdodDogNTBweDsgfVxuXG50ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");






var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(userService, authService, route, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.alertify = alertify;
        this.messageContainer = 'Unread';
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.messages = data.messages.result;
            _this.pagination = data.messages.pagination;
        });
    };
    MessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer).subscribe(function (res) {
            _this.messages = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MessagesComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadMessages();
    };
    MessagesComponent.prototype.deleteMessage = function (id) {
        var _this = this;
        this.alertify.confirm('Are you sure you want to delete this message?', function () {
            _this.userService.deleteMessage(id, _this.authService.decodedToken.nameid).subscribe(function () {
                _this.messages.splice(_this.messages.findIndex(function (m) { return m.id === id; }), 1);
                _this.alertify.success('Message has been deleted');
                _this.loadMessages();
            }, function (error) {
                _this.alertify.error(error);
            });
        });
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.sass */ "./src/app/messages/messages.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\" >Dating App</a>\n\n    <ul *ngIf=\"loggedIn()\" class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['/members']\">Matches</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['/lists']\">Lists</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['/messages']\">Messages</a>\n      </li>\n    </ul>\n\n    <div *ngIf=\"loggedIn()\" class=\"dropdown\" dropdown>\n      <span class=\"mr-1\">\n        <img src=\"{{photoUrl || '../../assets/user.png'}}\" alt=\"\">\n      </span>\n      <a class=\"dropdown-toggle text-light\" dropdownToggle>\n        Welcome {{ authService.decodedToken?.unique_name | titlecase}}\n      </a>\n      <div class=\"dropdown-menu mt-3\" *dropdownMenu>\n        <a class=\"dropdown-item\" [routerLink]=\"['/member/edit']\">\n          <i class=\"fa fa-user\"></i> Edit Profile</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" (click)=\"logout()\">\n          <i class=\"fa fa-sign-out\"></i> Logout</a>\n      </div>\n    </div>\n\n    <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"login()\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" name=\"username\" #username=\"ngModel\" placeholder=\"Username\" required\n        [(ngModel)]=\"model.username\">\n      <input class=\"form-control mr-sm-2\" type=\"password\" name=\"password\" #password=\"ngModel\" placeholder=\"Password\"\n        required [(ngModel)]=\"model.password\">\n      <button [disabled]=\"!loginForm.valid\" class=\"btn btn-success my-2 my-sm-0\" type=\"submit\">Login</button>\n    </form>\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.sass":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.sass ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle, .dropdown-item {\n  cursor: pointer; }\n\nimg {\n  max-height: 50px;\n  border: 2px solid white;\n  display: inline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGFubGV5ZXJpYy9Eb2N1bWVudHMvd29ya3NwYWNlL0RhdGluZ0FwcC9EYXRpbmdBcHAtU1BBL3NyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tdG9nZ2xlLCAuZHJvcGRvd24taXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG5pbWcge1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavComponent = /** @class */ (function () {
    function NavComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (next) {
            _this.alertify.success('Logged in successfully');
        }, function (error) {
            _this.alertify.error(error);
        }, function () {
            _this.router.navigate(['/members']);
        });
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent.prototype.logout = function () {
        this.authService.logout();
        this.alertify.message('Logged out');
        this.router.navigate(['/home']);
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.sass */ "./src/app/nav/nav.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n  <h2 class=\"text-center text-primary\">Sign Up</h2>\n  <hr>\n\n  <div class=\"form-group\">\n    <label class=\"control-label\" style=\"margin-right:10px\">I am a: </label>\n    <label class=\"radio-inline\">\n      <input class=\"mr-3\" type=\"radio\" value=\"male\" formControlName=\"gender\">Male\n    </label>\n    <label class=\"radio-inline ml-3\">\n      <input class=\"mr-3\" type=\"radio\" value=\"female\" formControlName=\"gender\">Female\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"text\"\n    [ngClass]=\"{'is-invalid': registerForm.get('username').errors\n      && registerForm.get('username').touched}\"\n    class=\"form-control\"\n    formControlName=\"username\"\n    placeholder=\"Username\">\n    <div class=\"invalid-feedback\">Please choose a username</div>\n  </div>\n\n  <div class=\"form-group\">\n    <input [ngClass]=\"{'is-invalid': registerForm.get('knownAs').errors && registerForm.get('knownAs').touched}\"\n      class=\"form-control\" placeholder=\"Known as\" formControlName=\"knownAs\">\n    <div class=\"invalid-feedback\"\n      *ngIf=\"registerForm.get('knownAs').touched && registerForm.get('knownAs').hasError('required')\">Known as is required\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <input [ngClass]=\"{'is-invalid': registerForm.get('dateOfBirth').errors && registerForm.get('dateOfBirth').touched}\"\n      class=\"form-control\" placeholder=\"Date of Birth\" formControlName=\"dateOfBirth\" type=\"text\" bsDatepicker [bsConfig]=\"bsConfig\">\n    <div class=\"invalid-feedback\"\n      *ngIf=\"registerForm.get('dateOfBirth').touched && registerForm.get('dateOfBirth').hasError('required')\">Date of\n      Birth is required</div>\n  </div>\n\n  <div class=\"form-group\">\n    <input [ngClass]=\"{'is-invalid': registerForm.get('city').errors && registerForm.get('city').touched}\"\n      class=\"form-control\" placeholder=\"City\" formControlName=\"city\">\n    <div class=\"invalid-feedback\"\n      *ngIf=\"registerForm.get('city').touched && registerForm.get('city').hasError('required')\">City is required</div>\n  </div>\n\n  <div class=\"form-group\">\n    <input [ngClass]=\"{'is-invalid': registerForm.get('country').errors && registerForm.get('country').touched}\"\n      class=\"form-control\" placeholder=\"Country\" formControlName=\"country\">\n    <div class=\"invalid-feedback\"\n      *ngIf=\"registerForm.get('country').touched && registerForm.get('country').hasError('required')\">Country is required\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"password\"\n    [ngClass]=\"{'is-invalid': registerForm.get('password').errors\n      && registerForm.get('password').touched}\"\n    class=\"form-control\"\n    formControlName=\"password\"\n    placeholder=\"Password\">\n    <div class=\"invalid-feedback\"\n      *ngIf=\"registerForm.get('password').hasError('required')\n        && registerForm.get('password').touched\">Password is required</div>\n    <div class=\"invalid-feedback\"\n      *ngIf=\"registerForm.get('password').hasError('minlength')\n        && registerForm.get('password').touched\">Password must be atleast 4 characters</div>\n      <div class=\"invalid-feedback\"\n        *ngIf=\"registerForm.get('password').hasError('maxlength')\n          && registerForm.get('password').touched\">Password cannot exceed 8 characters</div>\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"password\"\n      [ngClass]=\"{'is-invalid': registerForm.get('confirmPassword').errors\n        && registerForm.get('confirmPassword').touched\n        || registerForm.get('confirmPassword').touched\n        && registerForm.hasError('mismatch')}\"\n      class=\"form-control\"\n      formControlName=\"confirmPassword\"\n      placeholder=\"Confirm Password\">\n    <div class=\"invalid-feedback\"\n      *ngIf=\"registerForm.get('confirmPassword').hasError('required')\n        && registerForm.get('confirmPassword').touched\">Password is required</div>\n    <div class=\"invalid-feedback\"\n      *ngIf=\"registerForm.hasError('mismatch')\n        && registerForm.get('confirmPassword').touched\">Passwords must match</div>\n  </div>\n\n  <div class=\"form-group text-center\">\n    <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!registerForm.valid\">Register</button>\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/register/register.component.sass":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertify, fb, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.fb = fb;
        this.router = router;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.bsConfig = {
            containerClass: 'theme-red'
        },
            this.createRegisterForm();
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            gender: ['male'],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            knownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dateOfBirth: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, {
            validator: this.passwordMatchValidator
        });
    };
    RegisterComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('confirmPassword').value ? null : {
            mismatch: true
        };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.register(this.user).subscribe(function () {
                _this.alertify.success('Registration successful');
            }, function (error) {
                _this.alertify.error(error);
            }, function () {
                _this.authService.login(_this.user).subscribe(function () {
                    _this.router.navigate(['/members']);
                });
            });
        }
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.sass */ "./src/app/register/register.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiDomain: 'localhost:5000',
    apiUrl: 'http://localhost:5000/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stanleyeric/Documents/workspace/DatingApp/DatingApp-SPA/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map