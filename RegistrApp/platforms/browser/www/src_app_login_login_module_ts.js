(self["webpackChunkclase3"] = self["webpackChunkclase3"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 5980)).then(m => m.SignupPageModule)
    },
    {
        path: 'reestablecer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_reestablecer_reestablecer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reestablecer/reestablecer.module */ 2959)).then(m => m.ReestablecerPageModule)
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

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var _input_input_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/input.module */ 7698);








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

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _signup_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/usuario.service */ 8707);







let LoginPage = class LoginPage {
    constructor(router, toastController, usuarioService) {
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
            this.usuarioServic = this.usuarioService.getUsuario(this.user.usuario);
            if (this.usuarioService.getUsuario(this.user.usuario).password === this.user.password) {
                this.router.navigate(['/home'], navigationExtras);
            }
            else {
                this.presentToast('Usuario o contraseña no validos');
            }
        }
        else {
            this.presentToast('Falta completar: ' + this.campo);
        }
    }
    /**
    * Muestra un toast al usuario
    * @param message Mensaje a presentar al usuario
    * @param duration Duración el toast, este es opcional
    */
    presentToast(message, duration) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _signup_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuariosService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 1339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #f5f5f3;\n}\nion-toolbar ion-button {\n  text-transform: initial;\n  font-size: 17px;\n}\nion-content {\n  --background: #f5f5f3;\n}\nion-content ion-item {\n  border-radius: 50px;\n  height: 55px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.08);\n  --highlight-height: 0px;\n}\nion-content ion-item ion-input {\n  font-size: 18px;\n  --padding-top: 20px;\n  --padding-bottom: 15px;\n  --padding-start: 5px;\n}\nion-content ion-item a {\n  font-size: 17px;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n}\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nion-content #header h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #010100;\n  margin-bottom: 15%;\n}\nion-content #header img {\n  width: 125px;\n  height: 125px;\n  border-radius: 20%;\n  border: 8px solid #ffffff;\n}\nion-content #form {\n  margin-top: 15%;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content #form ion-button {\n  margin-top: 35px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7QUFBSTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBQUVSO0FBR0E7RUFxQkkscUJBQUE7QUFwQko7QUFDSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsdUJBQUE7QUFDUjtBQUNRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNaO0FBRVE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQUFaO0FBSUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUZSO0FBR1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFEWjtBQUdRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRFo7QUFJSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRlI7QUFHUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtBQURaIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgfVxufVxuXG5cbmlvbi1jb250ZW50IHtcblxuICAgIGlvbi1pdGVte1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCA4cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuMDgpO1xuICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDBweDtcbiAgICBcbiAgICAgICAgaW9uLWlucHV0e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XG4gICAgI2hlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICBjb2xvcjogIzAxMDEwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1JTtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2Zvcm0ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ 6770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar>\n    <ion-buttons slot=\"end\">\n        <ion-button color=\"primary\" routerLink=\"/login/signup\">Registrate</ion-button>\n    </ion-buttons>\n</ion-toolbar>\n\n\n<ion-content>\n    <div id=\"header\">\n        <h1>RegistrApp</h1>\n        <img src=\"../../assets/img/logoApp2.png\" alt=\"\">\n    </div>\n\n    <div id=\"form\">\n        <ion-item class=\"ion-margin-bottom\">\n            <ion-input placeholder=\"Usuario\" [type]=\"type\" [(ngModel)]=\"user.usuario\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"ion-margin-bottom\">\n            <ion-input placeholder=\"Contraseña\" type=\"password\" [(ngModel)]=\"user.password\"></ion-input>\n        </ion-item>\n\n        <ion-button (click)=\"ingresar()\" expand=\"block\" shape=\"round\"> Ingresar </ion-button>\n\n        <div class=\"ion-text-center ion-margin-top\">\n            <a routerLink=\"./reestablecer\" routerDirection=\"forward\"><small>Olvidé mi Contraseña</small></a>\n        </div>\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map