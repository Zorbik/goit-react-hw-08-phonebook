export const getContacts = ({ contacts }) => contacts.contacts.items;
export const getError = ({ contacts }) => contacts.contacts.error;
export const getStatus = ({ contacts }) => contacts.contacts.isLoading;
export const getFilter = ({ contacts }) => contacts.filter;
export const getState = ({ contacts }) => contacts.contacts;

export const getLoggedIn = ({ user }) => user.isLoggedIn;
export const getUser = ({ user }) => user.user;
export const getToken = ({ user }) => user.token;
export const getPending = ({ user }) => user.isPending;

export const getVisibleContacts = state => {
  const stateContacts = getContacts(state);
  const stateFilter = getFilter(state);
  const normalizedFilter = stateFilter.toLowerCase().trim();
  return stateContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
