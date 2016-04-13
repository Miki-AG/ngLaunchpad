angular.module('ngMApp')
  .directive('articleGrid', [function() {
    return {
      restrict: "E",
      templateUrl: '/build/ng/lib/ArticleGrid/article.grid.tpl.html',
      controller: 'ArticleGridCtrl',
      scope: {
        sidebarActive: "="
      }
    }
  }])
  .controller('ArticleGridCtrl', function($scope, $http, $mdDialog, $mdMedia) {

    $http.get('/build/ng/lib/ArticleGrid/data.json').success(function(data) {
      $scope.tiles = data;
    });
    $scope.showAdvanced = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
      $mdDialog.show({
          controller: 'DialogController',
          templateUrl: '/build/ng/lib/ArticleGrid/video.player.tpl.html',
          parent: angular.element(document.body),
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
  .controller('DialogController', function($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  });
