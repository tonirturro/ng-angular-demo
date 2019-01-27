import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BasicComponent } from "./basic/basic.component";
import { AccordionComponent } from "./accordion/accordion.component";

export const routes: Routes = [
  { path: "", redirectTo: "basic", pathMatch: "full" },
  { path: "basic", component: BasicComponent },
  { path: "accordion", component: AccordionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
