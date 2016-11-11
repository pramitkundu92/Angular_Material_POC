var app = angular.module('dpdx',['ngAnimate','ngMaterial','ngMessages','ui.router','dpdx.grid','dpdx.tree']);

app.config(['$stateProvider','$urlRouterProvider','$mdThemingProvider',
            function($stateProvider,$urlRouterProvider,$mdThemingProvider){
    //registering states for the app
    angular.forEach(appStates,function(state){
        $stateProvider.state(state);
    });
    //registering a default route
    $urlRouterProvider.otherwise('/login');
                
    //setting the app theme similar to deloitte digital apps
    $mdThemingProvider.definePalette('darkPalette', {
        '50': '000',
        '100': '000',
        '200': '000',
        '300': '000',
        '400': '000',
        '500': '000',
        '600': '000',
        '700': '000',
        '800': '000',
        '900': '000',
        'A100': '000',
        'A200': '000',
        'A400': '000',
        'A700': '000',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light

        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
            '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });            
    $mdThemingProvider.theme('default')
    .primaryPalette('darkPalette')
    .accentPalette('green');
}]);
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('#topbar').addClass('fixed');
    } else {
        $('#topbar').removeClass('fixed');
    }
});