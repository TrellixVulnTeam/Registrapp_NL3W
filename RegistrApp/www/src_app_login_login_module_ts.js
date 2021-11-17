"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 2359:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 955);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 7754)).then(m => m.SignupPageModule)
    },
    {
        path: 'reestablecer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_reestablecer_reestablecer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reestablecer/reestablecer.module */ 4689)).then(m => m.ReestablecerPageModule)
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 9549:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2688);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 2359);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 955);
/* harmony import */ var _input_input_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/input.module */ 9188);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _input_input_module__WEBPACK_IMPORTED_MODULE_2__.InputModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 955:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Duoc_UC_2_a_o_2_semestre_Programacion_app_movil_RegistrApp_v3_Registrapp_RegistrApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 9403);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6051);
/* harmony import */ var _signup_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/usuario.service */ 7312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2688);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 4297);








let LoginPage = class LoginPage {
    constructor(sqLite, router, toastController, usuarioService) {
        this.sqLite = sqLite;
        this.router = router;
        this.toastController = toastController;
        this.usuarioService = usuarioService;
        this.user = {
            usuario: '',
            password: ''
        };
    }
    ngOnInit() {
    }
    ingresar() {
        let navigationExtras = {
            state: {
                user: this.user
            }
        };
        if (this.validateModel(this.user)) {
            let usuarioObtenido = this.usuarioService.getUsuario(this.user.usuario);
            usuarioObtenido.then(res => {
                if (res.pass === this.user.password) {
                    this.router.navigate(['/home'], navigationExtras);
                }
                else {
                    this.presentToast('Usuario o contraseña no validos');
                }
            }).catch(function (e) {
                alert('Usuario no registrado');
            });
        }
        else {
            this.presentToast('Falta completar campo: ' + this.campo);
        }
    }
    /**
    * Muestra un toast al usuario
    * @param message Mensaje a presentar al usuario
    * @param duration Duración el toast, este es opcional
    */
    presentToast(message, duration) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: duration ? duration : 2000
            });
            toast.present();
        });
    }
    validateModel(model) {
        for (var [key, value] of Object.entries(model)) {
            if (value === '') {
                this.campo = key;
                return false;
            }
        }
        return true;
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__.SQLite },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _signup_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _D_Duoc_UC_2_a_o_2_semestre_Programacion_app_movil_RegistrApp_v3_Registrapp_RegistrApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 9403:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-button color=\"primary\" routerLink=\"/login/signup\">Registrate</ion-button>\r\n    </ion-buttons>\r\n</ion-toolbar>\r\n\r\n\r\n<ion-content>\r\n    <div id=\"header\">\r\n        <h1>RegistrApp</h1>\r\n        <img src=\"../../assets/img/logoApp2.png\" alt=\"\">\r\n    </div>\r\n\r\n    <div id=\"form\">\r\n        <ion-item class=\"ion-margin-bottom\">\r\n            <ion-input placeholder=\"Usuario\" [type]=\"type\" [(ngModel)]=\"user.usuario\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-margin-bottom\">\r\n            <ion-input placeholder=\"Contraseña\" type=\"password\" [(ngModel)]=\"user.password\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-button (click)=\"ingresar()\" expand=\"block\" shape=\"round\"> Ingresar </ion-button>\r\n\r\n        <div class=\"ion-text-center ion-margin-top\">\r\n            <a routerLink=\"./reestablecer\" routerDirection=\"forward\"><small>Olvidé mi Contraseña</small></a>\r\n        </div>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ 6051:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #f5f5f3;\n}\nion-toolbar ion-button {\n  text-transform: initial;\n  font-size: 17px;\n}\nion-content {\n  --background: #f5f5f3;\n}\nion-content ion-item {\n  border-radius: 50px;\n  height: 55px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.08);\n  --highlight-height: 0px;\n}\nion-content ion-item ion-input {\n  font-size: 18px;\n  --padding-top: 20px;\n  --padding-bottom: 15px;\n  --padding-start: 5px;\n}\nion-content ion-item a {\n  font-size: 17px;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n}\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nion-content #header h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #010100;\n  margin-bottom: 15%;\n}\nion-content #header img {\n  width: 125px;\n  height: 125px;\n  border-radius: 20%;\n  border: 8px solid #ffffff;\n}\nion-content #form {\n  margin-top: 15%;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content #form ion-button {\n  margin-top: 35px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7QUFBSTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBQUVSO0FBR0E7RUFxQkkscUJBQUE7QUFwQko7QUFDSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsdUJBQUE7QUFDUjtBQUNRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNaO0FBRVE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQUFaO0FBSUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUZSO0FBR1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFEWjtBQUdRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRFo7QUFJSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRlI7QUFHUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtBQURaIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmlvbi1jb250ZW50IHtcclxuXHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggOHB4IDhweCAwcHggcmdiYSgwLDAsMCwwLjA4KTtcclxuICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDBweDtcclxuICAgIFxyXG4gICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbiAgICAjaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMTAxMDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI2Zvcm0ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggOHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map