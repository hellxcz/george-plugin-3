//http://webdriver.io/api/utility/waitForExist.html -- docs for browser functions

import { expect } from 'chai';
import { saveScreenshot } from "./helpers";
import Client = WebdriverIO.Client;
import { getId } from '../../sandbox-specific/constants';

const inPromise = <T>(input: Client<T>) => {
  return new Promise(
    (resolve, reject) => {
      input.then(() => resolve())
        .catch(error => reject(error))

    }
  )

};

describe('try plugin', () => {


  describe('happy day', async () => {


    it('should pass', async () => {

      const screenshotNamePrefix = 'happyDay';

      const foodBoxId = getId('FOOD');
      const withdrawalId = getId('WITHDRAWAL');

      browser.url('https://localhost:8080');

      saveScreenshot(screenshotNamePrefix);

      browser.waitForExist('input.enable-plugin');

      saveScreenshot(screenshotNamePrefix);

      browser.element('input.enable-plugin').click();

      saveScreenshot(screenshotNamePrefix);

      browser.element('button.btn.login').click();

      saveScreenshot(screenshotNamePrefix);

      // wait till load
      browser.waitForExist('#pageContainer', 70 * 1000);
      browser.waitForVisible('#accountName', 70 * 1000);

      browser.pause(5000);

      saveScreenshot(screenshotNamePrefix);

      const food = browser.element(`#${foodBoxId}`);
      expect(food.isExisting());

      // navigate to food transaction page
      food.element(".footer-link").click();

      browser.waitForVisible('.transaction-line', 60 * 1000);

      browser.pause(5000);


      saveScreenshot(screenshotNamePrefix);

      // go back

      browser.back();

      const withdrawal = browser.element(`#${withdrawalId}`);

      expect(withdrawal.isExisting());

      // navigate to withdrawal transaction page

      browser.pause(5000);

      saveScreenshot(screenshotNamePrefix);


      withdrawal.element(".footer-link").click();

      browser.waitForExist('.transaction-line', 4 * 1000);

      saveScreenshot(screenshotNamePrefix);


    });

  });

});
