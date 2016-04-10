angular.module('ngMApp')
  .directive('accountManager', function() {
    return {
      templateUrl: '/build/ng/lib/AccountManager/account.manager.tpl.html'
    };
  })
  .controller('AccountManagerCtrl', function($scope, $http) {
    $http.get('/build/ng/lib/AccountManager/data.json').success(function(data) {
      $scope.menuChoice = data;
    });
  });