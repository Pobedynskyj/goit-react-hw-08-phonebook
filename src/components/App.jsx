import { Contacts } from './features/contacts/Contacts';
import s from './App.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  // addNewContact,
  // deleteContact,
  getAllContacts,
} from './features/redux/actions';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  return (
    <div className={s.container}>
      <h1 className={s.ttle}>Contacts book</h1>
      <Contacts />
    </div>
  );
};
