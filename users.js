class Users {
  constructor(obj) {
    this.email = obj.email;
    this.password = obj.password;
    this.displayName = obj.displayName;
    this.height = obj.height;
    this.weight = obj.weight;
    this.gender = obj.gender;
    this.image = obj.image;
  }
  get showEmail() {
    return this.email;
  }
  get showDisplay() {
    return this.displayName;
  }
  get showImage() {
    return this.image;
  }
}

class UserLogin extends Users {
  constructor(obj) {
    super({
      email: obj.email,
      password: obj.password,
      image: obj.email,
    });
    this.isLogin = 0;
    this.showTextResponse = "";
  }
  get checkLogin() {
    if (this.email === "user1@gmail.com" && this.password === "123456") {
      this.isLogin = 1;
    } else {
      this.isLogin = 0;
    }
    return this.isLogin;
  }
  get showLoginResponse() {
    if (!this.checkLogin) {
      return "Email or password incorrect";
    } else {
      return `Welcome ${this.showEmail}`;
    }
  }
}

const iMember = new UserLogin({
  email: "user1@gmail.com",
  password: "123456",
  image: "image.png",
});
console.log(iMember.showLoginResponse);
