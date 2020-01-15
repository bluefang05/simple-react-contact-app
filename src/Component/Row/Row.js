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

    const openEditionModal = () => {
        setEditionModalVisibility(true);
    }

    const closeEditionModal = () => {
        setEditionModalVisibility(false);
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
            <Modal open={informationModalVisibility} onClose={() => { closeInfoModal() }} center>
                <form>
                    <fieldset className="uk-fieldset">

                        <legend className="uk-legend">Legend</legend>

                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Input" />
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Input" />
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Input" />
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Input" />
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Input" />
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Input" />
                        </div>

                    </fieldset>
                </form>
            </Modal>
            <Modal open={editionModalVisibility} onClose={() => { closeEditionModal() }} center>
                <form>
                    <fieldset className="uk-fieldset">

                        <legend className="uk-legend">Edition</legend>

                        <div className="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">firstName</label> <input className="uk-input" value={props.firstName} type="text" placeholder="Input" />
                        </div>
                        <div className="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">lastName</label>
                            <input className="uk-input" value={props.lastName} type="text" placeholder="Input" />
                        </div>
                        <div className="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">date</label>
                            <input className="uk-input" value={props.date} type="date" placeholder="Input" />
                        </div>
                        <div className="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">arrival time</label>
                            <input className="uk-input" value={props.time} type="time" placeholder="Input" />
                        </div>
                        <div className="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">phone</label>
                            <input className="uk-input" value={props.phone} type="text" placeholder="Input" />
                        </div>
                        <div className="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">email</label>
                            <input className="uk-input" value={props.email} type="text" placeholder="Input" />
                        </div>
                        <div className="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">SSN</label>
                            <input className="uk-input" value={props.ssn} type="text" placeholder="Input" />
                        </div>
                        <div className="uk-margin uk-flex uk-flex-center" >
                        <button type="submit" class="uk-button uk-button-primary uk-button-small">Send</button>
                        </div>

                    </fieldset>
                </form>
            </Modal>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.date}</td>
            <td>{props.time}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.ssn}</td>
            <td className="uk-flex uk-flex-between">
                <span onMouseDown={() => { openInfoModal(); }} className="icon pencil-icon" uk-icon="pencil"></span>
                <span onMouseDown={() => { openEditionModal(); }} className="icon info-icon" uk-icon="info"></span>
                <span onMouseDown={() => { confirmDelete(); }} className="icon trash-icon" uk-icon="trash"></span>
            </td>
        </tr>
    )
}

export default Row;