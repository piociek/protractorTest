/**
 * Created by piotrmichalski on 15/03/16.
 */

var Logger = require('../util/logger');

var page = function (){

    // logger attached here will be available to each and every page that uses page as it's base
    var logger = new Logger();
    this.log = logger.log;

    // functions attached to this will be available in all objects that uses page as it's prototype
    this.waitFor = function(locator){
        this.log(' [from page] locator: ' + locator);
        return browser.wait(function(){
            return browser.isElementPresent(locator);
        }, 10000)
    };

    this.click = function(locator){
        return waitFor(locator).then(function(){
            return element(locator).click();
        })
    };

    this.enterText = function(locator, text){
        return this.waitFor(locator).then(function(){
            return element(locator).sendKeys(text);
        })
    };

};

module.exports = page;
