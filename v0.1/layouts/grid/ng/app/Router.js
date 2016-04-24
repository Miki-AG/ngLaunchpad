angular.module('ngMApp', [
    'angular-loading-bar', 'ngAnimate', 'ui.router', 'ui.router.stateHelper',
    'ngMaterial', 'ngMdIcons', 'ngSanitize'
  ])
  .config(function($stateProvider, $urlRouterProvider,
    stateHelperProvider, cfpLoadingBarProvider) {

    cfpLoadingBarProvider.includeSpinner = false;

    $stateProvider
      .state('pages', {
        abstract: true,
        templateUrl: '/build/ng/app/pages/pages-root.tpl.html'
      })
      .state('pages.home', {
        url: '/',
        templateUrl: '/build/ng/app/pages/installation.tpl.html',
        controller: 'Page0Controller'
      })
      .state('pages.starting', {
        url: '/gettingstarted',
        templateUrl: '/build/ng/app/pages/gettingstarted.tpl.html',
        controller: 'Page1Controller'
      })
      // State that requires login
      .state('pages.basic', {
        url: '/layouts/basic',
        templateUrl: '/build/ng/app/pages/layouts.basic.tpl.html',
        controller: 'Page2Controller',
        roles: ['User']
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
  .run(function($rootScope, $state, Auth) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {

      console.log(toState);

      if (toState.roles &&
        toState.roles.length > 0 &&
        !Auth.isInAnyRole(toState.roles)) {

        if (Auth.isAuthenticated()) {
          $state.transitionTo("pages.accessdenied");
          event.preventDefault();
        } // user is signed in but not authorized for desired state
        else {
          // now, send them to the signin state so they can log in
          $state.go('pages.signin');
        }
      }

    });

  });
