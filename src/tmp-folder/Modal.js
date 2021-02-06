
const Modal = ({handleClose,show, children}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <>
            <div className={showHideClassName}>
                {children}
                <button className='btn' onClick={handleClose}> Close </button>
            </div>
        </>
    );
};

export default Modal;