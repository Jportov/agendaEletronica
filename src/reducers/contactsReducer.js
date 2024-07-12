// src/reducers/contactsReducer.js

const initialState = {
    contacts: [
      { id: 1, fullName: 'João Silva', email: 'joao@example.com', phone: '123456789' },
      { id: 2, fullName: 'Maria Souza', email: 'maria@example.com', phone: '987654321' }
    ],
    editingContact: null // Estado para controlar qual contato está sendo editado
  };
  
  const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        return {
          ...state,
          contacts: [...state.contacts, action.payload]
        };
      case 'DELETE_CONTACT':
        return {
          ...state,
          contacts: state.contacts.filter(contact => contact.id !== action.payload)
        };
      case 'EDIT_CONTACT':
        return {
          ...state,
          editingContact: action.payload // Define o contato que está sendo editado
        };
      case 'UPDATE_CONTACT':
        return {
          ...state,
          contacts: state.contacts.map(contact =>
            contact.id === action.payload.id ? { ...contact, ...action.payload.updatedContact } : contact
          ),
          editingContact: null // Limpa o contato em edição após a atualização
        };
      default:
        return state;
    }
  };
  
  export default contactsReducer;
  