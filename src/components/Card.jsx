const Card = ({ name, universe, alterego, occupation, friends, superpowers, url }) => {
    return (
        <div>
            <p className="name">{name}</p>
            <p>Всенленная: {universe}</p>
            <p>Альтер-эго: {alterego}</p>
            <p>Род деятельности: {occupation}</p>
            <p>Друзья: {friends}</p>
            <p>Суперсилы: {superpowers}</p>
            <img src={url} alt="фото героя" />
        </div>
    );
};

export default Card;
