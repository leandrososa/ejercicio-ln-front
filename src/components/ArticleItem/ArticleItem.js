import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleItem.module.scss';

import defaultAuthor from '../../assets/img/default-author.png'

const ArticleItem = (props) => (
  <article className={styles.ArticleItem + `${props.type === "author" ? ' ' + styles.Author : ""}${props.highlight ? ' ' + styles.Highlight : ""}${props.half ? ' ' + styles.Half : ""}`}>
    { props.img && 
      <a href={props.url}>
        <img
          className={styles.Image}
          srcset={`${props.img.w320} 320w, ${props.img.w768} 768w`}
          src={props.img.w768}
          alt=""
          />
      </a>
    }
    <h3 className="title">
      <a href={props.url}>
        <em className="lead">{props.lead}.</em>
        &nbsp;{props.title}
      </a>
    </h3>
    
    {
      props.type === "regular" && props.body &&
      <p>
        <a href={props.url}>
          {props.body}
        </a>
      </p>
    }
    {
      props.type === "regular" && props.marquee &&
      <div className="marquee">
        <a href={props.url}>
          <b>
            {props.marquee}
          </b>
        </a>
      </div>
    }
    {
      (() => {
        if (props.type === "author" && props.author ){
          return(
            <section className={styles.AuthorData}>
              <a href={props.url}>
                <img src={defaultAuthor} alt="" />
                <div>
                  <b>
                    {props.author}
                  </b>
                </div>
              </a>
            </section>
          )
        }
      })()
    }
  </article>
);

ArticleItem.propTypes = {
  type: PropTypes.string,
  lead: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.object,
  body: PropTypes.string,
  marquee: PropTypes.string,
  author: PropTypes.string,
  avatar: PropTypes.string,
  url: PropTypes.string
};

ArticleItem.defaultProps = {
  type: 'regular',
  url: '#',
  avatar: defaultAuthor,
  highlight: false,
  half: false

};

export default ArticleItem;
