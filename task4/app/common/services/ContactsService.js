function ContactsService($window, $http) {

    // localStorage data and functions for working with it;

    const storage = $window.localStorage;
    const storageContacts = JSON.parse(storage.getItem('contacts'));

    function updateLocalStorage(contacts) {
        storage.setItem('contacts', JSON.stringify(contacts));
    }

    // functions for get and process contacts from json;

    function getInitContacts() {
        return $http.get('./initData/contacts.json')
        .then(res => res.data)
    }

    function updateContacts(newContacts) {
        contacts = newContacts;
    }

    // function for get max id from the contact list;

    function getCurrentId() {
        const lastId = contacts.reduce((maxId, nextContact) => {
            const { _id: contactId } =  nextContact;
            return contactId > maxId ? contactId : maxId;
        }, 0);

        return lastId + 1;
    }

    // set contacts and currentId depending on localStorage

    let contacts
    let currentId;

    if (storageContacts !== null) {
        updateContacts(storageContacts);
        currentId = getCurrentId();
    } else {
        getInitContacts()
        .then(updateContacts)
        .then(() => {
            currentId = getCurrentId();
            updateLocalStorage(contacts);
        });
    }

    // ContactsService methods

    function getAll() {
        return contacts;
    }

    function addContact(newContact) {
        const mappedContact = Object.assign(
            {'_id': currentId},
            newContact
        );
        contacts.push(mappedContact);
        updateLocalStorage(contacts);
    }

    function removeContact(contact) {
        const contactIndex = contacts.indexOf(contact);
        contacts.splice(contactIndex, 1);
        updateLocalStorage(contacts);
    }

    function updateContact(updatedContact) {
        const oldContact = contacts.find((contact) => (
            contact._id === updatedContact._id
        ));
        const contactIndex = contacts.indexOf(oldContact);

        contacts.splice(contactIndex, 1, updatedContact);
        updateLocalStorage(contacts);
    }

    return {
        getAll,
        addContact,
        removeContact,
        updateContact,
    };
};

angular.module('app')
    .factory('ContactsService',['$window', '$http', ContactsService]);
