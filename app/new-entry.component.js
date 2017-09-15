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
var NewEntryComponent = (function () {
    function NewEntryComponent() {
        this.newTaskSender = new core_1.EventEmitter();
    }
    NewEntryComponent.prototype.doneClicked = function (name, details, cal) {
        var newEntry = new food_model_1.Food(name, details, cal);
        this.newTaskSender.emit(newEntry);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewEntryComponent.prototype, "newTaskSender", void 0);
    NewEntryComponent = __decorate([
        core_1.Component({
            selector: 'new-entry',
            template: "\n<div class='form-group h3'>\n<label class=\"form-control-label\" for=\"formGroupExampleInput\" >Name</label>\n  <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"food\" #newName>\n\n  <label class=\"form-control-label\" for=\"formGroupExampleInput\" >Details</label>\n    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"details\" #newDetail>\n\n    <label class=\"form-control-label\" for=\"formGroupExampleInput\" >Calories</label>\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"\" #newCal>\n<button class=\"btn\" (click)='doneClicked(newName.value,newDetail.value,newCal.value)'>done</button>\n</div>\n\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewEntryComponent);
    return NewEntryComponent;
}());
exports.NewEntryComponent = NewEntryComponent;
//# sourceMappingURL=new-entry.component.js.map