import React, { Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactList from "./ContactList";
import Filter from "./Filter";
import PhoneForm from "./PhoneForm";
export default class PhoneBook extends Component {
    state ={
        contacts: [],
        name: "",
        number: "",
        filter: ""
    }
    handleChangeName = event => {
        this.setState({ name: event.target.value });
      };
    
      handleChangeNumber = event => {
        this.setState({ number: event.target.value });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ name: " " });
        this.setState({ number: " " });
       
      };
      addTask = () => {
        let {number, name} = this.state;
        const task = {
            id: uuidv4(),
            name,
            number,
        };
        let uniq = this.state.contacts.some(({ name: value }) =>value.toLowerCase() === name.toLowerCase());
        if (!uniq && name.length > 0 && number.length > 0) {
      this.setState((prevState) => {
            return {
                contacts: [...prevState.contacts, task],
            };
        });}
    };
    removeTask = (taskId) => {
        this.setState((prevState) => {
            return {
                contacts: prevState.contacts.filter(({ id }) => id !== taskId),
            };
        });

    };
    changeFilter = (filter) => {
        this.setState({ filter });
    };

    getVisibleTasks = () => {
        const { contacts, filter } = this.state;

        return contacts.filter((task) =>
            task.name.toLowerCase().includes(filter.toLowerCase())
        );
    };





   render(){
       let {name,number,filter} = this.state;
       let visibleTasks = this.getVisibleTasks();
       return(
        <>
         <PhoneForm name={name} number={number} OnhandleChangeName ={this.handleChangeName} OnhandleChangeNumber={this.handleChangeNumber} OnhandleSubmit={this.handleSubmit} OnaddTask={this.addTask}/>
<Filter value ={filter} OnChangeFilter = {this.changeFilter}/>
    <ContactList contacts={visibleTasks} OnRemoveTask ={this.removeTask}/>
    </>
    
       );
   }


}