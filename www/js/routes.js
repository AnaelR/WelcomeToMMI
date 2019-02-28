app.config(function($stateProvider){

    $stateProvider
        .state(
            'appli', {
                url : '/',
                templateUrl : '',
                controller : 'GeneralCtrl'
            })
        .state(
            'appli.home', {
                url : '/appli/home',
                templateUrl : 'templates/home.html',
                controller : 'HomeCtrl'
            })
        .state(
        'appli.about', {
            url : '/appli/about',
            templateUrl : 'templates/about.html',
            controller : 'AboutCtrl'
        })
        .state(
            'appli.design', {
                url : '/appli/design',
                templateUrl : 'templates/design.html',
                controller : 'DesignCtrl'
            })
        .state(
            'appli.veille', {
                url : '/appli/veille',
                templateUrl : 'templates/veille.html',
                controller : 'VeilleCtrl'
            })
        .state(
            'appli.infoDesign', {
                url : '/appli/infoDesign',
                templateUrl : 'templates/infoDesign.html',
                controller : 'InfoDesignCtrl'
            })
});