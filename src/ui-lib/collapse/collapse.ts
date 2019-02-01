import {Directive, Input} from "@angular/core";

/**
 * The NgbCollapse directive provides a simple way to hide and show an element with animations.
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[ngbCollapse]",
  exportAs: "ngbCollapse",
  // tslint:disable-next-line:use-host-property-decorator
  host: {"[class.collapse]": "true", "[class.show]": "!collapsed"}
})
// tslint:disable-next-line:directive-class-suffix
export class NgbCollapse {
  /**
   * A flag indicating collapsed (true) or open (false) state.
   */
  @Input("ngbCollapse") collapsed = false;
}
