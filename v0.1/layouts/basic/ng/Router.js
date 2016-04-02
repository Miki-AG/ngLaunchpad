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
      .state('pages.installation', {
        url: '/',
        templateUrl: '/ng/pages/installation.tpl.html',
        controller: 'Page0Controller'
      })
      .state('pages.starting', {
        url: '/gettingstarted',
        templateUrl: '/ng/pages/gettingstarted.tpl.html',
        controller: 'Page1Controller'
      })
      .state('pages.basic', {
        url: '/layouts/basic',
        templateUrl: '/ng/pages/layouts.basic.tpl.html',
        controller: 'Page2Controller'
      })
      .state('pages.grid', {
        url: '/layouts/grid',
        templateUrl: '/ng/pages/layouts.grid.tpl.html',
        controller: 'Page3Controller'
      })
      .state('pages.predefined', {
        url: '/themes/predefined',
        templateUrl: '/ng/pages/themes.predefined.tpl.html',
        controller: 'Page3Controller'
      })
      .state('pages.custom', {
        url: '/themes/custom',
        templateUrl: '/ng/pages/themes.custom.tpl.html',
        controller: 'Page3Controller'
      })
      .state('pages.about', {
        url: '/about',
        templateUrl: '/ng/pages/about.tpl.html',
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
