import React, { useState, useEffect } from 'react';
import reviewsApi from './utils/reviews-api';
import style from './App.css';
import InputForm from './components/InputForm/InputForm.jsx';
import ReviewsList from './components/ReviewsList/ReviewsList';
import styles from './components/ReviewsList/ReviewsList.module.css';

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    reviewsApi
      .fetchReviews()
      .then(reviews => setReviews(reviews))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = review => {
    reviewsApi.addReview(review);
    addNewReview(review);
  };

  const addNewReview = review => {
    setReviews([review, ...reviews]);
  };
  return (
    <>
      <div className={style.container}>
        <h1> Welcome to guest book</h1>

        <InputForm onSubmit={handleSubmit} />
        <h2>Reviews</h2>
        <div className={styles.wrapper}>
          <ReviewsList reviews={reviews} />
        </div>
      </div>
    </>
  );
};

export default App;
