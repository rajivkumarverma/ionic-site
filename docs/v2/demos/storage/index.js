var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic/ionic');
var testUrl = 'https://ionic-api-tester.herokuapp.com/json';
var testUrl404 = 'https://ionic-api-tester.herokuapp.com/404';
var IonicApp = (function () {
    function IonicApp() {
        this.local = new ionic_1.Storage(ionic_1.LocalStorage);
        this.sql = new ionic_1.Storage(ionic_1.SqlStorage);
    }
    IonicApp.prototype.getLocal = function () {
        this.local.get('name').then(function (value) {
            alert('Your name is: ' + value);
        });
    };
    IonicApp.prototype.setLocal = function () {
        var name = prompt('Your name?');
        this.local.set('name', name);
    };
    IonicApp.prototype.removeLocal = function () {
        this.local.remove('name');
    };
    IonicApp.prototype.getSql = function () {
        this.sql.get('name').then(function (value) {
            alert('Your name is: ' + value);
        }, function (errResult) {
            console.error('Unable to get item from SQL db:', errResult);
        });
    };
    IonicApp.prototype.setSql = function () {
        var name = prompt('Your name?');
        this.sql.set('name', name);
    };
    IonicApp.prototype.removeSql = function () {
        this.sql.remove('name');
    };
    IonicApp = __decorate([
        ionic_1.App({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [])
    ], IonicApp);
    return IonicApp;
})();