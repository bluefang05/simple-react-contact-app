import React, { useDispatch, useGlobal, useState } from "reactn";
import "./css/style.css";
import swal from "sweetalert";
import Modal from 'react-responsive-modal';

function Row(props) {
    const [informationModalVisibility, setInformationModalVisibility] = useState(false);
    const [editionModalVisibility, setEditionModalVisibility] = useState(false);

    const openInfoModal = () => {
        setInformationModalVisibility(true);
    }

    const closeInfoModal = () => {
        setInformationModalVisibility(false);
    }

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

    const showInformation = () => {

    }

    return (

        <tr>
            <Modal open={informationModalVisibility} onClose={ () => {closeInfoModal()}} center>
                <h2>Simple centered modal</h2>
            </Modal>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.time}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.ssn}</td>
            <td className="uk-flex uk-flex-between">
                <span onMouseDown={() => { openInfoModal() }} className="icon pencil-icon" uk-icon="pencil"></span>
                <span onMouseDown={() => { openInfoModal(); }} className="icon info-icon" uk-icon="info"></span>
                <span onMouseDown={() => { confirmDelete(); }} className="icon trash-icon" uk-icon="trash"></span>
            </td>
        </tr>
    )
}

export default Row;