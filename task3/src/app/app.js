// import angular and dependency
import angular from 'angular';
import 'angular-ui-router';
import 'angular-messages';

// import templates
import homeTmpl from './home/templates/home.html';
import createTmpl from './add-contact/templates/create.html';
import updateTmpl from './update-contact/templates/update.html';

let app = angular.module('app', ['ui.router', 'ngMessages']);

app.config(function($stateProvider, $urlRouterProvider) {
    const homeState = {
        name: 'home',
        url: '/home',
        template: homeTmpl,
        controller: 'HomeCtrl',
    }

    const addContact = {
        name: 'add-contact',
        url: '/add-contact',
        template: createTmpl,
        controller: 'NewContactCtrl',
    };

    const changeContactState = {
        name: 'change-contact',
        url: '/change-contact/:id',
        template: updateTmpl,
        controller: 'ChangeContactCtrl',
        resolve: {
            id: function($stateParams) {
                return $stateParams.id;
            },
            contact: function($state, id, contactsService) {
                const contacts = contactsService.getAll();

                return contacts.find(contact => contact._id === Number(id));
            },
        },
    };


    // redirect to home page
    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.otherwise('/home');

    // states to home page
    $stateProvider.state(homeState);
    $stateProvider.state(changeContactState);
    $stateProvider.state(addContact);

});

export default app;
