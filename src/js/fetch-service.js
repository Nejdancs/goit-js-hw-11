import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const KEY = '2788855-96adad5e55b58177e65876141';

// export default async function getImages(query, page) {
//   const BASE_SEARH_PARAMS = {
//     key: KEY,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: 40,
//     page,
//     q: query,
//   };

//   const response = await axios.get(API_URL, {
//     params: BASE_SEARH_PARAMS,
//   });

//   return response.data;
// }

export default function getImages(query, page) {
  const BASE_SEARH_PARAMS = {
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page,
    q: query,
  };

  return axios
    .get(API_URL, {
      params: BASE_SEARH_PARAMS,
    })
    .then(response => response.data);
}
