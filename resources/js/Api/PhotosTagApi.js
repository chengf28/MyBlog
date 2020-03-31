import { CONFIG } from "../config";
import Axios from "axios";

export default {
    getAllTags: function () {
        // console.log(CONFIG.photos.getTags);
        return Axios.get(CONFIG.photos.getTags);
    }
}