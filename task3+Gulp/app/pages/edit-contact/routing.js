angular.module('app')
    .config(['$stateProvider',function($stateProvider) {
        $stateProvider.state('edit-contact', {
            url: '/edit-contact/:id',
            templateUrl: './pages/edit-contact/templates/editContact.html',
            controller: 'EditContactCtrl',
            resolve: {
                contact: function($state, $stateParams, ContactsService) {
                    const contacts = ContactsService.getAll();

                    return contacts.find((contact) => (
                        contact._id === Number($stateParams.id)
                    ));
                },
            },
            onEnter: function($state, contact) {
                if (contact === undefined) {
                    $state.go('home');
                }
            },
        });
    }]);
