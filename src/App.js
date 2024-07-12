// src/App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AppTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <AppTitle>Gerenciador de Contatos</AppTitle>
        <ContactForm />
        <ContactList />
      </AppContainer>
    </Provider>
  );
}

export default App;
