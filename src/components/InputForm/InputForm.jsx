import React, { useState, useEffect } from 'react';
import styles from '../InputForm/InputForm.module.css';

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <form onSubmit={this.handleSubmit}>
        <label>
          <span className={styles.inputTitle}>Name</span>
          <input
            name="name"
            value={name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </label>
      </form>

      <form>
        <label>
          <span className={styles.inputTitle}>Comment</span>
          <input
            name="inputValue"
            value={inputValue}
            onChange={this.handleChange}
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

  // state = {
  //   name: '',
  //   inputValue: '',
  // };
  // handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.addReview(this.state.name, this.state.inputValue);
  //   this.setState({ name: '', inputValue: '' });
  // };

  // render() {
  //   const { name, inputValue } = this.state;
  //   return (
  //     <>
  //       <form onSubmit={this.handleSubmit}>
  //         <label>
  //           <span className={styles.inputTitle}>Name</span>
  //           <input
  //             name="name"
  //             value={name}
  //             onChange={this.handleChange}
  //             className={styles.input}
  //             required
  //           />
  //         </label>
  //       </form>

  //       <form>
  //         <label>
  //           <span className={styles.inputTitle}>Comment</span>
  //           <input
  //             name="inputValue"
  //             value={inputValue}
  //             onChange={this.handleChange}
  //             className={styles.inputMessage}
  //             required
  //           />
  //         </label>
  //         <button type="submit" className={styles.btn}>
  //           Submit
  //         </button>
  //       </form>
  //     </>
  //   );
  // }
};

export default InputForm;
