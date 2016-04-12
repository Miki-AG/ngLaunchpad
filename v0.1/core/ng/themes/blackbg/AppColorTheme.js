angular.module('ngMApp').config(function ($mdThemingProvider) {
    var customBackground = {
        '50': '#4c6571',
        '100': '#425762',
        '200': '#384a53',
        '300': '#2e3c43',
        '400': '#232f34',
        '500': '#192125',
        '600': '#0f1316',
        '700': '#040607',
        '800': '#000000',
        '900': '#000000',
        'A100': '#577280',
        'A200': '#61808f',
        'A400': '#6d8d9d',
        'A700': '#000000'
    };
    $mdThemingProvider
        .definePalette('customBackground',
                        customBackground);
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('deep-purple')
        .backgroundPalette('customBackground')
        .dark();
});