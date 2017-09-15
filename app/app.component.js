"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var food_model_1 = require('./food.model');
var AppComponent = (function () {
    function AppComponent() {
        this.foods = [
            new food_model_1.Food("Ugali", "Create To-Do List app.", 10),
            new food_model_1.Food("chapo", "Create To-Do List app.", 20),
            new food_model_1.Food("fried chicken", "Create To-Do List app.", 40),
            new food_model_1.Food("salad", "Create To-Do List app.", 0),
            new food_model_1.Food("fries", "Create To-Do List app.", 0),
            new food_model_1.Food("salad", "Create To-Do List app.", 0),
            new food_model_1.Food("ugali", "Create To-Do List app.", 0),
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>meal tracker</h1>\n    </div>\n    <div class =\"container\">\n      <div class=\"row\">\n\n        <div class=\"col-md-4\"><navi></navi></div>\n        <div class=\"col-md-8\">\n        <new-entry\n        (newTaskSender)=\"addEntry($event)\"\n        ></new-entry>\n        </div>\n      </div>\n\n\n\n    </div>\n\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map