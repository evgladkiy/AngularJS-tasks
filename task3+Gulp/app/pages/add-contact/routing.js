angular.module('app')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('add-contact', {
            url: '/add-contact',
            templateUrl: './pages/add-contact/templates/addContact.html',
            controller: 'NewContactCtrl',
        });
    }]);
