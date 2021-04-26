import React, { useState } from 'react';
import styles from '../InputForm/InputForm.module.css';

const InputForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const review = {
      username,
      content,
    };
    onSubmit(review);
    setUsername('');
    setContent('');
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.mainForm}>
        <label>
          <span className={styles.inputTitle}>Name:</span>
          <input
            name="name"
            value={username}
            placeholder="Your name"
            onChange={e => setUsername(e.target.value)}
            className={styles.input}
            required
          />
        </label>
        <label>
          <span className={styles.inputTitle}>Feedback:</span>
          <textarea
            name="feedback"
            placeholder="Type your message here..."
            value={content}
            onChange={e => setContent(e.target.value)}
            className={styles.inputMessage}
            required
          />
        </label>
        <button type="submit" className={styles.btn}>
          Add review
        </button>
      </form>
    </>
  );
};

export default InputForm;
