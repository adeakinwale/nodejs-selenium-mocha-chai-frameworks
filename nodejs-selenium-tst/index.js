const selenium = require('selenium-webdriver');
                 require('chromedriver');
const HomePage = require('./pages/home')
const driver = new selenium.Builder().forBrowser('chrome').build();
const homePage = new HomePage(driver)

//Tests
homePage.open();
homePage.findProduct('jeans');
