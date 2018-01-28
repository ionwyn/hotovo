import uuid from 'uuid';

export default class TodoModel {

  constructor(title, completed) {
    this.id = uuid.v1();
    this.title = title;
    this.completed = completed || false;
    this.createdAt = new Date();
    this.updatedAt = new Date();

  }
}
