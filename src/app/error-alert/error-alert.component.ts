import {Component} from "@angular/core";

@Component({
  selector: 'error-alert',
  template:`
        <p class="error">Error alert!</p>
  `,
  styles:[`
    .error {
      padding: 23px;
      background-color: #bb6868;
      border: solid 2px darkred;
    }
  `]
})

export class ErrorAlertComponent{

}
