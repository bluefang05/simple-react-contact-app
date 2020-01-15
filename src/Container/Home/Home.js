import React from "react";
import "./css/style.css";
import swal from "sweetalert";

function Home(props) {
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

function Row(props) {
    const confirmDelete = () => {
        swal({
          title: "Do you want to delete this row?",
          text: "Everything will be lost",
          icon: "warning",
          buttons: ["cancel", "understood"],
          dangerMode: true
        }).then(willDelete => {
          if (willDelete) {
            //something
          }
        });
      };

    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.time}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.ssn}</td>
            <td className="uk-flex uk-flex-between">
            <span className="icon pencil-icon" uk-icon="pencil"></span>
            <span className="icon info-icon" uk-icon="info"></span>
            <span onMouseDown={()=>{confirmDelete();}} className="icon trash-icon" uk-icon="trash"></span>
            </td>
        </tr>
    )
}
export default Home;