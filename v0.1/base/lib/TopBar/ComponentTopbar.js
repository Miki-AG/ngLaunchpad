angular.module('ngMApp')
	.directive('nglaunchTopbar', [function() {
	  return {
		templateUrl: '/ng/lib/Topbar/topbar.tpl.html',
	    controller : 'TopbarSidebarController'
	  }
	}]);