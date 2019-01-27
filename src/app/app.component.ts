import { Component } from "@angular/core";
import { routes } from "./app-routing.module";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public title: String = "ng-bootstrap demo";
  public get routes() {
    const routesNoDefault = routes.slice(1);
    return routesNoDefault.map((route) => route.path);
  }
}
