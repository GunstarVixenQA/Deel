exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_textBox = page.getByLabel('Username')
        this.password_textBox = page.getByLabel('Password')
        this.loginButton = page.getByRole('button', { name: 'Submit' })
        this.logoutbutton = page.getByRole('link', { name: 'Log out' })
    }

    async gotoLoginPage() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }

    async login(username, password) {
        await this.username_textBox.fill(username)
        await this.password_textBox.fill(password)
        await this.loginButton.click()
    }

    async logout() {
        await this.logoutbutton.click()
    }

}