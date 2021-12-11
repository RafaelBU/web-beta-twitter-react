export default class User {
  id;

  name;

  surname;

  userGender;

  email;

  messages;

  followers;

  constructor({
    id = "",
    name = "",
    surname = "",
    userGender = "",
    email = "",
    messages = [],
    followers = [],
  }) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.userGender = userGender;
    this.email = email;
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
