import React from 'react';
import shortid from 'shortid';
import styles from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const buttonElements = options.map(name => <button className={styles.btn} key={shortid.generate()} onClick={() => onLeaveFeedback(name)}>{name}</button>)
    return (
        <>
        {buttonElements}
        </>
     );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
 
export default FeedbackOptions;