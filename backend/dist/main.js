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
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_manage_subjects_manage_subjects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/manage-subjects/manage-subjects.component */ "./src/app/components/manage-subjects/manage-subjects.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");






var routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] },
    // { path: 'posts', component: UploadPostsComponent },
    { path: 'register', component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"] },
    // { path: 'messages', component: MessengerComponent },
    { path: 'manage', component: _components_manage_subjects_manage_subjects_component__WEBPACK_IMPORTED_MODULE_4__["ManageSubjectsComponent"] }
    // { path: 'registration', component: ManageSubjectsComponent }
    // { path: '**', component: PageNotFoundComponent }
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

module.exports = "<router-outlet></router-outlet>\r\n<app-navbar></app-navbar>\r\n<app-side-bar></app-side-bar>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/side-bar/side-bar.component */ "./src/app/components/side-bar/side-bar.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components//main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_manage_subjects_manage_subjects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/manage-subjects/manage-subjects.component */ "./src/app/components/manage-subjects/manage-subjects.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["SideBarComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"],
                _components_manage_subjects_manage_subjects_component__WEBPACK_IMPORTED_MODULE_13__["ManageSubjectsComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                // MDBBootstrapModule.forRoot(),
                // BrowserAnimationsModule,
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"content\">\r\n    <img src=\"../../../assets/UniWareWhite.png\" alt=\"UniWare logo\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 80%;\n  height: 90%;\n  top: 72px;\n  left: 20%;\n  position: fixed;\n  display: flex;\n  align-items: center; }\n\n.content {\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL0M6XFxVc2Vyc1xcTcOhcnRvblxcVW5pV2FyZVxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgdG9wOiA3MnB4O1xyXG4gIGxlZnQ6IDIwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-subjects/manage-subjects.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/manage-subjects/manage-subjects.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"content\">\r\n    <p class=\"title\">Manage my subjects</p>\r\n    <div class=\"lists\">\r\n      <div class=\"allSubjects\">\r\n        <div *ngFor='let subject of subjects' (click)=\"chooseSubject(subj.innerText)\" class=\"subject\">\r\n          <span #subj class=\"subjectName\">{{subject.name}}</span>\r\n          <span class=\"subjectExp\">{{subject.exp}}XP</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"selectedSubjects\">\r\n          <div *ngFor='let mySubject of selectedSubjects' (click)=\"removeSubject(mySubj.innerText)\" class=\"subject\">\r\n            <span #mySubj class=\"subjectName\">{{mySubject.name}}</span>\r\n            <span class=\"subjectExp\">{{mySubject.exp}}XP</span>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <button class=\"back\" (click)=\"goToMainPage()\" type=\"button\">Back</button>\r\n      <button class=\"submit\" type=\"submit\">Save</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/manage-subjects/manage-subjects.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/manage-subjects/manage-subjects.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 80%;\n  height: 90%;\n  left: 20%;\n  top: 72px;\n  position: fixed;\n  display: flex;\n  align-items: center; }\n\n.content {\n  margin: 0 auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center; }\n\n.title {\n  font-size: 36px;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  color: #505050; }\n\n.lists {\n  display: flex; }\n\n.subjectForm {\n  width: 50vh; }\n\n.allSubjects, .selectedSubjects {\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 10px 20px;\n  min-width: 400px;\n  max-height: 450px;\n  margin: 0px auto;\n  overflow-y: scroll;\n  cursor: pointer; }\n\n.allSubjects {\n  margin-right: 50px; }\n\n.allSubjects::-webkit-scrollbar,\n.selectedSubjects::-webkit-scrollbar {\n  width: 1em; }\n\n.subject {\n  display: flex;\n  margin: 5px;\n  justify-content: space-between; }\n\n.subject:hover {\n  border-bottom: 1px solid black; }\n\n.subject input {\n  margin-right: 20px; }\n\n.subjectName, .subjectExp {\n  font-weight: 600; }\n\n.subjectName {\n  margin-right: 30px; }\n\n.footer button {\n  padding: 10px;\n  font-size: 15px;\n  max-width: 130px;\n  letter-spacing: 0.1em;\n  cursor: pointer;\n  border: none;\n  border-radius: 5px; }\n\n.footer {\n  display: flex;\n  justify-content: center; }\n\n.footer button {\n  margin: 20px 50px 0px 0px; }\n\nlabel {\n  margin-top: 20px; }\n\n.upload:hover,\n.footer button:hover {\n  background-color: #e2e0e0; }\n\n.upload:focus,\n.footer button:focus {\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2Utc3ViamVjdHMvQzpcXFVzZXJzXFxNw6FydG9uXFxVbmlXYXJlXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFuYWdlLXN1YmplY3RzXFxtYW5hZ2Utc3ViamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUlqQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjs7RUFFRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7O0VBRUUseUJBQW9DLEVBQUE7O0FBR3RDOztFQUVFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuYWdlLXN1YmplY3RzL21hbmFnZS1zdWJqZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgbGVmdDogMjAlO1xyXG4gIHRvcDogNzJweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICBjb2xvcjogIzUwNTA1MDtcclxufVxyXG5cclxuLmxpc3RzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc3ViamVjdEZvcm0ge1xyXG4gIHdpZHRoOiA1MHZoO1xyXG59XHJcblxyXG4uYWxsU3ViamVjdHMsIC5zZWxlY3RlZFN1YmplY3Rze1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgbWF4LWhlaWdodDogNDUwcHg7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLmFsbFN1YmplY3RzIHtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5hbGxTdWJqZWN0czo6LXdlYmtpdC1zY3JvbGxiYXIsXHJcbi5zZWxlY3RlZFN1YmplY3RzOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDFlbTtcclxufVxyXG5cclxuLnN1YmplY3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc3ViamVjdDpob3ZlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uc3ViamVjdCBpbnB1dHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zdWJqZWN0TmFtZSwgLnN1YmplY3RFeHAge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5zdWJqZWN0TmFtZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIGJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWF4LXdpZHRoOiAxMzBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb290ZXIgYnV0dG9uIHtcclxuICBtYXJnaW46IDIwcHggNTBweCAwcHggMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnVwbG9hZDpob3ZlcixcclxuLmZvb3RlciBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIyNCwgMjI0KTtcclxufVxyXG5cclxuLnVwbG9hZDpmb2N1cyxcclxuLmZvb3RlciBidXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/manage-subjects/manage-subjects.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/manage-subjects/manage-subjects.component.ts ***!
  \*************************************************************************/
/*! exports provided: ManageSubjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSubjectsComponent", function() { return ManageSubjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_subjects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/subjects.service */ "./src/app/services/subjects.service.ts");




var ManageSubjectsComponent = /** @class */ (function () {
    function ManageSubjectsComponent(router, service) {
        this.router = router;
        this.service = service;
        this.subjects = [];
        this.selectedSubjects = [];
    }
    ManageSubjectsComponent.prototype.ngOnInit = function () {
        this.getSubjects();
    };
    ManageSubjectsComponent.prototype.goToMainPage = function () {
        this.router.navigate(['/main']);
    };
    ManageSubjectsComponent.prototype.getSubjects = function () {
        // this.subjects = this.service.getSubjects();
    };
    ManageSubjectsComponent.prototype.onSubmit = function () {
    };
    ManageSubjectsComponent.prototype.chooseSubject = function (subjectName) {
        var _this = this;
        this.subjects.forEach(function (e, i) {
            if (e.name === subjectName) {
                _this.selectedSubjects.push(e);
                _this.subjects.splice(i, 1);
            }
        });
    };
    ManageSubjectsComponent.prototype.removeSubject = function (subjectName) {
        var _this = this;
        this.selectedSubjects.forEach(function (e, i) {
            if (e.name === subjectName) {
                _this.subjects.push(e);
                _this.selectedSubjects.splice(i, 1);
            }
        });
    };
    ManageSubjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-subjects',
            template: __webpack_require__(/*! ./manage-subjects.component.html */ "./src/app/components/manage-subjects/manage-subjects.component.html"),
            styles: [__webpack_require__(/*! ./manage-subjects.component.scss */ "./src/app/components/manage-subjects/manage-subjects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_subjects_service__WEBPACK_IMPORTED_MODULE_3__["SubjectsService"]])
    ], ManageSubjectsComponent);
    return ManageSubjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <img [routerLink]=\"['/main']\" class=\"uniware\" src=\"../../../assets/uniwa.PNG\">\r\n  <div class=\"input\">\r\n    <form [formGroup]='loginData' (ngSubmit)=login()>\r\n      <input formControlName=\"username\" type=\"text\" name=\"username\" placeholder=\"username\">\r\n      <input formControlName=\"password\" type=\"password\" name=\"password\" placeholder=\"password\">\r\n      <button type=\"submit\" class=\"Login\">Login</button>\r\n      <button type=\"button\" (click)=\"goToRegister()\" class=\"Login\">Sign Up</button>\r\n    </form>\r\n  </div>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  background-color: black;\n  display: flex;\n  position: fixed;\n  top: 0;\n  z-index: 10;\n  justify-content: space-between;\n  height: 10%; }\n  mat-toolbar .uniware {\n    height: 100%;\n    cursor: pointer;\n    outline: none; }\n  mat-toolbar input[type=\"text\"], mat-toolbar [type=\"password\"] {\n    background-color: #495057;\n    border: solid 1px #495057;\n    margin: 5px;\n    color: white;\n    width: 30%;\n    border-radius: 4px;\n    outline: none;\n    padding: 5px; }\n  mat-toolbar input::-webkit-input-placeholder {\n    padding: 5px; }\n  mat-toolbar input::-ms-input-placeholder {\n    padding: 5px; }\n  mat-toolbar input::placeholder {\n    padding: 5px; }\n  mat-toolbar button {\n    margin: 5px;\n    outline: none;\n    width: 15%;\n    padding: 5px;\n    border: 1px solid green;\n    border-radius: 5px;\n    cursor: pointer; }\n  mat-toolbar .Login {\n    background: none;\n    color: white;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxNw6FydG9uXFxVbmlXYXJlXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztFQUNYLDhCQUE4QjtFQUM5QixXQUFXLEVBQUE7RUFQYjtJQVVJLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYSxFQUFBO0VBWmpCO0lBZ0JJLHlCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZLEVBQUE7RUF2QmhCO0lBMkJJLFlBQVcsRUFBQTtFQTNCZjtJQTJCSSxZQUFXLEVBQUE7RUEzQmY7SUEyQkksWUFBVyxFQUFBO0VBM0JmO0lBOEJJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtFQXBDbkI7SUF3Q0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDEwJTtcclxuXHJcbiAgLnVuaXdhcmUge1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSxbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3IgOiAjNDk1MDU3O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzQ5NTA1NztcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLkxvZ2lue1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(fb, service, router) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.currentUser = null;
        this.loginData = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.login = function () {
        var _this = this;
        this.service.login(this.loginData.value)
            .subscribe(function (data) {
            localStorage.setItem('jwtToken', data.token);
            _this.router.navigate(['/main']);
            _this.currentUser = data.user;
            console.log(_this.currentUser);
        });
    };
    NavbarComponent.prototype.goToRegister = function () {
        this.router.navigate(['/register']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/registration/registration.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"content\">\r\n    <p class=\"title\">CREATE ACCOUNT</p>\r\n    <form class=\"register\" [formGroup]='newUser' action=\"/upload\" \r\n      method=\"POST\" (ngSubmit)=\"onSubmit()\"\r\n      enctype=\"multipart/form-data\">\r\n      <div class=\"form-group\">\r\n        <label>Username</label>\r\n        <input formControlName=\"username\" type=\"text\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Password</label>\r\n        <input formControlName=\"password\" type=\"password\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Choose a profile picture</label>\r\n        <button (click)=\"fileInput.click()\" class=\"upload\" type=\"button\">Upload file</button>\r\n        <input #fileInput (change)=\"onFileSelected($event)\" type=\"file\">\r\n      </div>\r\n      <div class=\"footer\">\r\n        <button class=\"back\" (click)=\"goToMainPage()\" type=\"button\">Back</button>\r\n        <button class=\"submit\" type=\"submit\">Register</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/registration/registration.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 80%;\n  height: 90%;\n  margin-left: 20%;\n  margin-top: 72px;\n  position: fixed;\n  display: flex;\n  padding: 50px;\n  align-items: center; }\n\n.content {\n  margin: 0 auto; }\n\n.title {\n  font-size: 36px;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  color: #505050; }\n\n.register {\n  margin: 20px;\n  color: #505050;\n  font-size: 22px; }\n\n.form-group {\n  display: flex;\n  flex-direction: column; }\n\ninput[type=\"text\"], [type=\"password\"] {\n  padding: 5px;\n  letter-spacing: 0.1em;\n  width: 400px;\n  font-size: 18px;\n  border: none;\n  border-bottom: 1px solid #505050;\n  margin: 20px; }\n\ninput[type=\"text\"], [type=\"password\"]:focus {\n  outline: none; }\n\ninput[type=\"file\"] {\n  display: none; }\n\n.upload, .footer button {\n  padding: 10px;\n  font-size: 15px;\n  max-width: 130px;\n  letter-spacing: 0.1em;\n  cursor: pointer;\n  border: none;\n  border-radius: 5px; }\n\n.upload {\n  margin: 30px auto;\n  background-color: #a7a7a7; }\n\n.footer {\n  display: flex;\n  justify-content: flex-end; }\n\n.footer button {\n  margin-right: 20px; }\n\nlabel {\n  margin-top: 20px; }\n\n.upload:hover,\n.footer button:hover {\n  background-color: #e2e0e0; }\n\n.upload:focus,\n.footer button:focus {\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vQzpcXFVzZXJzXFxNw6FydG9uXFxVbmlXYXJlXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xccmVnaXN0cmF0aW9uXFxyZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUFvQyxFQUFBOztBQUd0QztFQUNFLGFBQWE7RUFDYix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7O0VBRUUseUJBQW9DLEVBQUE7O0FBR3RDOztFQUVFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICBtYXJnaW4tdG9wOiA3MnB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICBjb2xvcjogIzUwNTA1MDtcclxufVxyXG5cclxuLnJlZ2lzdGVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgY29sb3I6ICM1MDUwNTA7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBmb250LXNpemU6IDE4cHg7ICBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MDUwNTA7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnVwbG9hZCwgLmZvb3RlciBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1heC13aWR0aDogMTMwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udXBsb2FkIHtcclxuICBtYXJnaW46IDMwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAxNjcsIDE2Nyk7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmZvb3RlciBidXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi51cGxvYWQ6aG92ZXIsXHJcbi5mb290ZXIgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMjQsIDIyNCk7XHJcbn1cclxuXHJcbi51cGxvYWQ6Zm9jdXMsXHJcbi5mb290ZXIgYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(fb, service, router) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.selectedPicture = null;
        this.newUser = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var userData = new FormData();
        userData.append('username', this.newUser.value.username);
        userData.append('password', this.newUser.value.password);
        userData.append('profilePicture', this.selectedPicture[0]);
        this.service.registration(userData)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    RegistrationComponent.prototype.goToMainPage = function () {
        this.router.navigate(['/']);
    };
    RegistrationComponent.prototype.onFileSelected = function (event) {
        this.selectedPicture = event.target.files;
        console.log(this.selectedPicture);
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/components/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/components/registration/registration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"sidebar\">\r\n    <div class=\"functions\">\r\n      <button (click)=\"goToManageSubjects()\">Manage subjects</button>\r\n    </div>\r\n    <div class=\"subjects\">\r\n      <p class=\"title\">My Subjects</p>\r\n      <div class=\"subscriptions\">\r\n        <div *ngFor='let sideSubj of mySubjects'>\r\n          <p class=\"subject\">{{sideSubj.name}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 100vh; }\n\n.sidebar {\n  background-color: #222222ee;\n  height: 100%;\n  width: 20%;\n  color: #dad8d8;\n  display: flex;\n  flex-direction: column;\n  margin-top: 72px;\n  overflow: hidden;\n  position: fixed; }\n\n.functions {\n  margin: 10px;\n  height: 10%;\n  width: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.functions button {\n  padding: 10px;\n  font-size: 15px;\n  letter-spacing: 0.1em;\n  cursor: pointer;\n  background-color: #dad8d8;\n  border: none;\n  border-radius: 5px; }\n\n.functions button:hover {\n  background-color: white;\n  box-shadow: -1px 14px 17px -6px rgba(0, 0, 0, 0.75); }\n\n.functions button:focus {\n  outline: none; }\n\n.subjects {\n  margin: 10px;\n  height: 85%; }\n\n.subjects .title {\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0px 0px 20px 0px;\n  border-bottom: 1px solid #dad8d8; }\n\n.subjects .subject {\n  cursor: pointer;\n  margin: 10px 5px;\n  font-size: 16px;\n  font-weight: 300; }\n\n.subject:hover {\n  text-decoration: underline;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9DOlxcVXNlcnNcXE3DoXJ0b25cXFVuaVdhcmVcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWRlLWJhclxcc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFFRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFVBQVU7RUFDVixjQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHlCQUFvQztFQUNwQyxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1EQUFnRCxFQUFBOztBQUdsRDtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixnQ0FBMkMsRUFBQTs7QUFHN0M7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvd29vZHMuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMmVlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMjAlO1xyXG4gIGNvbG9yOiByZ2IoMjE4LCAyMTYsIDIxNik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDcycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi5mdW5jdGlvbnMge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBoZWlnaHQ6IDEwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mdW5jdGlvbnMgYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxNiwgMjE2KTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uZnVuY3Rpb25zIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogLTFweCAxNHB4IDE3cHggLTZweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG59XHJcblxyXG4uZnVuY3Rpb25zIGJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnN1YmplY3RzIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgaGVpZ2h0OiA4NSU7XHJcbn1cclxuXHJcbi5zdWJqZWN0cyAudGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxOCwgMjE2LCAyMTYpO1xyXG59XHJcblxyXG4uc3ViamVjdHMgLnN1YmplY3Qge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDEwcHggNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uc3ViamVjdDpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3Vic2NyaXB0aW9ucyB7XHJcbiAgLy8gb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_subjects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/subjects.service */ "./src/app/services/subjects.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    SideBarComponent.prototype.ngOnInit = function () {
        this.getMySubjects();
    };
    SideBarComponent.prototype.goToManageSubjects = function () {
        this.router.navigate(['/manage']);
    };
    SideBarComponent.prototype.getMySubjects = function () {
        this.mySubjects = this.service.getSubsciptedSubjects();
    };
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/components/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.scss */ "./src/app/components/side-bar/side-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_subjects_service__WEBPACK_IMPORTED_MODULE_2__["SubjectsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/mock-files/mock_subjects.ts":
/*!*********************************************!*\
  !*** ./src/app/mock-files/mock_subjects.ts ***!
  \*********************************************/
/*! exports provided: mock_subjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mock_subjects", function() { return mock_subjects; });
var mock_subjects = [
    {
        id: 'asdgb324',
        name: 'Analízis 1 informatikusoknak',
        exp: 300,
        subscriptedUsers: []
    },
    {
        id: 'fsdfg6hj',
        name: 'Bevezetés a számításelméletbe 1',
        exp: 250,
        subscriptedUsers: []
    },
    {
        id: 'fsfvbfb',
        name: 'Kódolástechnika',
        exp: 400,
        subscriptedUsers: []
    },
    {
        id: 'gtfh6744g',
        name: 'Algoritmuselmélet',
        exp: 550,
        subscriptedUsers: []
    },
    {
        id: 'rtth45h',
        name: 'Fizika',
        exp: 420,
        subscriptedUsers: []
    }
];


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
    }
    AuthService.prototype.registration = function (userData) {
        return this.http.post(this.baseURL + "/register", userData);
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

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var LoginService = /** @class */ (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseURL;
    }
    LoginService.prototype.login = function (loginData) {
        return this.http.post(this.baseURL + "/login", loginData);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/subjects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/subjects.service.ts ***!
  \**********************************************/
/*! exports provided: SubjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectsService", function() { return SubjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_mock_files_mock_subjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/mock-files/mock_subjects */ "./src/app/mock-files/mock_subjects.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var SubjectsService = /** @class */ (function () {
    function SubjectsService(http) {
        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseURL;
    }
    SubjectsService.prototype.getSubsciptedSubjects = function () {
        return src_app_mock_files_mock_subjects__WEBPACK_IMPORTED_MODULE_2__["mock_subjects"];
    };
    SubjectsService.prototype.getSubjects = function () {
        // return this.http.get<any>(`${this.baseURL}/login`, loginData);
    };
    SubjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SubjectsService);
    return SubjectsService;
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
    baseURL: 'http://localhost:3000'
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

module.exports = __webpack_require__(/*! C:\Users\Márton\UniWare\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map