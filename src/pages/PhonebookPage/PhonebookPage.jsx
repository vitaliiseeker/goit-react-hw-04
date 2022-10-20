import { useState, useEffect } from "react";
import { Container } from "../../components/Container/Container";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactList } from "../../components/ContactList/ContactList";
import { TotalNumberContacts } from "../../components/TotalNumberContacts/TotalNumberContacts";
import { Filter } from "../../components/Filter/Filter";

export const PhonebookPage = () => {

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {

    const normalizedName = data.name.toLowerCase();

    if (contacts.find(contact => contact.name.toLowerCase() === normalizedName)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    setContacts([data, ...contacts]);
    console.log(contacts);
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts([...contacts
      .filter(contact => contact.id !== contactId)]);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={addContact}>
        </ContactForm>

        <h2>Contacts</h2>
        <TotalNumberContacts value={contacts.length} />
        {contacts.length > 0 &&
          <><Filter
            value={filter}
            onChange={changeFilter}
          />
            {(contacts.length > 0 && filteredContacts.length === 0) &&
              <h3>Sorry, no contacts were found for your search.</h3>}
            <ContactList
              contacts={filteredContacts}
              deleteContact={deleteContact}
            />
          </>}

      </Container>
    </>
  )
};

