"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_apiRest_apiRest_module_ts"],{

/***/ 8515:
/*!*******************************************!*\
  !*** ./src/app/apiRest/apiRest.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiRestPageModule": () => (/* binding */ ApiRestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 2688);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _apiRest_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiRest.page */ 2830);







// import {NgxMasonryModule} from 'ngx-masonry';
let ApiRestPageModule = class ApiRestPageModule {
};
ApiRestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{ path: '', component: _apiRest_page__WEBPACK_IMPORTED_MODULE_0__.ApiRestPage }]),
            // NgxMasonryModule
        ],
        declarations: [_apiRest_page__WEBPACK_IMPORTED_MODULE_0__.ApiRestPage]
    })
], ApiRestPageModule);



/***/ }),

/***/ 2830:
/*!*****************************************!*\
  !*** ./src/app/apiRest/apiRest.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiRestPage": () => (/* binding */ ApiRestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_RegistrApp_Registrap_v3_Registrapp_RegistrApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_apiRest_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./apiRest.page.html */ 322);
/* harmony import */ var _apiRest_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiRest.page.scss */ 1291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _servicios_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/rest.service */ 7432);





let ApiRestPage = class ApiRestPage {
    constructor(restService) {
        this.restService = restService;
        this.datosObservable = this.restService.get_Datos();
    }
    ngOnInit() {
    }
};
ApiRestPage.ctorParameters = () => [
    { type: _servicios_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService }
];
ApiRestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-apiRest',
        template: _D_RegistrApp_Registrap_v3_Registrapp_RegistrApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_apiRest_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_apiRest_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ApiRestPage);



/***/ }),

/***/ 7432:
/*!*******************************************!*\
  !*** ./src/app/servicios/rest.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestService": () => (/* binding */ RestService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3981);



let RestService = class RestService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'https://jsonplaceholder.typicode.com/users';
    }
    get_Datos() {
        return this.httpClient.get(this.baseUrl);
    }
};
RestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
RestService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], RestService);



/***/ }),

/***/ 322:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/apiRest/apiRest.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-button color=\"primary\">Listado Docentes</ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button color=\"primary\" routerLink=\"/home\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n    <ion-list *ngFor=\"let datos of datosObservable | async\">  \r\n      <ion-item >\r\n        <ion-avatar slot=\"start\">\r\n          <ion-img src= \"assets/img/avatar.png\"></ion-img>\r\n        </ion-avatar>\r\n        <ion-label>\r\n            {{datos.id}} {{datos.name}} \r\n        </ion-label>\r\n        <ion-label slot=\"end\">\r\n            {{datos.email}}\r\n        </ion-label>\r\n      </ion-item>  \r\n    </ion-list>\r\n</ion-content>\r\n  ");

/***/ }),

/***/ 1291:
/*!*******************************************!*\
  !*** ./src/app/apiRest/apiRest.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = ".blogcontainer .welcome-card {\n  width: calc(33.333% - 20px);\n}\n.blogcontainer .welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaVJlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMkJBQUE7QUFBSjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUFOIiwiZmlsZSI6ImFwaVJlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2djb250YWluZXIge1xyXG4gIC53ZWxjb21lLWNhcmQge1xyXG4gICAgd2lkdGg6IGNhbGMoMzMuMzMzJSAtIDIwcHgpO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_apiRest_apiRest_module_ts.js.map