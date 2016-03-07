angular.module('ngMApp', [
    'angular-loading-bar', 'ngAnimate', 'ui.router', 'ui.router.stateHelper',
    'ngMaterial', 'ngMdIcons', 'ngSanitize'])
    .config(function($stateProvider, $urlRouterProvider, stateHelperProvider, cfpLoadingBarProvider) {

        cfpLoadingBarProvider.includeSpinner = false;

        $stateProvider
            .state('showcase', {
                abstract: true,
                templateUrl: '/ng/lib/Showcase/showcase-root.tpl.html'
            })
            .state('showcase.page0', {
                url: '/',
                templateUrl: '/ng/lib/Showcase/page0.tpl.html',
                controller: 'Page0Controller'
            })
            .state('showcase.page1', {
                url: '/installation',
                templateUrl: '/ng/lib/Showcase/page1.tpl.html',
                controller: 'Page1Controller'
            })
            .state('showcase.page2', {
                url: '/gettingstarted',
                templateUrl: '/ng/lib/Showcase/page2.tpl.html',
                controller: 'Page2Controller'
            })
            .state('showcase.page3', {
                url: '/themes',
                templateUrl: '/ng/lib/Showcase/page3.tpl.html',
                controller: 'Page3Controller'
            })
            .state('showcase.page_data_example', {
                url: '/my_data',
                templateUrl: '/ng/lib/Showcase/page3.tpl.html',
                controller: 'Page3Controller',
                resolve:{
                    'ServiceData':function(Service){
                        return Service.promise;
                    }
                }
            })
            .state('otherwise', {
                url: "*path",
                templateUrl: "ng/lib/common/not-found.tpl.html"
            });
        });

