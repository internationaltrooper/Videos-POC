import axios from 'axios';

const KEY = 'AIzaSyC8CMZBG15lyA-EwOmgb6F0g-bv16Jv4Vw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
