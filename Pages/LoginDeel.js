exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.signUp_button = page.getByRole('button', { name: 'Sign Up' })
        this.roleType = page.getByRole('button', { name: 'I’m A Contractor' })
        this.next_button = page.getByRole('button', { name: 'Next' })
        this.username_textBox = page.getByLabel('First name')
        this.lastname_textBox = page.getByLabel('Last name')
        this.preferredname_textBox = page.getByLabel('Preferred name')
        this.email_textBox = page.getByPlaceholder('example@example.com')
        this.password_textBox = page.getByLabel('Password')
        this.howHear_textBox = page.getByLabel('​', { exact: true })
        this.howHearOption_dropdown = page.getByText('Other')
        this.explain_testbox = page.getByLabel('Explain how you heard about Deel')
        this.createAccount_textbox = page.getByRole('button', { name: 'Create Your Deel Account' })
    }

    async gotoSignUpPage() {
        await this.page.goto('https://www-dev-6k15n4lzx3.giger.training/login');
    }

    async SignUp(firstName, lastName, prefName, email, password, option,reason) {
        await this.signUp_button.click()
        await this.roleType.click()
        await this.next_button.click()
        await this.username_textBox.fill(firstName)
        await this.lastname_textBox.fill(lastName)
        await this.preferredname_textBox.fill(prefName)
        await this.email_textBox.fill(email)
        await this.password_textBox.fill(password)
        await this.howHear_textBox.click()
        await this.howHearOption_dropdown.click(option)
        await this.explain_testbox.fill(reason)
    }

    // async logout() {
    //     await this.logoutbutton.click()
    // }

}