angular.module('ngMApp', [
    'angular-loading-bar', 'ngAnimate', 'ui.router', 'ui.router.stateHelper',
    'ngMaterial', 'ngMdIcons', 'ngSanitize'
  ])
  .config(function($stateProvider, $urlRouterProvider, stateHelperProvider, cfpLoadingBarProvider) {

    cfpLoadingBarProvider.includeSpinner = false;

    $stateProvider
      .state('pages', {
        abstract: true,
        templateUrl: '/ng/pages/pages-root.tpl.html'
      })
      .state('pages.page0', {
        url: '/',
        templateUrl: '/ng/pages/page0.tpl.html',
        controller: 'Page0Controller'
      })
      .state('pages.page1', {
        url: '/installation',
        templateUrl: '/ng/pages/page1.tpl.html',
        controller: 'Page1Controller'
      })
      .state('pages.page2', {
        url: '/gettingstarted',
        templateUrl: '/ng/pages/page2.tpl.html',
        controller: 'Page2Controller'
      })
      .state('pages.page3', {
        url: '/themes',
        templateUrl: '/ng/pages/page3.tpl.html',
        controller: 'Page3Controller'
      })
      .state('pages.page_data_example', {
        url: '/my_data',
        templateUrl: '/ng/pages/page3.tpl.html',
        controller: 'Page3Controller',
        resolve: {
          'ServiceData': function(Service) {
            return Service.promise;
          }
        }
      })
      .state('otherwise', {
        url: "*path",
        templateUrl: "ng/lib/common/not-found.tpl.html"
      });
  })
  .run(function($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      //var requireLogin = toState.data.requireLogin;
      console.log(toState);

      if (toState.name != 'pages.page3') {
        $state.go('pages.page3');
      }

    });

  });
