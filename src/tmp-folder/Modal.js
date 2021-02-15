import React,{useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";

const InfoModal = (props) => {
    const dispatch = useDispatch();
    const selectSubmitted1RM = state => state.initialWeight;
    const submitted1RM = useSelector(selectSubmitted1RM )
    const [show, setShow] = useState(props.showModal);
    const [submitWeight] = useState(props.submitWeight);
    const [writtenWeight, setWrittenWeight] = useState('');

    const handleSubmit = (e) => {
        setShow(false);
        dispatch({type:props.dispatchCode, payload: false})
        /* For modal with submit weight true*/
        if(submitWeight){
            dispatch({ type: 'SET_WEIGHT', payload: writtenWeight})
            console.log('pressed submit')
        /* For modal with submit weight false*/
        }else{
            console.log('no submit')
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
                <Modal.Footer>
                    {!submitWeight &&
                    <Button
                        onClick={handleSubmit}>
                        Close
                    </Button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default InfoModal;
