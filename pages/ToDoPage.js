/**
 * Created by piotrmichalski on 15/03/16.
 */

var Page = require('./page');
var JavaScriptProjectsComponent = require('./components/JavaScriptProjectsComponent');

var todo = function(){
    var todoInput = '//input[@placeholder=\'add new todo here\']';

    var javaScriptProjectsComponent = new JavaScriptProjectsComponent();

    this.openPage = function(){
        return browser.get('http://angularjs.org')
    };

    this.isInputDisplayed = function(){
        this.log(' [from todoPage] locator: ' + todoInput);
        return this.waitFor(by.xpath(todoInput));
    };

    // this way we can expose components from parent page object (where imho they belong);

    this.isProjectInputVisible = javaScriptProjectsComponent.isProjectInputVisible;

};

// we inherited all functionalities attached to this in page object and can now use them inside toDoPage
todo.prototype = new Page();

module.exports = todo;