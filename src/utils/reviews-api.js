import axios from 'axios';

const fetchReviews = () => {
  return axios
    .get('http://localhost:8080/reviews')
    .then(response => response.data);
};

const addReview = review => {
  return axios
    .get('http://localhost:8080/reviews', review)
    .then(response => response.data);
};

export default { fetchReviews, addReview };
