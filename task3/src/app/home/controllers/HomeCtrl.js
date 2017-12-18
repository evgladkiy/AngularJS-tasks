import app from './../../app';

export default app.controller('HomeCtrl',
    ['$scope', 'contactsService', NewContactCtrl]);

function NewContactCtrl($scope, contactsService) {
    $scope.contactFilter = '';
    $scope.contacts = contactsService.getAll();
}
