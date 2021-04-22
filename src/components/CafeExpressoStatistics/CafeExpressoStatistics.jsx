import React, {Component} from "react";
import styles from './CafeExpressoStatistics.module.css';
// import PropTypes from 'prop-types';
import Section from '../Section/index';
import FeedbackOptions from '../FeedbackOptions/index';
import Statistics from '../Statistics/index';
import Notification from '../Notification/index';

class CafeExpressoStatistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    changeValue = (name) => {
        this.setState((state) => {
            const value = state[name];
            return {[name]: value + 1}
        });
    };

    changeTotalValue = () => {
        const totalValue = Object.values(this.state);
        const total = totalValue.reduce((acc, value) => acc + value);
        return total;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.changeTotalValue();
        if (!total) {
            return 0;
        }
        return ((good * 100) / total).toFixed(0);
    };
    
    render() {

        const { changeTotalValue, countPositiveFeedbackPercentage, changeValue } = this;

        return (
            <div className={styles.container}>
            <Section title="Pleace leave feedback">
                <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={changeValue}  />
            </Section>

            <Section title="Statistics">
                    {changeTotalValue() ? (<Statistics
                        {...this.state}
                        total={changeTotalValue()} 
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />) : (<Notification message="No feedback given"/>)}
            </Section>
            </div>
        );
    };
};

export default CafeExpressoStatistics;