import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReviewsListItem from '../ReviewsList/ReviewsListItem';
import styles from '../ReviewsList/ReviewsList.module.css';

const ReviewsList = props => {
  const [reviewItems, setReviewItems] = useState([]);

  // useEffect(async () => {
  //   const reviews = await getReviews();
  //   setReviewItems(reviews);
  // }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.reviewList}>
        {reviewItems.map(review => {
          return <ReviewsListItem review={review} />;
        })}
      </ul>
    </div>
  );
};

export default ReviewsList;
