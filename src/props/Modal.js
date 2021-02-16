import React,{useState} from 'react'
import {Modal} from 'react-bootstrap'
import {useDispatch} from "react-redux";

const InfoModal = (props) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(props.showModal);
    const [submitWeight] = useState(props.submitWeight);
    const [writtenWeight, setWrittenWeight] = useState('');

    const handleSubmit = (e) => {
        setShow(false);
        dispatch({type:props.dispatchCode, payload: false})
        /* For modal with submit weight true*/
        if(submitWeight){
            dispatch({ type: 'SET_WEIGHT', payload: writtenWeight})
        /* For modal with submit weight false*/
        }
        e.preventDefault()
    }
    const handleClose = () => {
        dispatch({type:props.dispatchCode, payload: false})
        setShow(false);
    }
    return(
        <>
            <Modal
                style={{'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto', 'minHeight':'350px'}}
                scrollable={true}
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                animation={false}
            >
                <h3>{props.header}</h3>
                <Modal.Body>
                    {props.modalContent}
                    {submitWeight &&
                        <form className='form' onSubmit={handleSubmit}>
                            <input
                                type='number'
                                value={writtenWeight}
                                onChange={(e)=>setWrittenWeight(e.target.value)}
                            />
                            <button type='submit' >Submit current 1RM</button>
                        </form>
                    }
                </Modal.Body>
                    {!submitWeight &&
                    <button className='btn'
                        onClick={handleSubmit}>
                        Close
                    </button>
                    }
            </Modal>
        </>
    );
};

export default InfoModal;
