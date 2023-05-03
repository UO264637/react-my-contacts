import {useState} from "react";
import Modal from "react-modal";
import {AiTwotoneMail, AiFillPhone, AiFillMobile} from 'react-icons/ai';

const ContactForm = ({contact, action, title}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) =>{
    setModalOpen(false);

    action(contact);
  }

  return (
    <div>
        <a className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue" onClick={() => setModalOpen(true)} href="#0">{title}</a>
      
        <Modal
          className="tl ba br4 pa4 mw8 mt6 center bg-white"
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          ariaHideApp={false}
        >
          <h2 className="tc">{title + ": " + contact.name.title + " " + contact.name.first + " " + contact.name.last}</h2>
          <div className="dib mr5">
            <form onSubmit={e => { handleSubmit(e)}}>
                <label>First Name:</label> <input defaultValue={contact.name.first} onChange={e => {contact.name.first = e.target.value}}></input>
                <label> Last Name:</label> <input defaultValue={contact.name.last} onChange={e => {contact.name.last = e.target.value}}></input><br/>
                <label>Gender:</label> <input defaultValue={contact.gender} onChange={e => {contact.gender = e.target.value}}></input>
                <label>Title:</label> <input defaultValue={contact.name.title} onChange={e => {contact.name.title = e.target.value}}></input><br/><br/>
                <label>City:</label> <input defaultValue={contact.location.city} onChange={e => {contact.location.city = e.target.value}}></input><br/>
                <label>State:</label> <input defaultValue={contact.location.state} onChange={e => {contact.location.state = e.target.value}}></input><br/>
                <label>Country:</label> <input defaultValue={contact.location.country} onChange={e => {contact.location.country = e.target.value}}></input><br/>
                <label>Street:</label> <input defaultValue={contact.location.street.name} onChange={e => {contact.location.street.name = e.target.value}}></input>
                <label> Number:</label> <input defaultValue={contact.location.street.number} onChange={e => {contact.location.street.number = e.target.value}}></input><br/>
                <label>Zip Code:</label> <input defaultValue={contact.location.postcode} onChange={e => {contact.location.postcode = e.target.value}}></input><br/>
                <label>Timezone:</label> <input defaultValue={contact.location.timezone.offset} onChange={e => {contact.location.timezone.offset = e.target.value}}></input><br/><br/>
                <label><AiTwotoneMail/> Email:</label> <input defaultValue={contact.email} onChange={e => {contact.email = e.target.value}}></input><br/>
                <label><AiFillPhone/> Phone:</label> <input defaultValue={contact.phone} onChange={e => {contact.phone = e.target.value}}></input><br/>
                <label><AiFillMobile/> Cell:</label> <input defaultValue={contact.cell} onChange={e => {contact.cell = e.target.value}}></input><br/><br/>
                <label>Latitude:</label> <input defaultValue={contact.location.coordinates.latitude} onChange={e => {contact.location.coordinates.latitude = e.target.value}}></input>
                <label> Longitude:</label> <input defaultValue={contact.location.coordinates.longitude} onChange={e => {contact.location.coordinates.longitude = e.target.value}}></input><br/><br/>
                <div className="tc">
                  <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue" type="submit">Submit</button>
                </div>
            </form>
          </div>          
        </Modal>
    </div>
  );
}

export default ContactForm;
