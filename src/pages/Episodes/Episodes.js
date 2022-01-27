import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {episodeService} from "../../services";
import {Episode} from "../../components";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState(null);

    const {page} = useParams();

    useEffect(() => {
        episodeService.getAll(page).then(value => {
            setEpisodes([...value.results])
            setInfo({...value.info})
        })
    }, [page])

    return (
        <div>
            <div>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div>
                
            </div>
        </div>
    );
};

export {Episodes};
