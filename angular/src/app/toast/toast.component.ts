import { Component, OnInit } from '@angular/core';
import {ToastConnectorService} from '../services/toast-connector/toast-connector.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  private message: String = 'Init';
  private visible: Boolean = false;

  constructor(private toastConnector: ToastConnectorService) {
    toastConnector.registerAsToast((msg) => {this.message = msg; }, (bool) => {
      console.log(`toast set to ${bool}`);
      toastConnector.toastVisibilityState = bool;
      this.visible = bool; });
  }

  ngOnInit() {
  }

}
