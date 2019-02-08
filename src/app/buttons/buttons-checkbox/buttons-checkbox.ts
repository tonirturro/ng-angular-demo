import {Component} from "@angular/core";

@Component({
  selector: "app-buttons-checkbox",
  templateUrl: "./buttons-checkbox.html"
})
export class ButtonsCheckboxComponent {
  model = {
    left: true,
    middle: false,
    right: false
  };
}
