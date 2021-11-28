"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_geolocalizacion_geolocalizacion_module_ts"],{

/***/ 4455:
/*!*******************************************************************!*\
  !*** ./src/app/geolocalizacion/geolocalizacion-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocalizacionPageRoutingModule": () => (/* binding */ GeolocalizacionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _geolocalizacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geolocalizacion.page */ 2766);




const routes = [
    {
        path: '',
        component: _geolocalizacion_page__WEBPACK_IMPORTED_MODULE_0__.GeolocalizacionPage
    }
];
let GeolocalizacionPageRoutingModule = class GeolocalizacionPageRoutingModule {
};
GeolocalizacionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GeolocalizacionPageRoutingModule);



/***/ }),

/***/ 1351:
/*!***********************************************************!*\
  !*** ./src/app/geolocalizacion/geolocalizacion.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocalizacionPageModule": () => (/* binding */ GeolocalizacionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2688);
/* harmony import */ var _geolocalizacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geolocalizacion-routing.module */ 4455);
/* harmony import */ var _geolocalizacion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocalizacion.page */ 2766);







let GeolocalizacionPageModule = class GeolocalizacionPageModule {
};
GeolocalizacionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _geolocalizacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.GeolocalizacionPageRoutingModule
        ],
        declarations: [_geolocalizacion_page__WEBPACK_IMPORTED_MODULE_1__.GeolocalizacionPage]
    })
], GeolocalizacionPageModule);



/***/ }),

/***/ 2766:
/*!*********************************************************!*\
  !*** ./src/app/geolocalizacion/geolocalizacion.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocalizacionPage": () => (/* binding */ GeolocalizacionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_prueba_Registrapp_Registrapp_RegistrApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_geolocalizacion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./geolocalizacion.page.html */ 3592);
/* harmony import */ var _geolocalizacion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocalizacion.page.scss */ 9578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 1184);





let GeolocalizacionPage = class GeolocalizacionPage {
    constructor(geolocation) {
        this.geolocation = geolocation;
        this.getGeolocation();
    }
    getGeolocation() {
        this.geolocation.getCurrentPosition().then((geoposition) => {
            this.lat = geoposition.coords.latitude;
            this.lon = geoposition.coords.longitude;
        });
    }
};
GeolocalizacionPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation }
];
GeolocalizacionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-geolocalizacion',
        template: _D_prueba_Registrapp_Registrapp_RegistrApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_geolocalizacion_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_geolocalizacion_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GeolocalizacionPage);



/***/ }),

/***/ 3592:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/geolocalizacion/geolocalizacion.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-navbar>\r\n    <ion-title>\r\n      Geolocalización\r\n    </ion-title>\r\n  </ion-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <p>Latitud: {{lat}}</p>\r\n  <p>Longitud: {{lon}}</p>\r\n</ion-content>\r\n");

/***/ }),

/***/ 9578:
/*!***********************************************************!*\
  !*** ./src/app/geolocalizacion/geolocalizacion.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW9sb2NhbGl6YWNpb24ucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_geolocalizacion_geolocalizacion_module_ts.js.map