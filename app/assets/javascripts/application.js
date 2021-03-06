// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require angular
//= require angular-bootstrap
//= require angular-resource
//= require angularjs/rails/resource
//= require angular-ui
//= require angular-ui-bootstrap

//= require bootstrap
//= require turbolinks
//= require_tree .

//var loadingBox = new LoadingBox("#loading")

var FindMyDoctorApp = angular.module("FindMyDoctorApp",["ngResource","ui.bootstrap"]);

FindMyDoctorApp.factory('State', function($resource) {
    return $resource('/api/states/:id', { id: '@id'}, { update: { method: 'PUT' } });
});

FindMyDoctorApp.config([
  "$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);


function initialize (){
	var loadingBox = new LoadingBox("#loading");
	$(document).on("page:fetch", loadingBox.show());
	$(document).on("page:change", loadingBox.hide());
}

$(document).ready(initialize);
$(document).on("page:load",initialize);
//$(document).on("page:change", function(){ 
 //  alert('fetching!!');
 //  $("#loading").hide();
//});
