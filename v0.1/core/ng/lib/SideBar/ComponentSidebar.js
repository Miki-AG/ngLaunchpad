angular.module('ngMApp')
	.directive('nglaunchSidebar', [function() {
	  return {
	  	restrict: "E",
		templateUrl: '/ng/lib/Sidebar/sidebar.tpl.html',
	    controller : 'TopbarSidebarController',
	    scope: {
	      	sidebarActive: "="
	    }
	  }
	}]);