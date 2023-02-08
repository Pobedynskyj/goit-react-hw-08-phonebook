import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/actions';
import { selectFilteredContact } from '../redux/selectors';
import s from './Contacts.module.css';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContact);

  const removeCont = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={s.contactsList}>
      {filteredContacts &&
        filteredContacts.map(contact => {
          return (
            <li key={contact.id} className={s.contactsItem}>
              <p className={s.addedContact}>
                {contact.name}: {contact.number}
              </p>
              <button
                className={s.removeBtn}
                type="button"
                onClick={() => removeCont(contact.id)}
              >
                Remove contact
              </button>
            </li>
          );
        })}
    </ul>
  );
};
