angular.module('ngMApp')
	.directive('nglaunchTopbar', [function() {
	  return {
	  	restrict: "E",
		templateUrl: '/build/ng/lib/Topbar/topbar.tpl.html',
	    controller : 'TopbarSidebarController',
	    scope: {
	      	sidebarActive: "=",
	      	companyName: "@"
	    }
	  }
	}]);