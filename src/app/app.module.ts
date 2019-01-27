import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BasicComponent } from "./basic/basic.component";
import { AccordionComponent } from "./accordion/accordion.component";

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
