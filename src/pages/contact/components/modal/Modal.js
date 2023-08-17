import './Modal.css';

function Modal({closeModal}) {
    return (
        <div className='modal'>
            <div className="modal__content">
                <h3 className="modal__title">Thank you for your message!</h3>

                <button className="modal__btn" onClick={closeModal}>Ok</button>
            </div>
        </div>
    )
}

export default Modal;