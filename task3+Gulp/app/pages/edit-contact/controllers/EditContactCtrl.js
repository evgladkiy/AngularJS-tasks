angular.module('app')
    .controller('EditContactCtrl',
        ['$scope', '$state', 'ContactsService', 'InputErrorsService', 'contact', EditContactCtrl]);

function EditContactCtrl($scope, $state, ContactsService, InputErrorsService, contact) {
    $scope.contactClone = Object.assign({}, contact);

    $scope.shouldShowErrors = InputErrorsService.shouldShowErrors;

    $scope.removeCurrentContact = () => {
        ContactsService.removeContact(contact);
        $state.go('home');
    };

    $scope.updateCurrentContact = () => {
        if ($scope.updateContactForm.$valid) {
            ContactsService.updateContact($scope.contactClone);
            $state.go('home');
        };
    };
};
