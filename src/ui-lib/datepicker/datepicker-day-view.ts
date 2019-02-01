import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";
import {NgbDate} from "./ngb-date";
import {NgbDatepickerI18n} from "./datepicker-i18n";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "[ngbDatepickerDayView]",
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./datepicker-day-view.scss"],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    "class": "btn-light",
    "[class.bg-primary]": "selected",
    "[class.text-white]": "selected",
    "[class.text-muted]": "isMuted()",
    "[class.outside]": "isMuted()",
    "[class.active]": "focused"
  },
  template: `{{ i18n.getDayNumerals(date) }}`
})
// tslint:disable-next-line:component-class-suffix
export class NgbDatepickerDayView {
  @Input() currentMonth: number;
  @Input() date: NgbDate;
  @Input() disabled: boolean;
  @Input() focused: boolean;
  @Input() selected: boolean;

  constructor(public i18n: NgbDatepickerI18n) {}

  isMuted() { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); }
}
