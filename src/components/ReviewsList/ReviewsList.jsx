import React, { useState, useEffect } from 'react';
import ReviewsListItem from '../ReviewsList/ReviewsListItem';
import styles from '../ReviewsList/ReviewsList.module.css';

const ReviewsList = ({ reviews }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.reviewList}>
        {reviews.map(review => {
          return <ReviewsListItem review={review} />;
        })}
      </ul>
    </div>
  );
};

export default ReviewsList;
