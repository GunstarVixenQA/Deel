import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/Login';

test('can login', async ({ page }) => {

 const Login = new LoginPage(page)

 await Login.gotoLoginPage()
 await Login.login('student', 'Password123')
 await Login.logout


 
});