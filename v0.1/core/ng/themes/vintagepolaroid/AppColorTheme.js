angular.module('ngMApp').config(function ($mdThemingProvider) {
    var customPrimary = {
        '50': '#6dd9ca',
        '100': '#59d4c3',
        '200': '#45cfbc',
        '300': '#34c6b2',
        '400': '#2eb2a0',
        '500': '#299E8E',
        '600': '#248a7c',
        '700': '#1e756a',
        '800': '#196157',
        '900': '#144d45',
        'A100': '#82ded2',
        'A200': '#96e4d9',
        'A400': '#aae9e0',
        'A700': '#0f3933'
    };
    $mdThemingProvider
        .definePalette('customPrimary',
                        customPrimary);

    var customAccent = {
        '50': '#f3a37f',
        '100': '#f19267',
        '200': '#ee8150',
        '300': '#ec7039',
        '400': '#ea6022',
        '500': '#DD5315',
        '600': '#c64a13',
        '700': '#ae4211',
        '800': '#97390e',
        '900': '#80300c',
        'A100': '#f5b396',
        'A200': '#f7c4ad',
        'A400': '#f9d5c5',
        'A700': '#69270a'
    };
    $mdThemingProvider
        .definePalette('customAccent',
                        customAccent);

    var customWarn = {
        '50': '#f4969b',
        '100': '#f17f85',
        '200': '#ef686f',
        '300': '#ec5159',
        '400': '#e93a43',
        '500': '#E7232D',
        '600': '#d91822',
        '700': '#c2151e',
        '800': '#ab131a',
        '900': '#941017',
        'A100': '#f6adb1',
        'A200': '#f9c4c7',
        'A400': '#fbdbdd',
        'A700': '#7d0e13'
    };
    $mdThemingProvider
        .definePalette('customWarn',
                        customWarn);

    var customBackground = {
        '50': '#e8dca0',
        '100': '#e3d58b',
        '200': '#decd77',
        '300': '#d9c662',
        '400': '#d4be4e',
        '500': '#CFB739',
        '600': '#c0a92f',
        '700': '#ab972a',
        '800': '#978525',
        '900': '#827320',
        'A100': '#ede4b4',
        'A200': '#f2ebc9',
        'A400': '#f7f3dd',
        'A700': '#6e611b'
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