export class Task {
  name: String;
  done: Boolean;

  constructor(name:  String, done = false) {
    this.name = name;
    this.done = done;
  }
}
