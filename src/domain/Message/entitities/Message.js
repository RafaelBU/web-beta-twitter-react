export default class Message {
  constructor({ id = "", author = "", date = new Date(), content = "" }) {
    this.id = id;
    this.author = author;
    this.date = date;
    this.content = content;
  }
}
