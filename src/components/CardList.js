import Card from './Card';

const CardList = ({searchedContacts, action, onDeleteContact}) => {
    return (
      <div>
        {
          searchedContacts.map((contact, i) => {
            return <Card 
              key={i} 
              photo={contact.picture['medium']}
              name={contact.name['first'] + ' ' + contact.name['last']} 
              email={contact.email}
              phone={contact.cell}
              contact={contact}
              action={action}
              onDeleteContact={onDeleteContact}
              />
          })  
        }
      </div>
    );
}

export default CardList;

