angular.module('ngMApp')
	.directive('nglaunchTopbar', [function() {
	  return {
	  	restrict: "E",
		templateUrl: '/ng/lib/Topbar/topbar.tpl.html',
	    controller : 'TopbarSidebarController',
	    scope: {
	      	sidebarActive: "=",
	      	companyName: "@"
	    }
	  }
	}]);