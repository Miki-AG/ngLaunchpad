angular.module('ngMApp').config(function ($mdThemingProvider) {


    var customPrimary = {
        '50': '#d7f3f9',
        '100': '#c1ecf5',
        '200': '#abe6f2',
        '300': '#95dfee',
        '400': '#7fd9eb',
        '500': '#69D2E7',
        '600': '#53cbe3',
        '700': '#3dc5e0',
        '800': '#27bedc',
        '900': '#20adca',
        'A100': '#edfafc',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#1d9bb4'
    };
    $mdThemingProvider
        .definePalette('customPrimary',
                        customPrimary);

    var customAccent = {
        '50': '#a3af68',
        '100': '#adb879',
        '200': '#b7c189',
        '300': '#c2ca9a',
        '400': '#ccd2ab',
        '500': '#d6dbbb',
        '600': '#eaeddd',
        '700': '#f4f6ed',
        '800': '#fefefe',
        '900': '#ffffff',
        'A100': '#eaeddd',
        'A200': '#E0E4CC',
        'A400': '#d6dbbb',
        'A700': '#ffffff'
    };
    $mdThemingProvider
        .definePalette('customAccent',
                        customAccent);

    var customWarn = {
        '50': '#facca8',
        '100': '#f9be90',
        '200': '#f7b078',
        '300': '#f6a260',
        '400': '#f49448',
        '500': '#F38630',
        '600': '#f27818',
        '700': '#e36b0d',
        '800': '#cb600c',
        '900': '#b3550a',
        'A100': '#fbdbc1',
        'A200': '#fde9d9',
        'A400': '#fef7f1',
        'A700': '#9a4909'
    };
    $mdThemingProvider
        .definePalette('customWarn',
                        customWarn);

    var customBackground = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#fefefe',
        '300': '#f4f6ed',
        '400': '#eaeddd',
        '500': '#E0E4CC',
        '600': '#d6dbbb',
        '700': '#ccd2ab',
        '800': '#c2ca9a',
        '900': '#b7c189',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#adb879'
    };
    $mdThemingProvider
        .definePalette('customBackground',
                        customBackground);

   $mdThemingProvider.theme('default')
       .primaryPalette('customPrimary')
       .accentPalette('customAccent')
       .warnPalette('customWarn')
       .backgroundPalette('customBackground')
});