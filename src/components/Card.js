const Card = ({name, email, photo, phone}) => {
    return (
        <div className='bg-light-blue dib br4 pa3 ma3 shadow-5 grow'>
            <img alt='{name}' src={photo} />
            <h2 className='f3 grow'>{name}</h2>
            <p className='f5 grow'>{email}</p>
            <p className='f5 grow'>{phone}</p>
        </div>
    );
}

export default Card;
