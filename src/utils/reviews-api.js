import axios from 'axios';

const fetchReviews = () => {
  return (
    axios
      // .get('http://localhost:8080/reviews')
      .get('https://stark-cove-66780.herokuapp.com/reviews')
      .then(response => response.data)
  );
};

const addReview = review => {
  return (
    axios
      // .post('http://localhost:8080/reviews', review)
      .post('https://stark-cove-66780.herokuapp.com/reviews', review)
      .then(response => response.data)
  );
};

export default { fetchReviews, addReview };
