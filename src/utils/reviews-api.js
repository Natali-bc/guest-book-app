import axios from 'axios';

const fetchReviews = () => {
  return axios
    .get('http://localhost:3000/reviews')
    .then(response => response.data);
};

const addReview = review => {
  return axios
    .post('http://localhost:3000/reviews', review)
    .then(response => response.data);
};

export default { fetchReviews, addReview };
