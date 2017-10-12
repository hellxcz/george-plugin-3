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


      browser.url('https://localhost:8080');

      browser.pause(5000);

      saveScreenshot(screenshotNamePrefix);

      browser.waitForExist('input.enable-plugin');
      browser.waitForExist('button.btn.login-user-pass');

      // saveScreenshot(screenshotNamePrefix);
      //
      // browser.element('input.enable-plugin').click();

      browser.element('input.disposer-input').setValue('304844216');

      saveScreenshot(screenshotNamePrefix);

      browser.element('button.btn.login-user-pass').click();

      saveScreenshot(screenshotNamePrefix);

      // wait till load
      browser.waitForExist('#pageContainer', 70 * 1000);
      browser.waitForExist('#accountName', 70 * 1000);

      browser.pause(5000);

      saveScreenshot(screenshotNamePrefix);


      // navigates to account transactions
      browser.element('#accountName').click();

      saveScreenshot(screenshotNamePrefix);

      browser.waitForExist('.clickOnMe');

      saveScreenshot();

      // show modal
      browser.element('.clickOnMe').click();

      saveScreenshot(screenshotNamePrefix);

      // wait for modal
      browser.waitForExist('.modal-dialog');

      browser.pause(500);

      saveScreenshot(screenshotNamePrefix);


    });

  });

});
