const path = require('path');
const puppeteer = require('puppeteer');

require('dotenv').config({path: path.join(__dirname, 'sample.env')});

(async () => {
  const browser = await puppeteer.launch({
    headless: true
  });
  // const page = await browser.newPage();
  // Write this

  await browser.close();
})()
