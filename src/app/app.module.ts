import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionGroupComponent } from './components/accordion/accordion-group.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent,
    AccordionGroupComponent , AccordionComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
