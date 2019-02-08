import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ButtonsComponent } from "./buttons.component";
import { ButtonsCheckboxComponent } from "./buttons-checkbox/buttons-checkbox";
import { ButtonsCheckboxReactiveComponent } from "./buttons-checkboxreactive/buttons-checkboxreactive";
import { ButtonsRadioComponent } from "./radio/buttons-radio";
import { ButtonsRadioReactiveComponent } from "./radioreactive/buttons-radioreactive";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

xdescribe("ButtonsComponent", () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        ButtonsComponent,
        ButtonsCheckboxComponent,
        ButtonsCheckboxReactiveComponent,
        ButtonsRadioComponent,
        ButtonsRadioReactiveComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
