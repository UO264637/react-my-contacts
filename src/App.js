import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import Searcher from './components/Searcher';
import ExportContacts from './components/ExportContacts';
import ContactForm from './components/ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=3')
    .then(response => response.json())
     .then(contacts => setContacts(contacts.results));
  }, [])

  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  const searchedContacts = contacts.filter(contact => {
    return (contact.name['first'] + ' ' + contact.name['last']).toLowerCase().includes(searchField.toLowerCase())
  });

  const onAZ = () => {
    let az = contacts.sort((a, b) => {
      return (a.name['first'] + " " + a.name['last']).localeCompare(b.name['first'] + " " + b.name['last'])
    })
    setContacts([...az]); //clone the list
  }

  const onZA = () => {
    let za = contacts.sort((a, b) => {
      return (b.name['first'] + " " + b.name['last']).localeCompare(a.name['first'] + " " + a.name['last'])
    })
    setContacts([...za]); //clone the list
  }

  const onAddContact = (contact) => {
    fetch('https://randomuser.me/api/?results=1')
    .then(response => response.json())
     .then(contacts => contact.picture = contacts.results[0].picture)
       .then(() => setContacts([...contacts, contact]));

  }

  const onUpdateContact = (contact) => {
    setContacts([...contacts]);
  }

  const onDeleteContact = (contact) => {
    var newContacts = contacts.filter(function(c) {
      return c !== contact;
    })
    setContacts([...newContacts]);
  }

  var contact = {
    picture:{
      medium:""
    },
    name: {
      title:"",
      first: "",
      last: "",
    },
    gender: "",
    location: {
      city: "",
      state:"",
      county:"",
      street:{
        name:"",
        number:""
      },
      postcode:"",
      timezone:{
        offset:"",
      },
      coordinates: {
        latitude:"",
        longitude:"",
      }
    },
    email:"example@gmail.com",
    phone:"986 12 34 56",
    cell:"",
  }

  return (
    <div className='tc '>
      <header>
        <h1 className='f1'>My contacts</h1>
      </header>
      
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Searcher searchChange={onSearchChange} az={onAZ} za={onZA}/>
        <ContactForm contact={contact} action={onAddContact} title ="Add Contact"/>
        <ExportContacts contacts={contacts}/>
        <Scroll>     
          <CardList searchedContacts={searchedContacts} action={onUpdateContact} onDeleteContact={onDeleteContact}/>
        </Scroll>
      </ErrorBoundary>
      
      <footer>
        <hr/><p>Desarrollo de Software para Dispositivos Moviles. 
          {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
