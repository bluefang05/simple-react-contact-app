import React, {useGlobal, useDispatch} from "reactn";
import "./css/style.css";
import Row from "../../Component/Row/Row";

function Home(props) {

    const initialize = useDispatch("initialize");
    const [contacts, setContacts] = useGlobal("contacts");
    initialize();

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
                                    
                                    <div className="uk-card-body">
                                        <table className="uk-table uk-table-striped">
                                            <thead>
                                                <tr>
                                                    <th>FirstName</th>
                                                    <th>LastName</th>
                                                    <th>Time</th>
                                                    <th>Phone</th>
                                                    <th>E-mail</th>
                                                    <th>Cédula</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <Row 
                                                index = "11"
                                                firstName = "Enmanuel"
                                                lastName = "Domínguez"
                                                time = "2:00PM"
                                                phone = "809-480-5264"
                                                email = "enmandom@gmail.com"
                                                ssn = "00118772979"

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