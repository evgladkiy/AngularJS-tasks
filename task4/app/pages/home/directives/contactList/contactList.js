angular.module('app')
    .directive('contactList', ['ContactsService',
        (ContactsService) => ({
            restrict: 'E',
            scope: {
                filterValue: '@',
                contacts: '=',
            },
            link: {
                pre: function(scope) {
                    scope.removeContact = ContactsService.removeContact;
                    scope.contacts = ContactsService.getAll();
                }
            },
            templateUrl: './pages/home/directives/contactList/contactList.html',
        })
    ]);
