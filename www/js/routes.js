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
});