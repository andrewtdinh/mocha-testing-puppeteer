require('dotenv').config();
const { expect } = require('chai');

describe('Tests for Upwork Login functionalities', async () => {
  let page;

  before(async () => { /* before hook for mocha testing */
    page = await browser.newPage();
    await page.goto("https://www.upwork.com/ab/account-security/login");
    await page.setViewport({ width: 1920, height: 1040 });
  });

  after(async function () { /* after hook for mocha testing */
    await page.close();
  });

  it('should login to home page', async () => { /* simple test case */
    const userInput = "#login_username";
    const passwordInput = "#login_password";
    const submitSelector = "#login-submit";

    usernameInput = await page.$(userInput);
    await usernameInput.click({ clickCount: 3 });
    await usernameInput.type(process.env.UPWORK_USER);   // add the user name for Upwork

    linkPassword = await page.$(passwordInput);
    await linkPassword.click({ clickCount: 3 });
    await linkPassword.type(process.env.LINKEDIN_PASSWORD); // add password for linkedin account
    
    
    
    // linkSubmit = await page.$(submitSelector);
    // await linkSubmit.click();
    // await page.waitFor(3000);
  });
});