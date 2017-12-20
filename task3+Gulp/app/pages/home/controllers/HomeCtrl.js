angular.module('app')
    .controller('HomeCtrl',
        ['$scope', 'ContactsService', HomeCtrl]);

function HomeCtrl($scope, ContactsService) {
    $scope.contactFilter = '';
    $scope.contacts = ContactsService.getAll();
};
