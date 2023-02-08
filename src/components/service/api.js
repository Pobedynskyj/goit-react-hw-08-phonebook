import axios from 'axios';

const url = 'https://63dd0529df83d549ce98cc58.mockapi.io/contacts';

export const fetchContacts = async () => {
  const { data } = await axios.get(url);
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post(url, contact);
  console.log(data);
  return data;
};

export const removeContact = async id => {
  const { data } = await axios.delete(`${url}/${id}`);
  return data;
};
