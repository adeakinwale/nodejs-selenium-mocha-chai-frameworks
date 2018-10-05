const {Browser, By, Key, until } = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require("assert");
               require("chromedriver");

const url = "https://treehouse-projects.github.io/selenium-webdriver-intermediate/waits/app/index.html";

suite(function(env){
    describe('RSVP site', function(){
        it('have invitee list', function(){
            env.builder().build()
               .then(driver => {
                   driver.get(url)
                   .then(() => driver.findElements(By.id('invitedList')))
                   .then(elements => assert(elements.lemgth > 0 ))
                   .then(() => driver.quit());
               })
        })
    })
});