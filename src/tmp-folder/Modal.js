import React,{useState} from 'react'
import {Button, Modal} from 'react-bootstrap'

const InfoModal = (props) => {
    const [show, setShow] = useState(props.showModal);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <Modal
                style={{'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto'}}
                /*{...props} can use this to send properties to modal*/
                // style={{'overflowY': 'auto', 'maxHeight': 'calc(200vh - 200px)'}}
                scrollable={true}
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                animation={false}
            >
                <h3>Welcome to this 12 week deadlift peaking program</h3>
                <Modal.Body>
                    {props.modalContent}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default InfoModal;