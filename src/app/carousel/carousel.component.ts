import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "src/ui-lib";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html"
})
export class CarouselComponent  {
  public readonly title: String = "Carousel";
  public readonly showNavigationArrows = false;
  public readonly showNavigationIndicators = false;
  public readonly images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;
  }
}
