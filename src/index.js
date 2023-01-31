import { PixabayApi } from './js/iamgeApi';
import {createGalletyMarkup, renderGalleryMarkup } from './js/renderFunction';
import { refs } from "./js/refs";


const imagesApi = new PixabayApi();
console.log(imagesApi.fetchImages());