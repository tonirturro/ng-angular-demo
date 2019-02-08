import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BasicComponent } from "./basic/basic.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { AlertComponent } from "./alert/alert.component";
import { NgbModule } from "src/ui-lib";
import { ButtonsComponent } from "./buttons/buttons.component";
import { ButtonsCheckboxComponent } from "./buttons/buttons-checkbox/buttons-checkbox";
import { ButtonsCheckboxReactiveComponent } from "./buttons/buttons-checkboxreactive/buttons-checkboxreactive";
import { ButtonsRadioComponent } from "./buttons/radio/buttons-radio";
import { ButtonsRadioReactiveComponent } from "./buttons/radioreactive/buttons-radioreactive";

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    AccordionComponent,
    AlertComponent,
    ButtonsComponent,
    ButtonsCheckboxComponent,
    ButtonsCheckboxReactiveComponent,
    ButtonsRadioComponent,
    ButtonsRadioReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
