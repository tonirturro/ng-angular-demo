import {Component, Input} from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngb-modal-backdrop",
  template: "",
  // tslint:disable-next-line:use-host-property-decorator
  host:
      {"[class]": "\"modal-backdrop fade show\" + (backdropClass ? \" \" + backdropClass : \"\")", "style": "z-index: 1050"}
})
// tslint:disable-next-line:component-class-suffix
export class NgbModalBackdrop {
  @Input() backdropClass: string;
}
