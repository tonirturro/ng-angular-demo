import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BasicComponent } from "./basic/basic.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { AlertComponent } from "./alert/alert.component";
import { ButtonsComponent } from "./buttons/buttons.component";

export const routes: Routes = [
  { path: "", redirectTo: "basic", pathMatch: "full" },
  { path: "basic", component: BasicComponent },
  { path: "accordion", component: AccordionComponent },
  { path: "alert", component: AlertComponent },
  { path: "button", component: ButtonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
