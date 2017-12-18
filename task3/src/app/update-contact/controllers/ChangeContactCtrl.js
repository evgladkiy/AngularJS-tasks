import app from './../../app';

export default app.controller('ChangeContactCtrl',
    ['$scope', '$state', 'contactsService', 'contact', ChangeContactCtrl]);

function ChangeContactCtrl($scope, $state, contactsService, contact) {
    $scope.contactClone = Object.assign({}, contact);

    $scope.removeCurrentContact = () => {
        contactsService.removeContact(contact);
        $state.go('home');
    }

    $scope.updateCurrentContact = () => {
        if ($scope.updateContactForm.$valid) {
            contactsService.updateContact($scope.contactClone);
            $state.go('home');
        };
    }

    $scope.shouldShowErrors = (input) => {
        const { updateContactForm } = $scope;

        return (input.$dirty && input.$touched)
            || (updateContactForm.$submitted);
    };
}
