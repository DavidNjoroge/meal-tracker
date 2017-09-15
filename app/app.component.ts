import { Component } from '@angular/core';
import { Food } from './food.model'
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>meal tracker</h1>
    </div>
    <div class ="container">
      <div class="row">

        <div class="col-md-4">
        <navi></navi>
        <new-entry
        (newTaskSender)="addEntry($event)"
        ></new-entry>
        </div>
        <div class="col-md-8">

<food-list
[childEntryList]="foods"
></food-list>
        </div>
      </div>



    </div>

  </div>
  `
})

export class AppComponent {
  public foods: Food[] = [
    new Food("Ugali", "Create To-Do List app.", 10),
    new Food("chapo", "Create To-Do List app.", 20),
    new Food("fried chicken", "Create To-Do List app.", 40),
    new Food("salad", "Create To-Do List app.", 0),
    new Food("fries", "Create To-Do List app.", 0),
    new Food("salad", "Create To-Do List app.", 0),
    new Food("ugali", "Create To-Do List app.", 0),

  ]

}
