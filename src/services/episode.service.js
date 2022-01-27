import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const episodeService = {
    getAll:(page)=>axiosService.get(urls.episode, {params:{page}}).then(value => value.data)
}
