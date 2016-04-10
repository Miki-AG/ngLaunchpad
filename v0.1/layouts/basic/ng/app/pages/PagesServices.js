angular.module('ngMApp')
  .service('ServiceTest', function($http) {
    var innerData = null;
    var promise = $http.get('/ng/my-library/')
        .success(function (data) {
            innerData = data;
        });
    return {
      promise: promise,
      setData: function (data) {
          innerData = data;
      },
      getData: function () {
          return innerData;
      }
    };
  });
