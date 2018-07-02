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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <app-customer></app-customer>\n        </div>\n    </div>\n</div>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MarketPlace';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _manager_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manager/manager.component */ "./src/app/manager/manager.component.ts");
/* harmony import */ var _supervisor_supervisor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supervisor/supervisor.component */ "./src/app/supervisor/supervisor.component.ts");
/* harmony import */ var _manager_manager_edit_manager_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manager/manager-edit/manager-edit.component */ "./src/app/manager/manager-edit/manager-edit.component.ts");
/* harmony import */ var _supervisor_supervisor_edit_supervisor_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./supervisor/supervisor-edit/supervisor-edit.component */ "./src/app/supervisor/supervisor-edit/supervisor-edit.component.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _shared_dropdown_button_dropdown_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/dropdown-button/dropdown-button.component */ "./src/app/shared/dropdown-button/dropdown-button.component.ts");
/* harmony import */ var _shared_products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/products/products.component */ "./src/app/shared/products/products.component.ts");
/* harmony import */ var _shared_products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/products/product-edit/product-edit.component */ "./src/app/shared/products/product-edit/product-edit.component.ts");
/* harmony import */ var _shared_products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/products/product-detail/product-detail.component */ "./src/app/shared/products/product-detail/product-detail.component.ts");
/* harmony import */ var _customer_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer/shopping-cart/shopping-cart.component */ "./src/app/customer/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _shared_products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/products/product-list/product-list.component */ "./src/app/shared/products/product-list/product-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"],
                _manager_manager_component__WEBPACK_IMPORTED_MODULE_4__["ManagerComponent"],
                _supervisor_supervisor_component__WEBPACK_IMPORTED_MODULE_5__["SupervisorComponent"],
                _manager_manager_edit_manager_edit_component__WEBPACK_IMPORTED_MODULE_6__["ManagerEditComponent"],
                _supervisor_supervisor_edit_supervisor_edit_component__WEBPACK_IMPORTED_MODULE_7__["SupervisorEditComponent"],
                _core_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _core_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _shared_dropdown_button_dropdown_button_component__WEBPACK_IMPORTED_MODULE_10__["DropdownButtonComponent"],
                _shared_products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
                _shared_products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_12__["ProductEditComponent"],
                _shared_products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailComponent"],
                _shared_products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_15__["ProductListComponent"],
                _customer_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_14__["ShoppingCartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar nav\">MarketPlace</div>\n\n<div class=\"nav-bar nav\">\n    <a href=\"Register\">Register</a>\n    <a href=\"Log In\">Log In</a>\n    <a href=\"Log Out\">Log Out</a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/core/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/core/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Welcome to MarketPlace</h2>\n\n<div>\n  This is similar to Amazon where you can view and purchase items. Managers can log in and add new products, product information and price points. Supervisors can log in and view revenue as well as add new departments and overhead costs and make edits.\n</div>\n\n<button class=\"btn btn-default\">Shop Now</button>\n\n<div>\n  <a href=\"Manager Sign In\">Manager Sign In</a>\n  <a href=\"Supervisor Sign In\">Supervisor Sign In</a>\n</div>"

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/core/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/core/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dropdown-button></app-dropdown-button>\n\n<app-product-list></app-product-list>\n"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/customer/shopping-cart/shopping-cart.component.css":
/*!********************************************************************!*\
  !*** ./src/app/customer/shopping-cart/shopping-cart.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/shopping-cart/shopping-cart.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/customer/shopping-cart/shopping-cart.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  shopping-cart works!\n</p>\n"

/***/ }),

/***/ "./src/app/customer/shopping-cart/shopping-cart.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/shopping-cart/shopping-cart.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent() {
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/customer/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/customer/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/manager/manager-edit/manager-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/manager/manager-edit/manager-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manager/manager-edit/manager-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/manager/manager-edit/manager-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  manager-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/manager/manager-edit/manager-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/manager/manager-edit/manager-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: ManagerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerEditComponent", function() { return ManagerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagerEditComponent = /** @class */ (function () {
    function ManagerEditComponent() {
    }
    ManagerEditComponent.prototype.ngOnInit = function () {
    };
    ManagerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manager-edit',
            template: __webpack_require__(/*! ./manager-edit.component.html */ "./src/app/manager/manager-edit/manager-edit.component.html"),
            styles: [__webpack_require__(/*! ./manager-edit.component.css */ "./src/app/manager/manager-edit/manager-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManagerEditComponent);
    return ManagerEditComponent;
}());



/***/ }),

/***/ "./src/app/manager/manager.component.css":
/*!***********************************************!*\
  !*** ./src/app/manager/manager.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manager/manager.component.html":
/*!************************************************!*\
  !*** ./src/app/manager/manager.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dropdown-button></app-dropdown-button>"

/***/ }),

/***/ "./src/app/manager/manager.component.ts":
/*!**********************************************!*\
  !*** ./src/app/manager/manager.component.ts ***!
  \**********************************************/
/*! exports provided: ManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return ManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagerComponent = /** @class */ (function () {
    function ManagerComponent() {
    }
    ManagerComponent.prototype.ngOnInit = function () {
    };
    ManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manager',
            template: __webpack_require__(/*! ./manager.component.html */ "./src/app/manager/manager.component.html"),
            styles: [__webpack_require__(/*! ./manager.component.css */ "./src/app/manager/manager.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManagerComponent);
    return ManagerComponent;
}());



/***/ }),

/***/ "./src/app/shared/dropdown-button/dropdown-button.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/dropdown-button/dropdown-button.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/dropdown-button/dropdown-button.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/dropdown-button/dropdown-button.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dropdown-button works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/dropdown-button/dropdown-button.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/dropdown-button/dropdown-button.component.ts ***!
  \*********************************************************************/
/*! exports provided: DropdownButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownButtonComponent", function() { return DropdownButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownButtonComponent = /** @class */ (function () {
    function DropdownButtonComponent() {
    }
    DropdownButtonComponent.prototype.ngOnInit = function () {
    };
    DropdownButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropdown-button',
            template: __webpack_require__(/*! ./dropdown-button.component.html */ "./src/app/shared/dropdown-button/dropdown-button.component.html"),
            styles: [__webpack_require__(/*! ./dropdown-button.component.css */ "./src/app/shared/dropdown-button/dropdown-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownButtonComponent);
    return DropdownButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/products/product-detail/product-detail.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/products/product-detail/product-detail.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/products/product-detail/product-detail.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/products/product-detail/product-detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/products/product-detail/product-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/products/product-detail/product-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent() {
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/shared/products/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/shared/products/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/shared/products/product-edit/product-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shared/products/product-edit/product-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/products/product-edit/product-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/products/product-edit/product-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/products/product-edit/product-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/products/product-edit/product-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent() {
    }
    ProductEditComponent.prototype.ngOnInit = function () {
    };
    ProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/shared/products/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/shared/products/product-edit/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/shared/products/product-list/product-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shared/products/product-list/product-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/products/product-list/product-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/products/product-list/product-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <app-product-item>\n\n    </app-product-item>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/products/product-list/product-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/products/product-list/product-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Store } from '@ngrx/store';
// import * as fromProduct from '../store/recipe.reducers';
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/shared/products/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/shared/products/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/shared/products/products.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/products/products.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/products/products.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/products/products.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <app-product-list></app-product-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/products/products.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/products/products.component.ts ***!
  \*******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/shared/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/shared/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/supervisor/supervisor-edit/supervisor-edit.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/supervisor/supervisor-edit/supervisor-edit.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/supervisor/supervisor-edit/supervisor-edit.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/supervisor/supervisor-edit/supervisor-edit.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  supervisor-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/supervisor/supervisor-edit/supervisor-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/supervisor/supervisor-edit/supervisor-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: SupervisorEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupervisorEditComponent", function() { return SupervisorEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupervisorEditComponent = /** @class */ (function () {
    function SupervisorEditComponent() {
    }
    SupervisorEditComponent.prototype.ngOnInit = function () {
    };
    SupervisorEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supervisor-edit',
            template: __webpack_require__(/*! ./supervisor-edit.component.html */ "./src/app/supervisor/supervisor-edit/supervisor-edit.component.html"),
            styles: [__webpack_require__(/*! ./supervisor-edit.component.css */ "./src/app/supervisor/supervisor-edit/supervisor-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SupervisorEditComponent);
    return SupervisorEditComponent;
}());



/***/ }),

/***/ "./src/app/supervisor/supervisor.component.css":
/*!*****************************************************!*\
  !*** ./src/app/supervisor/supervisor.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/supervisor/supervisor.component.html":
/*!******************************************************!*\
  !*** ./src/app/supervisor/supervisor.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  supervisor works!\n</p>\n"

/***/ }),

/***/ "./src/app/supervisor/supervisor.component.ts":
/*!****************************************************!*\
  !*** ./src/app/supervisor/supervisor.component.ts ***!
  \****************************************************/
/*! exports provided: SupervisorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupervisorComponent", function() { return SupervisorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupervisorComponent = /** @class */ (function () {
    function SupervisorComponent() {
    }
    SupervisorComponent.prototype.ngOnInit = function () {
    };
    SupervisorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supervisor',
            template: __webpack_require__(/*! ./supervisor.component.html */ "./src/app/supervisor/supervisor.component.html"),
            styles: [__webpack_require__(/*! ./supervisor.component.css */ "./src/app/supervisor/supervisor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SupervisorComponent);
    return SupervisorComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rich/Desktop/Projects/MarketPlace/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map