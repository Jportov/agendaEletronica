// src/components/ContactList.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from './ContactItem';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  const handleEditContact = (updatedContact) => {
    // Implemente a lógica de edição aqui, como abrir um modal ou atualizar o estado local para edição
    console.log('Editar contato:', updatedContact);
  };

  return (
    <div>
      <h2>Lista de Contatos</h2>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={handleDeleteContact}
          onEditContact={handleEditContact} // Passa a função de edição como prop
        />
      ))}
    </div>
  );
};

export default ContactList;
