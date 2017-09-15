import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './nav.component'
import { NewEntryComponent } from './new-entry.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, NavComponent, NewEntryComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
