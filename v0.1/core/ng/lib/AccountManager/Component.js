angular.module('ngMApp')
  .directive('accountManager', function() {
    return {
      templateUrl: '/build/ng/lib/AccountManager/account.manager.tpl.html'
    };
  })
  .controller('AccountManagerCtrl', function($scope, $http, $mdDialog, $mdMedia, Auth) {

    $scope.$watch(Auth.isLoggedIn, function(value, oldValue) {
      if (value) {
        $scope.cancel();
      }
      $scope.user = value;
    }, true);

    $http.get('/build/ng/lib/AccountManager/data.json').success(function(data) {
      $scope.menuChoice = data;
    });

    $scope.show_form = 'Login';
    $scope.user = Auth.retrieveUser();

    $scope.login = function() {
      var user = {
          username: 'Rob',
          sessionId: 'wfwer345asdffasdfdsaf'
        }
        // user = authenticateUserFromServer(username, psswd)
      Auth.setUser(user);
    };
    $scope.register = function() {
      $scope.user = {};
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.switchToRegister = function() {
      $scope.show_form = 'Register';
    };
    $scope.switchToLogin = function() {
      $scope.show_form = 'Login';
    };
    $scope.showLogin = function() {
      $scope.switchToLogin();
      $scope.showDialog();
    };
    $scope.showRegister = function() {
      $scope.switchToRegister();
      $scope.showDialog();
    };
    $scope.showDialog = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
      $mdDialog.show({
          controller: 'AccountManagerCtrl',
          templateUrl: '/build/ng/lib/AccountManager/login.tpl.html',
          targetEvent: ev,
          clickOutsideToClose: true,
          fullscreen: useFullScreen
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    };
  })
  .directive('menuToggleAm', function($state, $mdSidenav, Auth) {
    return {
      restrict: 'E',
      scope: {
        openChoice: '=',
        choice: '='
      },
      templateUrl: '/build/ng/lib/AccountManager/toggle.tpl.html',
      link: function($scope, $element) {
        var controller = $element.parent().controller();

        $scope.isSelected = function() {
          if (controller.selectedChoice == null) {
            return false;
          } else {
            return controller.selectedChoice.name === this.choice.name;
          }
        };
        $scope.logout = function() {
          Auth.setUser(null);
        };
        $scope.isOpen = function() {
          if (controller.openChoice == null) {
            return false;
          } else {
            return controller.openChoice.name === this.choice.name;
          }
        };
        $scope.toggle = function() {
          if (this.choice.subChoices) {
            if ($scope.isOpen()) {
              controller.openChoice = null;
            } else {
              controller.openChoice = this.choice;
            }
          } else {
            $scope.choiceOrSubchoiceSelected(this.choice.state);
            controller.selectedChoice = this.choice;
            controller.openChoice = null;
            controller.selectedSubchoice = null;
          }
        };

        var parentNode = $element[0].parentNode.parentNode.parentNode;
        if (parentNode.classList.contains('parent-list-item')) {
          var heading = parentNode.querySelector('h2');
          $element[0].firstChild.setAttribute('aria-describedby', heading.id);
        }

        $scope.choiceOrSubchoiceSelected = function(state) {
          console.log(state);
          //$mdSidenav('left-sidenav').toggle();
          $state.go(state);
        };
      }
    };
  })
  .directive('menuLinkAm', function() {
    return {
      restrict: 'E',
      scope: {
        openedSection: '=',
        subchoice: '='
      },
      templateUrl: '/build/ng/lib/AccountManager/link.tpl.html',
      link: function($scope, $element) {
        var controller = $element.parent().controller();

        $scope.isSelected = function() {
          if (controller.selectedSubchoice == null) {
            return false;
          } else {
            return controller.selectedSubchoice.name === this.subchoice.name;
          }
        };

        $scope.focusSection = function() {
          if (!$scope.isSelected()) {
            controller.selectedSubchoice = this.subchoice;
            controller.selectedChoice = null;
          }
          $scope.$parent.choiceOrSubchoiceSelected(this.subchoice.state);
          controller.autoFocusContent = true;
        };
      }
    };
  })
  .factory('Auth', function() {

    var user;

    return {
      retrieveUser: function() {
        var userObj = localStorage.getItem("ngLaunchpad.user")
        if (userObj) {
          this.setUser(angular.fromJson(userObj));
        };
        return this.isLoggedIn();
      },
      setUser: function(newUser) {
        user = newUser;
        if (user) {
          localStorage.setItem("ngLaunchpad.user", angular.toJson(user));
        } else {
          localStorage.removeItem("ngLaunchpad.user");
        }
      },
      isLoggedIn: function() {
        return (user) ? user : false;
      },
      isInRole: function(role) {
        if (!_authenticated || !_identity.roles) {
          return false
        } else {
          return _identity.roles.indexOf(role) != -1;
        };
      },
      isInAnyRole: function(roles) {
        if (!_authenticated || !_identity.roles) return false;

        for (var i = 0; i < roles.length; i++) {
          if (this.isInRole(roles[i])) return true;
        }

        return false;
      }
    };
  });
