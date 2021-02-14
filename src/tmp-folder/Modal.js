import React,{useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import {useDispatch} from "react-redux";

const InfoModal = (props) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(props.showModal);
    const handleClose = () => {
        dispatch({type:props.dispatchCode, payload: false})
        setShow(false); // Might be a bit redundant, can change this later?
    }
    return(
        <>
            <Modal
                style={{'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto'}}
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
                    <Button
                        onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default InfoModal;