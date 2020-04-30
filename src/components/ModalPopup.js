import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './ModalPopup.scss';

function ModalPopup(props) {
const { handlemodal, show, city } = props;
return (
    <Modal 
        className="modal-search"
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Title className="modal-text-alert" id="contained-modal-title-vcenter">
            Sorry, no beach in {city}, please try again !
        </Modal.Title>

        <button
        type="button"
        onClick={handlemodal}>
            Close   
        </button>

    </Modal>
);
}
ModalPopup.propTypes = {
handlemodal: PropTypes.func.isRequired,
show: PropTypes.bool.isRequired,
};
export default ModalPopup;