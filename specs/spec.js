/**
 * Created by piotrmichalski on 15/03/16.
 */

var ToDoPage = require('../pages/ToDoPage');

describe('Test suite', function(){
    beforeEach(function() {
        toDoPage = new ToDoPage();
        toDoPage.openPage();
    })

    it('should display input in todo app', function(){
        expect(toDoPage.isInputDisplayed()).toEqual(true);
    })

    it('should display java projects input', function(){
        // in spec component is accessed from 'parent' page object
        expect(toDoPage.isProjectInputVisible()).toEqual(true);
    })
})