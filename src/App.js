import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import CardList from './components/CardList';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
     .then(contacts => setContacts(contacts.results));
  }, [])


  return (
    <div className='tc '>
      <header>
        <h1 className='f1'>My contacts</h1>
      </header>
      {contacts.length === 0 ? <h2 className='f2'>Loading...</h2> :
      <CardList contacts={contacts}/>
      }
      <footer>
        <hr/><p>Desarrollo de Software para Dispositivos Moviles. 
          {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
