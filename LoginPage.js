class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByTestId("email");
    this.passwordInput = page.getByTestId("password");
    this.loginButton = page.getByTestId("login-submit");
    this.signInLink = page.getByTestId("nav-sign-in");
  }

  async goto() {
    await this.page.goto("/auth/login");
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async clickLogin() {
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };
