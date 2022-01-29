import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {episodeService} from "../../services";
import {Episode} from "../../components";
import {Paginator} from "../../components/Paginator/Paginator";
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

    const next = () => {
        const newPage = `${+searchParams.get('page') + 1}`;
        setSearchParams({page: newPage})
    }

    return (
        <div className={css.Episodes}>
            <div className={'items'}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={'paginator'}>
                <Paginator info={info}/>
            </div>
        </div>
    );
};

export {Episodes};
