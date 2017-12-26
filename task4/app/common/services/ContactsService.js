angular.module('app')
    .factory('ContactsService',['$window', '$http', ContactsService]);

function ContactsService($window, $http) {
    const storage = $window.localStorage;
    const storageContacts = JSON.parse(storage.getItem('contacts'));
    let contacts = [
        { _id: 1, name: 'Denise Howell', phoneNumber: '(128) 210-3856', email: 'pizzakiller@gmal.com' },
        { _id: 2, name: 'Lawrence Hamilton', phoneNumber: '(223) 885-8007', email: 'notsobad@ramble.ru' },
        { _id: 3, name: 'Mia Hart', phoneNumber: '(838) 618-3323', email: 'prettyinpink@mail.tut.by' },
        { _id: 4, name: 'Theresa Lynch', phoneNumber: '(718) 672-2710', email: 'cottoncandy@mail.tu' },
        { _id: 5, name: 'Annie Reid', phoneNumber: '(842) 748-3978', email: 'princess_annie@gmail.com' },
        { _id: 6, name: 'Jonathan Fletcher', phoneNumber: '(745) 622-5449', email: 'pegasus@mail.ru' },
        { _id: 7, name: 'Allen Parker', phoneNumber: '(298) 916-3073', email: 'googler99@google.com' },
        { _id: 8, name: 'Andrea Hawkins', phoneNumber: '(737) 433-5496', email: 'yourfantasy@yahoo.com' },
        { _id: 9, name: 'Cameron Coleman', phoneNumber: '(930) 873-0347', email: 'highwayman@highway.road' },
        { _id: 10, name: 'Antonio Ross', phoneNumber: '(262) 638-5630', email: 'last_samurai@earth.com' },
        { _id: 11, name: 'Katie Bowman', phoneNumber: '(405) 951-0149', email: 'phantom_lady@example.com' },
        { _id: 12, name: 'Bill Anderson', phoneNumber: '(848) 778-9626', email: 'ilove@angular.js' },
        { _id: 13, name: 'Ray Jennings', phoneNumber: '(160) 711-4649', email: 'putdownmyhammer@maiasdl.com' },
    ];

    if (storageContacts !== null) {
        contacts = storageContacts;
    } else {
        updateLocalStorage(contacts);
    }

    function updateLocalStorage(contacts) {
        storage.setItem('contacts', JSON.stringify(contacts));
    }

    let currentId = getCurrentId();

    function getCurrentId() {
        const lastId = contacts.reduce((maxId, nextContact) => {
            const { _id: contactId } =  nextContact;
            return contactId > maxId ? contactId : maxId;
        }, 0);

        return lastId + 1;
    }

    function getContact(id) {
        return contacts.find(contact => contact._id === id);
    }

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
        const oldContact = getContact(updatedContact._id)
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
