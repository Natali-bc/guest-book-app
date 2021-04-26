import React from 'react';
import moment from 'moment';
import styles from '../ReviewsList/ReviewsList.module.css';

const ReviewListItem = ({ review: { username, content, date } }) => {
  const dateNow = moment(date).format('MMMM Do YYYY, h:mm:ss a');
  return (
    <li className={styles.reviewListItem}>
      <span className={styles.username}>{username}</span>

      <span className={styles.date}>{dateNow}</span>
      <span className={styles.content}>{content}</span>
    </li>
  );
};

export default ReviewListItem;
