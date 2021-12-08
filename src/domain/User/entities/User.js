export default class User {
  id;

  name;

  surname;

  messages;

  followers;

  constructor({
    id = "",
    name = "",
    surname = "",
    messages = [],
    followers = [],
  }) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.messages = messages;
    this.followers = followers;
  }

  addMessage(newMessage) {
    this.messages = [...this.messages, newMessage];
  }

  addFollower(newFollower) {
    this.followers = [...this.followers, newFollower];
  }

  removeFollower(followerToRemove) {
    this.followers = this.followers.filter(
      ({ id }) => id !== followerToRemove.id
    );
  }
}
