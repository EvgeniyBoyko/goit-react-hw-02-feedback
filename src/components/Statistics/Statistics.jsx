import React from 'react';
import styles from './Statistics.module.css'
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={styles.list5b}>
            <li className={styles.text}>Good: {good}</li>
            <li className={styles.text}>Neutral: {neutral}</li>
            <li className={styles.text}>Bad: {bad}</li>
            <li className={styles.text}>Total: {total}</li>
            <li className={styles.text}>Positive feedback: {positivePercentage}%</li>
        </ul>
     );
}
 
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;