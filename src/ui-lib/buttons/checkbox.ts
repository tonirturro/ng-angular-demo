import {Directive, forwardRef, Input} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

import {NgbButtonLabel} from "./label";

const NGB_CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgbCheckBox),
  multi: true
};


/**
 * Easily create Bootstrap-style checkbox buttons. A value of a checked button is bound to a variable
 * specified via ngModel.
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[ngbButton][type=checkbox]",
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    "autocomplete": "off",
    "[checked]": "checked",
    "[disabled]": "disabled",
    "(change)": "onInputChange($event)",
    "(focus)": "focused = true",
    "(blur)": "focused = false"
  },
  providers: [NGB_CHECKBOX_VALUE_ACCESSOR]
})
// tslint:disable-next-line:directive-class-suffix
export class NgbCheckBox implements ControlValueAccessor {
  checked;

  /**
   * A flag indicating if a given checkbox button is disabled.
   */
  @Input() disabled = false;

  /**
   * Value to be propagated as model when the checkbox is checked.
   */
  @Input() valueChecked = true;

  /**
   * Value to be propagated as model when the checkbox is unchecked.
   */
  @Input() valueUnChecked = false;

  onChange = (_: any) => {};
  onTouched = () => {};

  set focused(isFocused: boolean) {
    this._label.focused = isFocused;
    if (!isFocused) {
      this.onTouched();
    }
  }

  constructor(private _label: NgbButtonLabel) {}

  onInputChange($event) {
    const modelToPropagate = $event.target.checked ? this.valueChecked : this.valueUnChecked;
    this.onChange(modelToPropagate);
    this.onTouched();
    this.writeValue(modelToPropagate);
  }

  registerOnChange(fn: (value: any) => any): void { this.onChange = fn; }

  registerOnTouched(fn: () => any): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this._label.disabled = isDisabled;
  }

  writeValue(value) {
    this.checked = value === this.valueChecked;
    this._label.active = this.checked;
  }
}
