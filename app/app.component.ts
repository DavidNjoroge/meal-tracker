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

        <div class="col-md-4"><navi></navi></div>
        <div class="col-md-8"><new-entry(newTaskSender)="addEntry($event)"></new-entry></div>
      </div>



    </div>

  </div>
  `
})

export class AppComponent {
  public foodList: Food[] = []
  addEntry(newEntry: Food) {
    this.foodList.push(newEntry)
  }

}
