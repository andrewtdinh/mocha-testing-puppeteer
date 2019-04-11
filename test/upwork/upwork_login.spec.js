require('dotenv').config();
const { expect } = require('chai');

describe('Tests for Upwork Login functionalities', async () => {
  let page;

  before(async () => { /* before hook for mocha testing */
    page = await browser.newPage();
    await page.goto("https://www.upwork.com/");
    await page.setViewport({ width: 1920, height: 1040 });
  });

  after(async function () { /* after hook for mocha testing */
    await page.close();
  });

  it('should login to home page', async () => { /* simple test case */
    const emailInput = "#login-email";
    const passwordInput = "#login-password";
    const submitSelector = "#login-submit";

    linkEmail = await page.$(emailInput);
    linkPassword = await page.$(passwordInput);
    linkSubmit = await page.$(submitSelector);

    await linkEmail.click({ clickCount: 3 });
    await linkEmail.type(process.env.LINKEDIN_USER); // add the email address for linkedin //

    await linkPassword.click({ clickCount: 3 });
    await linkPassword.type(process.env.LINKEDIN_PASSWORD); // add password for linkedin account

    await linkSubmit.click();
    await page.waitFor(3000);
  });
});