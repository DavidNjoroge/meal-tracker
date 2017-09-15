import { Component } from '@angular/core'

@Component({
  selector: 'navi',
  template: `
  <div>
    <h3 class="nav"><button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentTask)">new entry</button></h3>
    <h3 class="nav"><button class="btn">Entry List</button></h3>

  </div>

  `

})
export class NavComponent {

}
