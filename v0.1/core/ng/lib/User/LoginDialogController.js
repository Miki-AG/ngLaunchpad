angular.module('ngMApp')
    .controller('LoginDialogController', ['$scope', '$mdDialog', 'AuthService',
      function($scope, $mdDialog, AuthService) {

      $scope.isRegister = AuthService.getIsRegister();
      $scope.anonUser;

      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.login = function(t) {
        AuthService.login($scope.anonUser.username, $scope.anonUser.pssw, $scope.afterLogin)
      };
      $scope.afterLogin = function(response) {
        if (response.resp == 'SUCCESS') {
          $mdDialog.hide();
        }
        else {
          $scope.anonUser.status = response.resp
          $scope.anonUser.error_message = response.respText
        }
      }
      $scope.register = function(t) {
        $mdDialog.hide();

        console.log($scope.anonUser);
      };
      $scope.toggeLoginRegister = function() {
        $scope.anonUser.status = ''
        if ($scope.isRegister) {
          AuthService.setToLogin();
          $scope.isRegister = false;
        }
        else {
          AuthService.setToRegister()
          $scope.isRegister = true;
        }
      };
      $scope.callWhenEnter = function (argument) {
        $scope.login();
      }
    }]);