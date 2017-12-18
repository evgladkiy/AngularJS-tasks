import app from './../../app';

export default app.controller('NewContactCtrl',
    ['$scope', '$state', 'contactsService', NewContactCtrl]);

function NewContactCtrl($scope, $state, contactsService) {
    $scope.newContact = {};

    $scope.shouldShowErrors = (input) => {
        const { newContactForm } = $scope;

        return (input.$dirty && input.$touched)
            || (newContactForm.$submitted);
    };

    $scope.addContact = (contact) => {
        if ($scope.newContactForm.$valid) {
            contactsService.addContact(contact);
            $state.go('home');
        };
    };
}
