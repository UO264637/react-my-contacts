const CardList = ({contacts}) => {
    return (
      <div>
        {
          contacts.map((contact, i) => {
            return <div>
              <h1>{contact.name['first'] + ' ' + contact.name['last']}</h1>
              <p>{contact.picture['medium']}</p>              
              <p>{contact.email}</p>
              <p>{contact.cell}</p>
            </div>
          })  
        }
      </div>
    );
}

export default CardList;

