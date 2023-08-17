import { useState } from 'react';

import Form from './components/form/Form';
import Modal from './components/modal/Modal';
import './Contact.css';

import email from '../../resources/icons/contact/envelope.png';
import phone from '../../resources/icons/contact/telephone.png';
import building from '../../resources/icons/contact/building.png';
import clock from '../../resources/icons/contact/wall-clock.png';

function Contact() {
    const [modalToggle, setModalToggle] = useState(false);

    const onSendData = (e) => {
        e.preventDefault();
        e.target.reset();

        setModalToggle(m => !m);
    }

    const closeModal = () => {
        setModalToggle(m => !m);
    }

    return (
        <div className="contact">
            {modalToggle ? <Modal closeModal={closeModal}/> : null}
            <div className="contact__body">
                <div className="contact__box">
                    <h2 className="contact__form-title">Contact Us</h2>
                    <p className="contact__form-text">Feel free to contact us anytime. We will get back to you as soon as we can</p>
                    <Form onSendData={onSendData}/>
                </div>
                <div className="contact__box">
                    <div className="contact__info">
                        <h2 className="contact__info-title">Info</h2>
                        <ul  className='contact__info-list'>
                            <li className='contact__info-item'><img src={email} alt="email" width='20px' height='20px'/><a href="mailto:info@getintouch.we" className="contact__link">info@getintouch.we</a></li>
                            <li className='contact__info-item'><img src={phone} alt="email" width='20px' height='20px'/><a href="tel:+245689146" className="contact__link">+24 56 89 146</a></li>
                            <li className='contact__info-item'><img src={building} alt="email" width='20px' height='20px'/><span>14 Greenroad St.</span></li>
                            <li className='contact__info-item'><img src={clock} alt="email" width='20px' height='20px'/><span>9:00-18:00</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;