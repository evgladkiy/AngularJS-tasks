import app from './../../app';

export default app.controller('ContactsCtrl', ['$scope', 'contactsService', ContactsCtrl]);

function ContactsCtrl($scope, contactsService) {
    $scope.contactFilter = '';
    $scope.newContact = {};

    $scope.contacts = contactsService.getAll();
    $scope.removeContact = contactsService.removeContact;

    $scope.shouldShowErrors = (input) => {
        const { newContactForm } = $scope;

        return (input.$dirty && input.$touched)
            || (newContactForm.$submitted);
    }

    $scope.addContact = (contact) => {
        if ($scope.newContactForm.$valid) {
            contactsService.addContact(contact);
            $scope.newContact = {};
            $scope.newContactForm.$setPristine();
            $scope.newContactForm.$setUntouched();
        }
    };
}
