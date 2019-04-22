require('dotenv').config();
const { expect } = require('chai');

describe('Tests for Upwork Login functionalities', async () => {
  let page;

  before(async () => { /* before hook for mocha testing */
    page = await browser.newPage();
    await page.goto("https://www.upwork.com/ab/account-security/login");
    await page.setViewport({ width: 1920, height: 1040 });
    page.on('error', async () => {
    })
  });
  
  after(async function () { /* after hook for mocha testing */
    await page.close();
  });
  
  it('should login to home page', async () => { /* simple test case */
    const userInput = '#login_username';
    const continueBtn = 'button[type="submit"]'
    const passwordInput = '#login_password';
    const submitSelector = '#login-submit';
    
    usernameInput = await page.$(userInput);
    // await usernameInput.click({ clickCount: 3 });
    await page.focus(usernameInput);
    await usernameInput.type(process.env.UPWORK_USER);   // add the user name for Upwork account
    const form = await page.$('.form-group');
    await form.evaluate(form => form.submit());
    page = await browser.newPage();
    // await page.press('Enter')
    // continueButton = await page.$(continueBtn);
    // await continueButton.click();
    await page.screenshot({ path: './test.png' });

    pwInputField = await page.$(passwordInput);
    await pwInputField.click({ clickCount: 3 });
    await pwInputField.type(process.env.UPWORK_PASSWORD); // add password for Upwork account
    
    
    
    // linkSubmit = await page.$(submitSelector);
    // await linkSubmit.click();
    // await page.waitFor(3000);
  });
});