exports.LoginPage = class LoginPage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.loginLink = page.locator('.ico-login');
    this.emailId = page.locator('#Email');
    this.password = page.locator('#Password');
    this.loginBtn = page.locator('.button-1.login-button');
  }

  async login(username, passwod) {
    this.loginLink.click();
    await this.emailId.fill(username);
    await this.password.fill(passwod);
    await this.loginBtn.click()
  }

}
