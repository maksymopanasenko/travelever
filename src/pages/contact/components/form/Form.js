import './Form.css';

function Form({onSendData}) {

    return (
        <form className="contact__form" onSubmit={onSendData}>
            <input type="text" name="name" placeholder='Name'required/>
            <input type="email" name="email" placeholder='E-mail' required/>
            <input type="text" name="msg" placeholder='Message'/>
            <button className='contact__btn'>Send</button>
        </form>
    )
}

export default Form;