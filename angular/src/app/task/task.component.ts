import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../classes/task';
import {ToastConnectorService} from '../services/toast-connector/toast-connector.service';
import {StoreService} from '../services/store/store.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent{
  @Input() task: Task;
  @Input() index: Number;

  async deleteTask() {
    if (await confirm(`do you really want to remove the task '${this.task.name}'?`)) {
      this.store.deleteTask(this.index);
    }
  }

  toggled() {
    console.log('Sending toast message');
    this.toastConnector.showMessage(`Task '${this.task.name}' now marked as ${!this.task.done ? 'done' : 'not done'}`);
    this.store.toggleTask(this.index);
  }

  constructor(private toastConnector: ToastConnectorService,
              private store: StoreService) { }
}
