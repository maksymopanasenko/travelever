import './Contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="contact__body">
                <div className="contact__box">
                    <h2 className="contact__form-title">Contact Us</h2>
                    <p className="contact__form-text">Feel free to contact us anytime. We will get back to you as soon as we can</p>
                    <form className="contact__form">
                        <input type="text" name="name" placeholder='Name'/>
                        <input type="email" name="email" placeholder='E-mail'/>
                        <input type="text" name="msg" placeholder='Message'/>
                        <button className='contact__btn'>Send</button>
                    </form>
                </div>
                <div className="contact__box">
                    <div className="contact__info">
                        <h2 className="contact__info-title">Info</h2>
                        <ul>
                            <li><a href="mailto:info@getintouch.we" className="contact__link">info@getintouch.we</a></li>
                            <li><a href="tel:+245689146" className="contact__link">+24 56 89 146</a></li>
                            <li><span>14 Greenroad St.</span></li>
                            <li><span>9:00-18:00</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;