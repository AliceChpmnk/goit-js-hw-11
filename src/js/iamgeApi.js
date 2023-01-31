import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export class PixabayApi {
    static API_KEY = '33270646-2a362df9d3e750eb74e58aa3c';
    constructor() { };

    async fetchImages() {
        const options = new URLSearchParams({
            key: PixabayApi.API_KEY,
            q: 'cat',
            image_type: 'vector',
            orientation: 'horizontal',
            safesearch: 'true',
        })

        const {data} = await axios(`?${options}`);
        return data;
    }
}