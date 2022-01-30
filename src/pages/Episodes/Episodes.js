import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {episodeService} from "../../services";
import {Episode, Paginator} from "../../components";
import css from './Episodes.module.css';

const Episodes = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState({});


    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }

        const page = searchParams.get('page');

        episodeService.getAll(page).then(value => {
            setEpisodes([...value.results])
            setInfo({...value.info})
        })
    }, [searchParams])

    return (
        <div>
            <div className={css.items}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.paginator}>
                <Paginator info={info}/>
            </div>
        </div>
    );
};

export {Episodes};
