(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["image-modal-image-modal-module"],{

/***/ "./src/app/image-modal/image-modal-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/image-modal/image-modal-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ImageModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModalPageRoutingModule", function() { return ImageModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _image_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-modal.page */ "./src/app/image-modal/image-modal.page.ts");




const routes = [
    {
        path: '',
        component: _image_modal_page__WEBPACK_IMPORTED_MODULE_3__["ImageModalPage"]
    }
];
let ImageModalPageRoutingModule = class ImageModalPageRoutingModule {
};
ImageModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ImageModalPageRoutingModule);



/***/ }),

/***/ "./src/app/image-modal/image-modal.module.ts":
/*!***************************************************!*\
  !*** ./src/app/image-modal/image-modal.module.ts ***!
  \***************************************************/
/*! exports provided: ImageModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModalPageModule", function() { return ImageModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _image_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-modal-routing.module */ "./src/app/image-modal/image-modal-routing.module.ts");
/* harmony import */ var _image_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-modal.page */ "./src/app/image-modal/image-modal.page.ts");







let ImageModalPageModule = class ImageModalPageModule {
};
ImageModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _image_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImageModalPageRoutingModule"]
        ],
        declarations: [_image_modal_page__WEBPACK_IMPORTED_MODULE_6__["ImageModalPage"]]
    })
], ImageModalPageModule);



/***/ })

}]);
//# sourceMappingURL=image-modal-image-modal-module-es2015.js.map