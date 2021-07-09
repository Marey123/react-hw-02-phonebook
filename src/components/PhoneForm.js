import React from 'react';
import PropTypes from 'prop-types';
PhoneForm.propTypes = {
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    OnaddTask: PropTypes.func.isRequired,
    OnhandleChangeName: PropTypes.func.isRequired,
    OnhandleChangeNumber:PropTypes.func.isRequired,
    OnhandleSubmit: PropTypes.func.isRequired
  };

function PhoneForm({name,number,OnaddTask,OnhandleChangeName,OnhandleChangeNumber,OnhandleSubmit}){
    return(
        <form onSubmit={OnhandleSubmit}>
        <label>
          Name:
    <input
    type="text"
    name="name"
    value={name}
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
    required
    onChange={OnhandleChangeName}
  />
  </label>
  <label>
          Number:
    <input
   type="tel"
   name="number"
   value = {number}
   pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
   title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
   required
   onChange={OnhandleChangeNumber}
  />
  </label>
  <button type="submit" className="addContacts" onClick = {OnaddTask}>
        Add contact
      </button>
</form>
    )
}

export default PhoneForm;