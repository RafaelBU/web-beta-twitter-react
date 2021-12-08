export default class Message {
  id;

  author;

  authorEmail;

  date;

  content;

  constructor({
    id = "",
    author = "",
    authorEmail = "",
    date = new Date(),
    content = "",
  }) {
    this.id = id;
    this.author = author;
    this.authorEmail = authorEmail;
    this.date = date;
    this.content = content;
  }
}
