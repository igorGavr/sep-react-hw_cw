import {Link} from "react-router-dom";
import {Button} from "../Button/Button";
import css from './Episode.module.css';

const Episode = ({episode: {id, name, air_date, episode, characters}}) => {
    return (
        <div className={css.Episode}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Air date: {air_date}</div>
            <div>Episode: {episode}</div>
            <div className={'button'}>
            <Button to={`${id}/characters`} state={{name, characters}}>Characters</Button>
            </div>
        </div>
    );
};

export {Episode};
