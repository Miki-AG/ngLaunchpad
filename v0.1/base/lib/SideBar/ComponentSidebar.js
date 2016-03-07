angular.module('ngMApp')
	.directive('nglaunchSidebar', [function() {
	  return {
		templateUrl: '/ng/lib/Sidebar/sidebar.tpl.html',
	    controller : 'TopbarSidebarController'
	  }
	}]);