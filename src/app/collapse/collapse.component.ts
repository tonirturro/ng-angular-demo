import { Component } from "@angular/core";

@Component({
  selector: "app-collapse",
  templateUrl: "./collapse.component.html"
})
export class CollapseComponent {
  public title: String = "Collapse";
  public isCollapsed = false;
}
