import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleContainer.module.scss';

const ArticleContainer = (props) => (
  <section className={styles.ArticleContainer}>
    {
      (() => {
        if(props.title && props.url){
          return(
            <h2>
              <a href={props.url}>
                {props.title}
              </a>
            </h2>
          )
        } else if (props.title){
          return(
            <h2>
              {props.title}
            </h2>
          )
          
        }
      })()
    }
    <section>
      {props.children}
    </section>
  </section>
);

ArticleContainer.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
};

export default ArticleContainer;
