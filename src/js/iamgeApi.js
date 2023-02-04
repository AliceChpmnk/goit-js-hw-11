import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

class PixabayApi {
    static API_KEY = '33270646-2a362df9d3e750eb74e58aa3c';
    constructor() {
        this.searchQuery = "";
        this.page = 1;
     };

    async fetchImages() {
        const options = new URLSearchParams({
            q: this.searchQuery,
            per_page: 40,
            page: this.page,
            key: PixabayApi.API_KEY,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
        })

        const { data } = await axios(`?${options}`);
        this.incrementPage();
        return data;
    }

    get _searchQuery() {
        return this.searchQuery;
    }
    set _searchQuery(newQuery) {
        this.searchQuery = newQuery;
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }
}

export const imagesApi = new PixabayApi();