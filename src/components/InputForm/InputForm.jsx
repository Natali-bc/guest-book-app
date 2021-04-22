import React, { useState, useEffect } from 'react';
import styles from '../InputForm/InputForm.module.css';

const InputForm = () => {
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const review = {
      username,
      content,
    };
  };

  return (
    <>
      <form onSubmit={handleSubmit} onReviewCreated={handleSubmit.review}>
        <label>
          <span className={styles.inputTitle}>Name</span>
          <input
            name="name"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className={styles.input}
            required
          />
        </label>
        <label>
          <span className={styles.inputTitle}>Comment</span>
          <input
            name="inputValue"
            value={content}
            onChange={e => setContent(e.target.value)}
            className={styles.inputMessage}
            required
          />
        </label>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </>
  );
};

export default InputForm;
