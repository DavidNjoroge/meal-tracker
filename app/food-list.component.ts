import { Component, Input } from '@angular/core'
import { Food } from './food.model'

@Component({
  selector: 'food-list',
  template: `

<div class="h3" *ngFor="let currentEntry of childEntryList">
  <div>{{ currentEntry.name }} {{ currentEntry.details }}{{ currentEntry.calories }}<button class="btn btn-primary btn-sm" (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
  </div>
</div>



  `
})

export class FoodListComponent {
  @Input() childEntryList: Food[]




}
