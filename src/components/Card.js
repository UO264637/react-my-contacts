import CardModal from './CardModal';
import ContactForm from './ContactForm';

const Card = ({name, email, photo, phone, contact, action, onDeleteContact}) => {
    const deleteContact = (e) =>{
        onDeleteContact(contact);
    }

    return (
        <div className='bg-light-blue dib br4 pa3 ma3 shadow-5 grow'>
            <img alt='{name}' src={photo} />
            <h2 className='f3 grow'>{name}</h2>
            <p className='f5 grow'>{email}</p>
            <p className='f5 grow'>{phone}</p>
            <CardModal contact={contact}/>
            <ContactForm contact={contact} action={action} title ="Edit"/>
            <a className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-red" onClick={() => deleteContact()} href="#0">Delete</a>
        </div>
    );
}

export default Card;
