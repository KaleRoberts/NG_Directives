(function(){
	"use strict";
	;(function(window) {
		angular.module('app', [])
		.directive('tab', function() {
			return {
				restrict: 'E',
				transclude: true,
				template: '<div role="tabpanel" ng-show="active" ng-transclude></div>',
				require: '^tabset',
				scope: {
					heading: '@'		// The @ symbol is a special Angular symbol denoting that this scope property in this directive should be a string.
				},
				link: function(scope, elem, attr, tabsetCtrl) {
					scope.active = false;
					tabsetCtrl.addTab(scope);
				}
			}
		})
		.directive('tabset', function() {
			return {
				restrict: 'E',
				transclude: true,
				scope: { },
				templateUrl: 'tabset.html',
				bindToController: true,
				controllerAs: 'tabset',
				controller: function() {
					var self = this;
					self.tabs = [];
					self.addTab = function addTab(tab) {	// This allows us to link the two directives
						self.tabs.push(tab);				// Any property bound to scope in the tab directive will also be accessible by the tabset controller

						if(self.tabs.length === 1) {		// Causes the first tab that is registered to become the active tab
							tab.active = true;
						};
					}
					self.select = function(selectedTab) {
						angular.forEach(self.tabs, function(tab) {
							if(tab.active && tab !== selectedTab) {
								tab.active = false;
							}
						})

						selectedTab.active = true;
					}
				}
			}
		})
		// Define directives here
	}) (window);
}());