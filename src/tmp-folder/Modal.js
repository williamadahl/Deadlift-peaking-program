import React,{useState} from 'react'
import {Button, Modal} from 'react-bootstrap'

const InitialModal = () => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <Modal
                /*{...props} can use this to send properties to modal*/
                size='lg'
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                animation={false}
            >
                <h3>Welcome to this 12 week deadlift peaking program</h3>
                <p>
                    The program consists of three training blocks, consisting of four, and three weeks each,
                    and one final week where you will try to beat your previous best. Each week has one workout
                    session. If you want to do two deadlift sessions each week, keep 72 hours in between them
                    and keep the second workout low volume and opt to work on technique and speed of the floor.
                    Before you start using the program you will submit your previous 1RM on the deadlift.
                    It is important that you are honest and use a recent 1RM. Not your previous best from a year ago.
                    Your previous best will be used to calculate a starting weight for you to work on.
                    The program follows a progressive overload model where you log your rep count
                    on the deadlift "main-set". For every block there are target reps to reach, and for reaching
                    and every achieved rep over the target reps, 2.5 kg are added to next weeks main-set.
                    This program is quite taxing. I would  recommend NOT going heavy on other exercises that compete
                    with the same energy system. For example, you could drop down to a maintenance level on your squat.
                    Especially for the last four weeks.

                    Block one: In this block we aim to build a solid base from which we can cut volume
                    and increase intensity in block two and three and eventually pull as hard as you can
                    on week twelve. Your starting point is calculated to 80% of your submitted previous 1RM.
                    In block one you will do lots of sets, reps and accessory work. Your target will be between
                    five to ten reps for your last deadlift set. Every rep, including reaching the target, will
                    increase next weeks weights with 2.5kg.

                    Block two: In this block we start dropping down volume a bit and up the intensity. Your target
                    reps will be between three to six reps on your top-set, and we cut two accessory exercises and
                    the number of sets on the remaining ones.Every rep, including reaching the target, will
                    increase next weeks weights with 2.5kg.

                    Block three: This is the peaking phase and it is make or break for most athletes. Either you
                    will get a lot stronger or a lot weaker. It is crucial that you DROP the volume and follow the
                    program as it is laid out. Trust the process! All non-essential volume is dropped and the intensity
                    is amped up once again. This last couple of weeks, you only preform the deadlift during your workout.
                    Remember, this is why we stared out with a high volume, so that we could cut from it and transfer
                    it over to high intensity.

                    Week 12: This is it, all your hard work has come to this one lift. Do a good warmup and work
                    your way up with singles jumping ~10% at the time. If you have a bad day, no worries,
                    your peak will last at least one more week, so you can try again the week after. Good luck,
                    and stay hard!


                </p>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
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

export default InitialModal;