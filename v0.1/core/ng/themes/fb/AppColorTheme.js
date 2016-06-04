angular.module('ngMApp').config(function ($mdThemingProvider) {

    var customPrimary = {
        '50': '#839ccf',
        '100': '#718dc8',
        '200': '#5f7ec1',
        '300': '#4c70ba',
        '400': '#4264aa',
        '500': '#3b5998',
        '600': '#344e86',
        '700': '#2d4373',
        '800': '#263961',
        '900': '#1e2e4f',
        'A100': '#96abd6',
        'A200': '#a8b9dd',
        'A400': '#bbc8e4',
        'A700': '#17233c'
    };
    $mdThemingProvider
        .definePalette('customPrimary',
                        customPrimary);

    var customAccent = {
        '50': '#aaaaaa',
        '100': '#b7b7b7',
        '200': '#c4c4c4',
        '300': '#d1d1d1',
        '400': '#dddddd',
        '500': '#eaeaea',
        '600': '#ffffff',
        '700': '#ffffff',
        '800': '#ffffff',
        '900': '#ffffff',
        'A100': '#ffffff',
        'A200': '#f7f7f7',
        'A400': '#eaeaea',
        'A700': '#ffffff'
    };
    $mdThemingProvider
        .definePalette('customAccent',
                        customAccent);

    var customWarn = {
        '50': '#ffb280',
        '100': '#ffa266',
        '200': '#ff934d',
        '300': '#ff8333',
        '400': '#ff741a',
        '500': '#ff6400',
        '600': '#e65a00',
        '700': '#cc5000',
        '800': '#b34600',
        '900': '#993c00',
        'A100': '#ffc199',
        'A200': '#ffd1b3',
        'A400': '#ffe0cc',
        'A700': '#803200'
    };
    $mdThemingProvider
        .definePalette('customWarn',
                        customWarn);

    var customBackground = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#ffffff',
        '400': '#ffffff',
        '500': 'ffffff',
        '600': '#f2f2f2',
        '700': '#e6e6e6',
        '800': '#d9d9d9',
        '900': '#cccccc',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#bfbfbf'
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