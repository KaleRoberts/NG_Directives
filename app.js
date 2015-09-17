(function(){
	"use strict";
	;(function(window) {
		angular.module('app', [])
		.directive('tab', function() {
			return {
				restrict: 'E',
				transclue: true,
				template: '<h2>Hello World!</h2> <div role="tabpanel" ng-transclue></div>',
				scope: { },
				link: function(scope, elem, attr) {}
			}
		})
		// Define directives here
	}) (window);
}());