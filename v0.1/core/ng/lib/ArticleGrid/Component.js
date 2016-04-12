angular.module('ngMApp')
  .directive('articleGrid', [function() {
    return {
      restrict: "E",
      templateUrl: '/build/ng/lib/ArticleGrid/article.grid.tpl.html',
      controller : 'ArticleGridCtrl',
      scope: {
          sidebarActive: "="
      }
    }
  }])
  .controller('ArticleGridCtrl', function($scope, $http) {

    $http.get('/build/ng/lib/ArticleGrid/data.json').success(function(data) {
      $scope.tiles = data;
    });

  })
