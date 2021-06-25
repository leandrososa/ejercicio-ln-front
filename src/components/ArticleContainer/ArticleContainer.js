import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleContainer.module.scss';

const ArticleContainer = (props) => (
  <div className={styles.ArticleContainer}>
    {props.children}
  </div>
);

ArticleContainer.propTypes = {};

ArticleContainer.defaultProps = {};

export default ArticleContainer;
