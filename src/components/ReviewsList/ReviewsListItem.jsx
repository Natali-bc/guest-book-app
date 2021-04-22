import React from 'react';
// import 'dayjs/locale/es';
import styles from '../ReviewsList/ReviewsList.module.css';

const ReviewListItem = ({ review: { username, content } }) => {
  // const date = Date.now();
  return (
    <div className={styles.wrapper}>
      <li className={styles.reviewListItem}>
        <span>{username}</span>
        <span>{content}</span>
      </li>
    </div>
  );
};

export default ReviewListItem;
