import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const KEY = '27888557-96adad5e55b58177e65876141';

export default async function getImages(query, page) {
  const BASE_SEARH_PARAMS = {
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page,
    q: query,
  };

  const response = await axios.get(API_URL, {
    params: BASE_SEARH_PARAMS,
  });

  return response.data;
}
