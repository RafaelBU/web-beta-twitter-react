export default class User {
  constructor({ id = "", name = "", surname = "", messages = [] }) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.messages = messages;
  }
}
