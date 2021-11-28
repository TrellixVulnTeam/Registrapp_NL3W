"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_camara_camara_module_ts"],{

/***/ 5365:
/*!*************************************************!*\
  !*** ./src/app/camara/camara-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamaraPageRoutingModule": () => (/* binding */ CamaraPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _camara_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camara.page */ 857);




const routes = [
    {
        path: '',
        component: _camara_page__WEBPACK_IMPORTED_MODULE_0__.CamaraPage
    }
];
let CamaraPageRoutingModule = class CamaraPageRoutingModule {
};
CamaraPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CamaraPageRoutingModule);



/***/ }),

/***/ 4824:
/*!*****************************************!*\
  !*** ./src/app/camara/camara.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamaraPageModule": () => (/* binding */ CamaraPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2688);
/* harmony import */ var _camara_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camara-routing.module */ 5365);
/* harmony import */ var _camara_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camara.page */ 857);







let CamaraPageModule = class CamaraPageModule {
};
CamaraPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _camara_routing_module__WEBPACK_IMPORTED_MODULE_0__.CamaraPageRoutingModule
        ],
        declarations: [_camara_page__WEBPACK_IMPORTED_MODULE_1__.CamaraPage]
    })
], CamaraPageModule);



/***/ }),

/***/ 857:
/*!***************************************!*\
  !*** ./src/app/camara/camara.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamaraPage": () => (/* binding */ CamaraPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_prueba_Registrapp_Registrapp_RegistrApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_camara_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./camara.page.html */ 2635);
/* harmony import */ var _camara_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camara.page.scss */ 6117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 7091);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 226);






let CamaraPage = class CamaraPage {
    constructor(camera, webView) {
        this.camera = camera;
        this.webView = webView;
    }
    takePicture() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options)
            .then((file) => {
            this.image = this.webView.convertFileSrc(file);
        }, (err) => {
            console.log(err);
        });
    }
};
CamaraPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_3__.WebView }
];
CamaraPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-camara',
        template: _D_prueba_Registrapp_Registrapp_RegistrApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_camara_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_camara_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CamaraPage);



/***/ }),

/***/ 2635:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/camara/camara.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>camara</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-button (click)=\"takePicture()\">Take picture</ion-button>\r\n  <img *ngIf=\"image\" [src]=\"image\" alt=\"image\">\r\n</ion-content>\r\n");

/***/ }),

/***/ 6117:
/*!*****************************************!*\
  !*** ./src/app/camara/camara.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1hcmEucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_camara_camara_module_ts.js.map