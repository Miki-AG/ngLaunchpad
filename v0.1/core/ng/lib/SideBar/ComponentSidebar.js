angular.module('ngMApp')
	.directive('nglaunchSidebar', [function() {
	  return {
	  	restrict: "E",
		templateUrl: '/build/ng/lib/Sidebar/sidebar.tpl.html',
	    controller : 'TopbarSidebarController',
	    scope: {
	      	sidebarActive: "="
	    }
	  }
	}]);