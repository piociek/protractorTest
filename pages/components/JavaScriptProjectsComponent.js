/**
 * Created by piotrmichalski on 15/03/16.
 */

var Page = require('../page');

var projects = function(){
   var projectsSearchInputId = 'projects_search';

    this.isProjectInputVisible = function(){
        return this.waitFor(by.id(projectsSearchInputId));
    }
};

projects.prototype = new Page();

module.exports = projects;