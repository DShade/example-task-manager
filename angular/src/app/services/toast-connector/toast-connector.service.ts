import {Injectable} from '@angular/core';

@Injectable()
export class ToastConnectorService {
  private toastMessageHook: (x: String) => {};
  private toastVisibleHook: (x: Boolean) => {};
  toastVisibilityState: Boolean;
  private interval: any;

  showMessage(message: String) {
    this.toastMessageHook(message);

    if (!this.toastVisibilityState) {

      this.interval = setInterval(() => {
        this.toastVisibleHook(false);
        clearInterval(this.interval);
      }, 2000);

    }
    this.toastVisibleHook(true);
    console.log('toast set');
  }

  public registerAsToast(messageLink, visibilityLink) {
    this.toastMessageHook = messageLink;
    this.toastVisibleHook = visibilityLink;
    console.log('registered as toast');
  }

  constructor() {
  }

}
