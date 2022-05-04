import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

import {getCharactersIds} from "../../helpers";
import {characterService, episodeService} from "../../services";
import {Character} from "../../components";
import css from './Characters.module.css';

const Characters = () => {
    const {state} = useLocation();
    const {id} = useParams();

    const [episodeName, setEpisodeName] = useState(null);
    const [characters, setCharacters] = useState([]);

    const getCharactersData = async () => {
        if (state) {
            setEpisodeName(state.name)
            const ids = getCharactersIds(state.characters);
            const characters = await characterService.getCharactersByIds(ids);
            setCharacters(characters)
            return
        }

        const {name, characters: links} = await episodeService.getById(id);

        setEpisodeName(name)

        const ids = getCharactersIds(links);
        console.log(ids)
        const characters = await characterService.getCharactersByIds(ids);
        setCharacters(characters)
    }

    useEffect(() => {
        getCharactersData()
    }, [])

    return (
        <div>
            <h2 className={css.h1center}>{episodeName}</h2>
            <div className={css.Characters}>
                {characters.map(character => <Character key={character.id} character={character}/>)}
            </div>
        </div>
    );
};

export {Characters};
