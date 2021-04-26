import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../AppBar/AppBar.module.css';
import icon from '../../icon/white-book-icon.jpg';

const AppBar = () => {
  const nodeRef = React.useRef(null);
  return (
    <div>
      <CSSTransition
        nodeRef={nodeRef}
        in={true}
        appear={true}
        timeout={1000}
        classNames={styles}
        unmountOnExit
      >
        <header ref={nodeRef} className={styles.appBar}>
          <h1> Welcome to guest book</h1>
          <img src={icon} alt="book" width="80" height="60" />
        </header>
      </CSSTransition>
    </div>
  );
};

export default AppBar;
