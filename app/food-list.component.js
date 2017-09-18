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
var FoodListComponent = (function () {
    function FoodListComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FoodListComponent.prototype, "childEntryList", void 0);
    FoodListComponent = __decorate([
        core_1.Component({
            selector: 'food-list',
            template: "\n\n<div class=\"h3\" *ngFor=\"let currentEntry of childEntryList\">\n  <div>{{ currentEntry.name }} {{ currentEntry.details }}{{ currentEntry.calories }}<button class=\"btn btn-primary btn-sm\" (click)=\"editButtonHasBeenClicked(currentTask)\">Edit</button>\n  </div>\n</div>\n\n\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FoodListComponent);
    return FoodListComponent;
}());
exports.FoodListComponent = FoodListComponent;
//# sourceMappingURL=food-list.component.js.map