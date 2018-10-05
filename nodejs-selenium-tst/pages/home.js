const By = require('selenium-webdriver').By;
class HomePage {
    constructor(driver){
        this.driver = driver;
        this.locators = {
            productSearch: By.css('#searchbox #search_query_top'),
            productSearchButton: By.css('#searchbox button')
        }
    }
    open (){
        const URL = 'http://automationpractice.com/index.php';
        this.driver.get(URL)
    }

    findProduct (name) {
        if(
            this.driver.findElement(this.locators.productSearch).sendKeys(name),
            this.driver.findElement(this.locators.productSearchButton).submit()
        ) {
            console.log('Elements found!')
        }
        
    }
}
module.exports = HomePage;