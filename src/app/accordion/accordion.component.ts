import { Component } from "@angular/core";
import { NgbPanelChangeEvent } from "src/ui-lib";


@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html"
})
export class AccordionComponent  {

  public title: String = "Accordion";
  public onlyOnePanel: Boolean = true;

  public beforeChange($event: NgbPanelChangeEvent) {

    if ($event.panelId === "preventchange-2") {
      $event.preventDefault();
    }

    if ($event.panelId === "preventchange-3" && $event.nextState === false) {
      $event.preventDefault();
    }
  }
}
