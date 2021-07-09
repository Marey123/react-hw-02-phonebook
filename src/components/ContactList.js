import React from 'react';
import PropTypes from 'prop-types';
ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    OnRemoveTask: PropTypes.func.isRequired,
  };
function ContactList({contacts,OnRemoveTask}){
return(
<div className="Contacts">
    <h2 className="Cont" >Contacts</h2>
   
    {contacts.map(({ id, name, number }) => (
       <div className="PhoneCard" key = {id}>
       <span className="Name">{name}: {number}</span>
   
       <button
         className="deleteContact"
         onClick={() => OnRemoveTask(id)}
       >
           Delete contact
       </button>
     </div>
    ))}
   </div>  
);
}

export default ContactList;