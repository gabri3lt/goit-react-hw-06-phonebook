import React from 'react';
import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <div className={css.container}>
      <section title="Phonebook" className={css.section}>
        <h1>Phonebook</h1>
        <ContactForm />
      </section>

      <section title="Contacts" className={css.section}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </div>
  );
};

export default App;
