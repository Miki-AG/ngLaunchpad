angular.module('ngMApp')
  .controller('ctrl', function($scope) {
    $scope.readonly = true;
    $scope.vegObjs = [{
      'name': 'Broccoli',
      'type': 'Brassica'
    }, {
      'name': 'Cabbage',
      'type': 'Brassica'
    }, {
      'name': 'Carrot',
      'type': 'Umbelliferous'
    }];
    $scope.cities = [{
      'name': 'NYC',
      'type': 'Brassica'
    }, {
      'name': 'Chicago',
      'type': 'Brassica'
    }, {
      'name': 'Los Angeles',
      'type': 'Umbelliferous'
    }, {
      'name': 'San Francisco',
      'type': 'Umbelliferous'
    }];
  });