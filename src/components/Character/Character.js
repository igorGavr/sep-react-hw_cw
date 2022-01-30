import css from './Character.module.css';

const Character = ({character: {image, name, status, gender}}) => {
    return (
        <div className={css.Character}>
            <div>
                <img src={image} alt=""/>
            </div>
            <div className={css.center}>
                <div>{name}</div>
                <div>{status}</div>
                <div>{gender}</div>
            </div>
        </div>
    );
};

export {Character};
