// src/components/ContactForm.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const FormField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 10px;
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

const ContactForm = () => {
  const dispatch = useDispatch();
  const editingContact = useSelector(state => state.editingContact);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (editingContact) {
      setFormData({
        fullName: editingContact.fullName,
        email: editingContact.email,
        phone: editingContact.phone
      });
    } else {
      setFormData({
        fullName: '',
        email: '',
        phone: ''
      });
    }
  }, [editingContact]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingContact) {
      dispatch({ type: 'UPDATE_CONTACT', payload: { id: editingContact.id, updatedContact: formData } });
    } else {
      dispatch({ type: 'ADD_CONTACT', payload: { ...formData, id: Date.now() } });
    }

    // Limpa o formulário após enviar
    setFormData({
      fullName: '',
      email: '',
      phone: ''
    });
  };

  return (
    <FormContainer>
      <FormTitle>{editingContact ? 'Editar Contato' : 'Adicionar Contato'}</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="fullName"
          placeholder="Nome Completo"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
        <FormField
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <FormField
          type="tel"
          name="phone"
          placeholder="Telefone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <FormButton type="submit">{editingContact ? 'Atualizar Contato' : 'Adicionar Contato'}</FormButton>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
