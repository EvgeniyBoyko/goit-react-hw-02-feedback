import React from 'react';
import styles from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({title, children}) => {
    return (
        <div className={styles.d10}>  
            <h2 className={styles.title} title="">{title}</h2>
            {children}
        </div>
    );
}
 
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;