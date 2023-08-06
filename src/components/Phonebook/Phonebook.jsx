import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './Phonebook.module.css';
import { ContactForm } from './ContactForm.jsx';
import { Filter } from './Filter.jsx';
import { ContactList } from './ContactList';

import { saveContacts, deleteContacts } from '../../redux/contactsSlice.js';
import { listFilter } from '../../redux/filterSlice.js';

export function Phonebook() {
  const [name, setName] = useState(``);
  const [number, setNumber] = useState(``);

  const dispatch = useDispatch();

  const contactsList = useSelector(state => state.contacts);
  const myFilter = useSelector(state => state.filter);

  const handleInputNameChange = e => {
    setName(e.currentTarget.value);
  };

  const handleInputNumberChange = e => {
    setNumber(e.currentTarget.value);
  };

  const saveContact = e => {
    e.preventDefault();

    for (let el of contactsList) {
      if (el.name === name) {
        return alert(`${name} is already in contacts`);
      }
    }

    dispatch(saveContacts({ name, number }));

    setName('');
    setNumber('');
  };

  const handleDeleteContact = name => {
    dispatch(deleteContacts(name));
  };

  const filteredList = () => {
    const normalizedFilter = myFilter.toLowerCase();
    return contactsList.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        saveContact={saveContact}
        handleInputNameChange={handleInputNameChange}
        handleInputNumberChange={handleInputNumberChange}
      />

      <h2>Contacts</h2>
      <Filter
        filter={myFilter}
        listFilter={e => dispatch(listFilter(e.currentTarget.value))}
      />

      <ContactList
        filteredContacts={filteredList()}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
}
