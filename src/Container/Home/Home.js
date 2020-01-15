import React, { useState, useGlobal, useDispatch } from "reactn";
import "./css/style.css";
import Row from "../../Component/Row/Row";
import Modal from 'react-responsive-modal';

function Home(props) {

    const initialize = useDispatch("initialize");
    const [contacts, setContacts] = useGlobal("contacts");
    const [addContactModalvisibility, setAddContactModalvisibility] = useState(false);

    initialize();

    const openAddContactModal = () => {
        let arr = contacts;
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
                                        <h2>Simple centered modal</h2>
                                    </Modal>
                                    <div className="uk-card-body">
                                        <table className="uk-table uk-table-striped">
                                            <thead>
                                                <tr>
                                                    <th>FirstName</th>
                                                    <th>LastName</th>
                                                    <th>Time</th>
                                                    <th>Phone</th>
                                                    <th>E-mail</th>
                                                    <th>SSN</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <Row
                                                    index="11"
                                                    firstName="Enmanuel"
                                                    lastName="Domínguez"
                                                    time="2:00PM"
                                                    phone="809-480-5264"
                                                    email="enmandom@gmail.com"
                                                    ssn="00118772979"

                                                />
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