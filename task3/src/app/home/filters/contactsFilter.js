import app from './../../app';

export default app.filter('contactsFilter', contactsFilter);

function contactsFilter() {
    return ((contacts, word) => {
        const mappedWord = word.trim().toLowerCase();
        return contacts.filter((contact) => {
            const mappedName = contact.name.toLowerCase();
            return mappedName.indexOf(mappedWord) === 0;
        });
    });
}
