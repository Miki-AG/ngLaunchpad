angular.module('ngMApp')
  .controller('TopbarSidebarController', ['$scope', '$mdSidenav', '$mdBottomSheet','$location', '$mdDialog',
  	function($scope, $mdSidenav, $mdBottomSheet, $location, $mdDialog) {

    	$scope.alert = '';



    	$scope.showListBottomSheet = function($event) {
    	  $scope.alert = '';
    	  $mdBottomSheet.show({
    	    templateUrl: 'http://localhost:8080/static/ng/BottomSheet/bottom-sheet.tpl.html',
    	    controller: 'ctrl',
    	    targetEvent: $event
    	  }).then(function(clickedItem) {
    	    $scope.alert = clickedItem.name + ' clicked!';
    	  });
    	};

    	$scope.listItemClick = function($index) {
    	  var clickedItem = $scope.items[$index];
    	  $mdBottomSheet.hide(clickedItem);
    	};


      $scope.bottomSheetOpen = false;

    	$scope.bottomSheetItems = [{
        id: 0,
        title: "My account",
        action: "MY_ACCOUNT"
      }, {
        id: 1,
        title: "My profile",
        action: "MY_PROFILE"
      }, {
        id: 2,
        title: "Logoff",
        action: "LOGOFF"
      }];


      $scope.accountMenuOpen = false;
      $scope.accountItems = [{
        id: 0,
        title: "My account",
        action: "MY_ACCOUNT"
      }, {
        id: 1,
        title: "My profile",
        action: "MY_PROFILE"
      }, {
        id: 2,
        title: "Logoff",
        action: "LOGOFF"
      }];

      $scope.publicMenus = [{
        id: 0,
        title: "Installation",
        icon: "person",
        menuOpen: false,
        action: '/installation'
      }, {
        id: 1,
        title: "Getting started",
        icon: "directions_bus",
        menuOpen: false,
        action: '/gettingstarted'
      }, {
        id: 2,
        title: "Themes",
        icon: "account_balance",
        menuOpen: false,
        action: '/themes'
      }, {
        id: 3,
        title: "Resources",
        icon: "book",
        menuOpen: false
      }, {
        id: 4,
        title: "Github",
        icon: "people",
        menuOpen: false
      }];


      $scope.visibleMenus = $scope.publicMenus;

      $scope.doActionMenu = function(event, idOfMenuToToggle, action) {
        console.log(idOfMenuToToggle);
        console.log(action);

        if (action) {
          $mdSidenav('left').toggle();
            $location.path(action);
        }
        else {
          // If MENU
          if ($scope.visibleMenus[idOfMenuToToggle].submenus) {
            $scope.visibleMenus[idOfMenuToToggle].menuOpen = !$scope.visibleMenus[idOfMenuToToggle].menuOpen;
          }
        }
      };

      $scope.doActionSubmenu = function(event, id) {
        console.log("submenu");
      };

      $scope.toggleAccountMenu = function(event) {
        console.log("account");
        $scope.accountMenuOpen = !$scope.accountMenuOpen;
      };



      $scope.showLoginPopup = function(ev) {
        $scope.showLoginRegisterPopup(ev);
      }
      $scope.showRegisterPopup = function(ev) {
        $scope.showLoginRegisterPopup(ev);
      }


      $scope.showLoginRegisterPopup = function(ev) {

        $mdDialog.show({
          controller: 'LoginDialogController',
          templateUrl: '/static/ng/User/user-dialog.tpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true
        })
        .then(function() {
          $scope.status = 'You said the information was.';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });

      };


      $scope.logoff = function() {

        $scope.accountMenuOpen = false;
        $scope.visibleMenus = $scope.publicMenus;

        $scope.loggedIn = false;
      };


      $scope.toggleSidenav = function(menuId) {
          $mdSidenav(menuId).toggle();
      };
      $scope.close = function(menuId) {
          $mdSidenav(menuId).close();
      };


      $scope.bottomSheetToggle = function($event) {
      	console.log("bottomSheetToggle");

    	if ($scope.bottomSheetOpen){
          	$mdBottomSheet().show();
          	$scope.bottomSheetOpen = true;
      	}
      	else {
          	$mdBottomSheet().hide();
          	$scope.bottomSheetOpen = false;
      	}
      };

      $scope.bottomSheetShow = function($event) {
          $mdBottomSheet.show();
      };

    	$scope.bottomSheetItemClick = function($index) {
    		console.log("bottomSheetItemClick");

    		var clickedItem = $scope.bottomSheetItems[$index];
    		$mdBottomSheet.hide();
    	};

    }]);


