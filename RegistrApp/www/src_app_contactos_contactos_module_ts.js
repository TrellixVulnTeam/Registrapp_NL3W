"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_contactos_contactos_module_ts"],{

/***/ 6793:
/*!*******************************************************!*\
  !*** ./src/app/contactos/contactos-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactosPageRoutingModule": () => (/* binding */ ContactosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _contactos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactos.page */ 2316);




const routes = [
    {
        path: '',
        component: _contactos_page__WEBPACK_IMPORTED_MODULE_0__.ContactosPage
    },
    {
        path: 'detalle-contacto',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./detalle-contacto/detalle-contacto.module */ 4323)).then(m => m.DetalleContactoPageModule)
    },
    {
        path: 'asistencia-manual',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./asistencia-manual/asistencia-manual.module */ 2251)).then(m => m.AsistenciaManualPageModule)
    }
];
let ContactosPageRoutingModule = class ContactosPageRoutingModule {
};
ContactosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactosPageRoutingModule);



/***/ }),

/***/ 4308:
/*!***********************************************!*\
  !*** ./src/app/contactos/contactos.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactosPageModule": () => (/* binding */ ContactosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2688);
/* harmony import */ var _contactos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactos-routing.module */ 6793);
/* harmony import */ var _contactos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactos.page */ 2316);







let ContactosPageModule = class ContactosPageModule {
};
ContactosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contactos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactosPageRoutingModule
        ],
        declarations: [_contactos_page__WEBPACK_IMPORTED_MODULE_1__.ContactosPage]
    })
], ContactosPageModule);



/***/ }),

/***/ 2316:
/*!*********************************************!*\
  !*** ./src/app/contactos/contactos.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactosPage": () => (/* binding */ ContactosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Carolina_Alvarado_Desktop_Duoc_Registrapp_RegistrApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contactos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contactos.page.html */ 7238);
/* harmony import */ var _contactos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactos.page.scss */ 5580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _contactos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactos.service */ 6658);





let ContactosPage = class ContactosPage {
    constructor(contactoService) {
        this.listaContactos = [];
        this.contactoService = contactoService;
    }
    ngOnInit() {
        this.listaContactos = this.contactoService.getContactos();
    }
    ionViewWillEnter() {
        this.listaContactos = this.contactoService.getContactos();
    }
};
ContactosPage.ctorParameters = () => [
    { type: _contactos_service__WEBPACK_IMPORTED_MODULE_2__.ContactosService }
];
ContactosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-contactos',
        template: _C_Users_Carolina_Alvarado_Desktop_Duoc_Registrapp_RegistrApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contactos_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contactos_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactosPage);

/* en este archivo del componente, se establecen las serie de variables que serán empleadas dentro del modulo */ 


/***/ }),

/***/ 7238:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/contactos/contactos.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"primary\" routerLink=\"/contactos\">Lista de Curso</ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"primary\" routerLink=\"/home\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-list *ngFor=\"let element of listaContactos\">  \r\n    <ion-item [routerLink]=\"['./', element.id]\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-img src= \"assets/img/avatar.png\"></ion-img>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        {{element.id}} {{element.nombre}} {{element.apellidos}}\r\n      </ion-label>\r\n    </ion-item>  \r\n  </ion-list>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ 5580:
/*!***********************************************!*\
  !*** ./src/app/contactos/contactos.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0b3MucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_contactos_contactos_module_ts.js.map