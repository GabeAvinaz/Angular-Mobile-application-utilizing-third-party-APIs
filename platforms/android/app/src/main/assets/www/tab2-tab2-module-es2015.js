(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Gallery\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Gallery</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"container\">\n    <ion-searchbar placeholder=\"Search for an Image\" #searchText (keyup.enter)=\"search(searchText.value)\"></ion-searchbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let image of images;\">\n          <div class=\"img-wrapper\">\n            <img src=\"{{ image.urls.small }}\" (click)=\"openModal(image)\" />\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n      <ion-button expand=\"block\" class=\"btn btn-primary btn-block\" *ngIf=\"!isLoading\" (click)=\"getMore()\">Get More</ion-button>\n\n      <p *ngIf=\"dataReturned\">{{dataReturned}}</p>\n  </div>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab2/tab2-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/tab2/tab2-routing.module.ts");







let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-wrapper {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXdyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _imgsearch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgsearch.service */ "./src/app/imgsearch.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image-modal/image-modal.page */ "./src/app/image-modal/image-modal.page.ts");





let Tab2Page = class Tab2Page {
    constructor(imgSearcher, modalController) {
        this.imgSearcher = imgSearcher;
        this.modalController = modalController;
        this.images = [];
        this.query = '';
        this.isLoading = true;
        this.offset = 1;
    }
    openModal(image) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_4__["ImageModalPage"],
                componentProps: {
                    "imageObj": image
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                }
                this.ionViewWillEnter();
                this.search(this.query);
            });
            return yield modal.present();
        });
    }
    getMore() {
        this.isLoading = true;
        this.offset = this.offset + this.imgSearcher.page;
        this.imgSearcher.searchImg(this.query, this.offset).subscribe(res => {
            if (this.query == '') {
                // this.images = [];
                this.images = this.images.concat(res);
            }
            else {
                this.images = this.images.concat(res['results']);
            }
            // console.log(this.offset);
            // console.log(this.images);
            this.isLoading = false;
        }, (err) => console.log('Ooops!', err), () => console.log(Response, this.results));
    }
    search(query) {
        this.query = query;
        localStorage.setItem('query', query);
        this.imgSearcher.searchImg(this.query, 0).subscribe(res => {
            if (this.query == '') {
                this.images = [];
                this.images = this.images.concat(res);
            }
            else {
                this.images = res['results'];
            }
            // console.log(res);
            // console.log(this.images);
            this.isLoading = false;
        }, (err) => console.log('Ooops!', err), () => console.log(Response, this.results));
    }
    ionViewWillEnter() {
        this.query = localStorage.getItem('query');
        // console.log("Did data load? : ",this.query);
        this.search(this.query);
    }
    ngOnInit() {
        this.imgSearcher.searchImg(this.query, 0).subscribe(res => {
            if (this.query == '') {
                this.images = this.images.concat(res);
            }
            else {
                this.images = res['results'];
            }
            // console.log(res);
            // this.isLoading = false;
        }, (err) => console.log('Ooops!', err), () => console.log(Response, this.results));
    }
};
Tab2Page.ctorParameters = () => [
    { type: _imgsearch_service__WEBPACK_IMPORTED_MODULE_2__["ImgSearchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    })
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map