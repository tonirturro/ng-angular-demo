import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

interface IAlert {
  type: string;
  message: string;
}

const ALERTS: IAlert[] = [{
  type: "success",
  message: "This is an success alert",
}, {
  type: "info",
  message: "This is an info alert",
}, {
  type: "warning",
  message: "This is a warning alert",
}, {
  type: "danger",
  message: "This is a danger alert",
}, {
  type: "primary",
  message: "This is a primary alert",
}, {
  type: "secondary",
  message: "This is a secondary alert",
}, {
  type: "light",
  message: "This is a light alert",
}, {
  type: "dark",
  message: "This is a dark alert",
}];

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styles: [`
    :host >>> .alert-custom {
      color: #99004d;
      background-color: #f169b4;
      border-color: #800040;
    }
  `]
})
export class AlertComponent implements OnInit {
  private _success = new Subject<string>();

  public title: String = "Alerts";
  public alerts: IAlert[];
  public staticAlertClosed = false;
  public successMessage: string;

  constructor() {
    this.reset();
  }

  public ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  public close(alert: IAlert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  public reset() {
    this.alerts = Array.from(ALERTS);
  }

  public changeSuccessMessage() {
    this._success.next(`${new Date()} - Message successfully changed.`);
  }
}
