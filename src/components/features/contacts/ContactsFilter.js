import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../redux/actions';

import s from './Contacts.module.css';

export const ContactsFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onFilterChanged = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <>
      <input
        type="text"
        className={s.filterInput}
        placeholder="Search contact"
        onChange={onFilterChanged}
        value={filter}
      />
    </>
  );
};
