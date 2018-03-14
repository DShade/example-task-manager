import { Component } from '@angular/core';
import {Task} from './classes/task';
import {StoreService} from './services/store/store.service';
import {ToastConnectorService} from './services/toast-connector/toast-connector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList = Array<Task>();

  async addTask() {
    const name = await prompt('Please enter the taskname');
    if (name) {
      this.store.addTask(new Task(name));
      this.toastConnector.showMessage(`New task '${name}' created!`);
    }
  }


  constructor(private store: StoreService,
              private toastConnector: ToastConnectorService) {
    store.getList().subscribe(next => {
      this.todoList = next;
    });
  }
}
