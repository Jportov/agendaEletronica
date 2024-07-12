// src/components/ContactItem.js

import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const ContactItemContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactActions = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 12px;
  margin-left: 10px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactItem = ({ contact, onDelete }) => {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch({ type: 'EDIT_CONTACT', payload: contact });
  };

  return (
    <ContactItemContainer>
      <ContactInfo>
        <div>
          <strong>Nome:</strong> {contact.fullName}
        </div>
        <div>
          <strong>E-mail:</strong> {contact.email}
        </div>
        <div>
          <strong>Telefone:</strong> {contact.phone}
        </div>
      </ContactInfo>
      <ContactActions>
        <Button onClick={handleEditClick}>Editar</Button>
        <Button onClick={() => onDelete(contact.id)}>Excluir</Button>
      </ContactActions>
    </ContactItemContainer>
  );
};

export default ContactItem;
