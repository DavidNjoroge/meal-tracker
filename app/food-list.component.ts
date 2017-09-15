import { Component, Input } from '@angular/core'
import { Food } from './food.model'

@Component({
  selector: 'food-list',
  template: `
<h1>am alive.... </h1>

<div *ngFor="let currentEntry of foods">
  <h3>{{ currentEntry.name }}</h3>
  <button class="btn btn-primary btn-sm" (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
</div>



  `
})

export class FoodListComponent {
  @Input() childEntryList: Food[]



}
