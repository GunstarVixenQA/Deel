import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginDeel';


test('test', async ({ page }) => {

    const Login = new LoginPage(page)

    await Login.gotoSignUpPage()
    await Login.SignUp('louise', 'strong', 'lou', 'louiseannestrong+2@gmail.com', 'Password123!', 'Other', 'from a friend')
    await expect(page.getByRole('button', { name: 'Create Your Deel Account' })).toBeEnabled(true);

});



