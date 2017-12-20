angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: './pages/home/templates/home.html',
            controller: 'HomeCtrl',
        });

        $urlRouterProvider.otherwise('/home');
    }]);
