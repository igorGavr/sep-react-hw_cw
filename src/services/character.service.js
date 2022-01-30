import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const characterService = {
    getCharactersByIds: (ids) => axiosService.get(`${urls.character}/${ids}`).then(value => value.data),
}
