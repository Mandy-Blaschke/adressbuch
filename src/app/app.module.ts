import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditingComponent } from './editing/editing.component';
import { NewComponent } from './new/new.component';
import { PersonViewComponent } from './person-view/person-view.component';
import {FormsModule} from '@angular/forms';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    EditingComponent,
    NewComponent,
    PersonViewComponent,
    ButtonComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
