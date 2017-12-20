angular.module('app')
    .controller('NewContactCtrl',
        ['$scope', '$state', 'ContactsService', 'InputErrorsService', NewContactCtrl]);

function NewContactCtrl($scope, $state, ContactsService, InputErrorsService) {
    $scope.newContact = {};

    $scope.shouldShowErrors = InputErrorsService.shouldShowErrors;

    $scope.addContact = (contact) => {
        if ($scope.newContactForm.$valid) {
            ContactsService.addContact(contact);
            $state.go('home');
        };
    };
};
