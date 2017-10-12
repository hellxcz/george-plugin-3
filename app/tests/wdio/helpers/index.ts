let screenshotsCounter = 0;

export const saveScreenshot = (name?:string) => {

  screenshotsCounter++;

  if (name === undefined){

    name = `${screenshotsCounter}.png`;

  } else {

    name = `${name}_${screenshotsCounter}.png`

  }

  browser.saveScreenshot('./app/tests/wdio/_screenshots/' + name);

};

