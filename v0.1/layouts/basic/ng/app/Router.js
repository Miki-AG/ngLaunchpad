angular.module('ngMApp', [
    'angular-loading-bar', 'ngAnimate', 'ui.router', 'ui.router.stateHelper',
    'ngMaterial', 'ngMdIcons', 'ngSanitize'
  ])
  .config(function($stateProvider, $urlRouterProvider, stateHelperProvider, cfpLoadingBarProvider) {

    cfpLoadingBarProvider.includeSpinner = false;

    $stateProvider
      .state('pages', {
        abstract: true,
        templateUrl: '/build/ng/app/pages/pages-root.tpl.html'
      })
      .state('pages.installation', {
        url: '/',
        templateUrl: '/build/ng/app/pages/installation.tpl.html',
        controller: 'Page0Controller'
      })
      .state('pages.starting', {
        url: '/gettingstarted',
        templateUrl: '/build/ng/app/pages/gettingstarted.tpl.html',
        controller: 'Page1Controller'
      })
      .state('pages.basic', {
        url: '/layouts/basic',
        templateUrl: '/build/ng/app/pages/layouts.basic.tpl.html',
        controller: 'Page2Controller'
      })
      .state('pages.grid', {
        url: '/layouts/grid',
        templateUrl: '/babuildse/ng/app/pages/layouts.grid.tpl.html',
        controller: 'Page3Controller'
      })
      .state('pages.predefined', {
        url: '/themes/predefined',
        templateUrl: '/build/ng/app/pages/themes.predefined.tpl.html',
        controller: 'Page3Controller'
      })
      .state('pages.custom', {
        url: '/themes/custom',
        templateUrl: '/build/ng/app/pages/themes.custom.tpl.html',
        controller: 'Page3Controller'
      })
      .state('pages.about', {
        url: '/about',
        templateUrl: '/build/ng/app/pages/about.tpl.html',
        controller: 'Page3Controller'
      })
      .state('pages.page_data_example', {
        url: '/my_data',
        templateUrl: '/build/ng/app/pages/about.tpl.html',
        controller: 'Page3Controller',
        resolve: {
          'ServiceData': function(Service) {
            return Service.promise;
          }
        }
      })
      .state('otherwise', {
        url: "*path",
        templateUrl: "/build/ng/lib/common/not-found.tpl.html"
      });
  })
  .run(function($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      // TODO: implement the code to access here
      //var requireLogin = toState.data.requireLogin;
      //console.log(toState);

      /*
      if (toState.name != 'pages.page3') {
        $state.go('pages.page3');
      }*/

    });

  });
