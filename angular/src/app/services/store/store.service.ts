import {Injectable} from '@angular/core';
import {Task} from '../../classes/task';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class StoreService {


  private taskList: Array<Task>;
  private observable: BehaviorSubject<Array<Task>>;

  constructor() {
    const loaded = localStorage.getItem('angular-todo-tasks');
    if (loaded) {
      this.taskList = JSON.parse(loaded);
    } else {
      this.taskList = [];
    }
    this.observable = new BehaviorSubject<Array<Task>>(this.taskList);
  }

  static persist(object) {
    localStorage.setItem('angular-todo-tasks', JSON.stringify(object));
  }

  /**
   * @returns {BehaviorSubject<Array<Task>>}
   */
  getList() {
    return this.observable;
  }

  addTask(task) {
    this.taskList.push(task);
    this.observable.next(this.taskList);
    StoreService.persist(this.taskList);
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
    this.observable.next(this.taskList);
    StoreService.persist(this.taskList);
  }

  toggleTask(index) {
    this.taskList[index].done = !this.taskList[index].done;
    this.observable.next(this.taskList);
    StoreService.persist(this.taskList);
  }


}
