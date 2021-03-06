import React from 'react';
import styles from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({message}) => {
    return (
        <div className={styles.ex10}>
            <h3 className={styles.text2}>{message}</h3>
        </div>
     );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
 
export default Notification;