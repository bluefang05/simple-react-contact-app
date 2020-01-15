import React, { useState, useGlobal, useDispatch } from "reactn";
import { Form, Text } from 'informed';
import "./css/style.css";
import Row from "../../Component/Row/Row";
import Modal from 'react-responsive-modal';

function Home(props) {

    // const initialize = useDispatch("initialize");
    const updateLocalStorage = useDispatch("updateLocalStorage");
    const [contacts, setContacts] = useGlobal("contacts");
    const [addContactModalvisibility, setAddContactModalvisibility] = useState(false);
    let storedContacts =
        localStorage.getItem("contacts") != null ? JSON.parse(localStorage.getItem("contacts")) : [];
    //initialize();
    console.log(contacts, contacts.length);
    if (contacts.length < 1 ) {


        setContacts(storedContacts);
    }
    // if(localStorage.getItem("contacts")){
    //     storedContacts = 
    //     console.log(storedContacts);

    //     console.log(contacts);
    // }

    console.log(contacts);

    let contactRows = [];

    contacts.forEach((element, index) => {
        contactRows.push(
            <Row
                key={"row" + index}
                index={index}
                firstName={element.firstName}
                lastName={element.lastName}
                date={element.date}
                time={element.time}
                phone={element.phone}
                email={element.email}
                ssn={element.ssn}
            />
        )
    });

    const addContact = (info) => {
        let arr = contacts;
        let newArr = Array.from(contacts);
        newArr.push(info);
        localStorage.setItem('contacts', JSON.stringify(newArr));
        setContacts(newArr);
        updateLocalStorage();
        console.log(info, newArr);
    }

    const openAddContactModal = () => {

        setAddContactModalvisibility(true);
        console.log(contacts);
    }

    const closeAddContactModal = () => {
        setAddContactModalvisibility(false);
    }

    return (
        <div>
            <div className="content-padder content-background">
                <div className="uk-section-small uk-section-default header">
                    <div className="uk-container uk-container-large">
                        <h1><span className="ion-speedometer"></span> Contacts</h1>
                        <p>
                            Contacts will be saved in the local storage
                    </p>
                    </div>
                </div>
                <div className="uk-section-small">
                    <div className="uk-container uk-container-large">

                        <div uk-grid="" className="uk-child-width-1-1@s uk-child-width-1-1@l uk-grid uk-grid-stack">
                            <div className="uk-first-column">
                                <div className="uk-card uk-card-default">
                                    <p className="uk-margin">
                                        <button onMouseDown={() => { openAddContactModal(); }} className="uk-button uk-button-primary uk-button-small">Add contact</button>
                                    </p>

                                    <Modal open={addContactModalvisibility} onClose={() => { closeAddContactModal() }} center>
                                        <Form onSubmit={addContact} >
                                            <fieldset className="uk-fieldset">

                                                <legend className="uk-legend">Add new row</legend>

                                                <div className="uk-margin">
                                                    <label className="uk-form-label" htmlFor="form-stacked-text">firstName</label>
                                                    <Text field="firstName" className="uk-input" value={props.firstName} type="text" />
                                                </div>
                                                <div className="uk-margin">
                                                    <label className="uk-form-label" htmlFor="form-stacked-text">lastName</label>
                                                    <Text field="lastName" className="uk-input" type="text" />
                                                </div>
                                                <div className="uk-margin">
                                                    <label className="uk-form-label" htmlFor="form-stacked-text">date</label>
                                                    <Text field="date" className="uk-input" type="date" />
                                                </div>
                                                <div className="uk-margin">
                                                    <label className="uk-form-label" htmlFor="form-stacked-text">arrival time</label>
                                                    <Text field="arrival" className="uk-input" type="time" />
                                                </div>
                                                <div className="uk-margin">
                                                    <label className="uk-form-label" htmlFor="form-stacked-text">phone</label>
                                                    <Text field="phone" className="uk-input" type="text" />
                                                </div>
                                                <div className="uk-margin">
                                                    <label className="uk-form-label" htmlFor="form-stacked-text">email</label>
                                                    <Text field="email" className="uk-input" type="text" />
                                                </div>
                                                <div className="uk-margin">
                                                    <label className="uk-form-label" htmlFor="form-stacked-text">SSN</label>
                                                    <Text field="ssn" className="uk-input" type="text" />
                                                </div>
                                                <div className="uk-margin uk-flex uk-flex-center" >
                                                    <button type="submit" className="uk-button uk-button-primary uk-button-small">Add</button>
                                                </div>

                                            </fieldset>
                                        </Form>
                                    </Modal>
                                    <div className="uk-card-body">
                                        <table className="uk-table uk-table-striped">
                                            <thead>
                                                <tr>
                                                    <th>FirstName</th>
                                                    <th>LastName</th>
                                                    <th>Date</th>
                                                    <th>Time</th>
                                                    <th>Phone</th>
                                                    <th>E-mail</th>
                                                    <th>SSN</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {contactRows}
                                                {/* <Row
                                                    index="11"
                                                    firstName="Enmanuel"
                                                    lastName="Domínguez"
                                                    date="2020-01-15 "
                                                    time="15:40:00"
                                                    phone="809-480-5264"
                                                    email="enmandom@gmail.com"
                                                    ssn="00118772979"

                                                /> */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;