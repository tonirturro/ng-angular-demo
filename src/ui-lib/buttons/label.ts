import {Directive} from "@angular/core";

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[ngbButtonLabel]",
  // tslint:disable-next-line:use-host-property-decorator
  host:
      {"[class.btn]": "true", "[class.active]": "active", "[class.disabled]": "disabled", "[class.focus]": "focused"}
})
// tslint:disable-next-line:directive-class-suffix
export class NgbButtonLabel {
  active: boolean;
  disabled: boolean;
  focused: boolean;
}
