import { Component, Output, EventEmitter } from '@angular/core'
import { Food } from './food.model'
@Component({
  selector: 'new-entry',
  template: `
<div class='form-group'>
<label class="form-control-label" for="formGroupExampleInput" >Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="food" #newName>

  <label class="form-control-label" for="formGroupExampleInput" >Details</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="details" #newDetail>

    <label class="form-control-label" for="formGroupExampleInput" >Calories</label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" #newCal>
<button class="btn" (click)='doneClicked(newName.value,newDetail.value,newCal.value)'>done</button
</div>


  `
})

export class NewEntryComponent {
  @Output() newTaskSender = new EventEmitter()
  doneClicked(name: string, details: string, cal: number) {
    var newEntry: Food = new Food(name, details, cal)
    this.newTaskSender.emit(newEntry)
  }

}
