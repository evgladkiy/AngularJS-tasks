import app from './../../app';

export default app.factory('contactsService',['$window', contactsService]);

function contactsService($window) {
    const storage = $window.localStorage;
    const storageContacts = JSON.parse(storage.getItem('contacts'));

    let contacts = [
        { _id: '1', name: 'Denise Howell', phoneNumber: '(128) 210-3856' },
        { _id: '2', name: 'Lawrence Hamilton', phoneNumber: '(223) 885-8007' },
        { _id: '3', name: 'Mia Hart', phoneNumber: '(838) 618-3323' },
        { _id: '4', name: 'Theresa Lynch', phoneNumber: '(718) 672-2710' },
        { _id: '5', name: 'Annie Reid', phoneNumber: '(842) 748-3978' },
        { _id: '6', name: 'Jonathan Fletcher', phoneNumber: '(745) 622-5449' },
        { _id: '7', name: 'Bill Anderson', phoneNumber: '(298) 916-3073' },
        { _id: '8', name: 'Andrea Hawkins', phoneNumber: '(737) 433-5496' },
        { _id: '9', name: 'Cameron Coleman', phoneNumber: '(930) 873-0347' },
        { _id: '10', name: 'Antonio Ross', phoneNumber: '(262) 638-5630' },
        { _id: '11', name: 'Bob Bowman', phoneNumber: '(405) 951-0149' },
        { _id: '12', name: 'Allen Parker', phoneNumber: '(848) 778-9626' },
        { _id: '13', name: 'Ray Jennings', phoneNumber: '(160) 711-4649' },
    ];

    if (storageContacts === null) {
        updateLocalStorage(contacts);
    } else {
        contacts = storageContacts;
    }

    function updateLocalStorage(contacts) {
        storage.setItem('contacts', JSON.stringify(contacts));
    }

    function getAll() {
        return contacts;
    }

    function addContact(newContact) {
        contacts.push(newContact);
        updateLocalStorage(contacts);
    }

    function removeContact(contact) {
        const contactIndex = contacts.indexOf(contact);
        contacts.splice(contactIndex, 1);
        updateLocalStorage(contacts);
    }

    return {
        contacts,
        getAll,
        addContact,
        removeContact,
    };
}
