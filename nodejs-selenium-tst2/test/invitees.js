const {Browser, By, Key, until } = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require("assert");
               require("chromedriver");
               const RsvpPage = require('../pages/rsvp.js')





suite(function(env){
    describe('RSVP site',  function(){
        let driver;
        let page;
        this.timeout(20000);
        
        //Setup
        before(async function (){
            driver = await env.builder().build();
            page = new RsvpPage(driver);
            await page.open();
        })
        
        it('Has invitee list', async function(){
           let elements = await driver.findElements(page.locators.invitedList);
           assert(elements.length > 0);
           
        })

        it('Has a registration list', async function(){
            let elements = await driver.findElements(page.locators.registrationForm);
            assert(elements.length > 0);
            
         })

         it('Loads existing invitations', async function (){
            //implicit waite
            //await driver.manage().setTimeouts({implicit: 3000}); 
            let invitees = await driver.findElements(page.locators.invitees);
            let text = await invitees[1].getText();
            assert(text.includes("Craig Dennis"));
         })
        //Tear down
        after(async function(){
            driver.quit();
        })
    })
});