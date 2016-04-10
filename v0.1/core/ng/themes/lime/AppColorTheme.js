angular.module('ngMApp').config(function($mdThemingProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('lime')
    .accentPalette('orange')
    .warnPalette('blue');

});