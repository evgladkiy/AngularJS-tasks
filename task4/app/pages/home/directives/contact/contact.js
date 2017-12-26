angular.module('app')
    .directive('contact', () => ({
        restrict: 'E',
        scope: {
            contact: '=',
            removeContact: '=',
        },
        templateUrl: './pages/home/directives/contact/contact.html',
    }));
