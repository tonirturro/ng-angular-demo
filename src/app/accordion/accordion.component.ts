import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html"
})
export class AccordionComponent implements OnInit {

  public onlyOnePanel: Boolean;

  constructor() { }

  ngOnInit() {
    this.onlyOnePanel = true;
  }

}
