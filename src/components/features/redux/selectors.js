export const selectFilteredContact = state => {
  console.log(state);
  if (state.contacts.length > 0) {
    return state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(state.filter.toLowerCase());
    });
  }
};
