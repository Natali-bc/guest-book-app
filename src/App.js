import React, { useState, useEffect } from 'react';
import reviewsApi from './utils/reviews-api';
import './App.css';
import InputForm from './components/InputForm/InputForm.jsx';
import ReviewsList from './components/ReviewsList/ReviewsList';
import AppBar from './components/AppBar/AppBar.jsx';
import Loader from './components/Loader/Loader';
import style from './components/InputForm/InputForm.module.css';

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
    reviewsApi.addReview(review).then(newReview => {
      setReviews([newReview, ...reviews]);
    });
  };

  return (
    <>
      <div className={style.container}>
        <AppBar />
        <InputForm onSubmit={handleSubmit} />
        <h2>Reviews</h2>
        {loading ? <Loader /> : null}
        {error?.Error ? <p>Error: {error.Error}</p> : null}
        <ReviewsList reviews={reviews} />
      </div>
    </>
  );
};

export default App;
