import React from 'react';
import PropTypes from 'prop-types';
import styles from './LNHeader.module.scss';

const LNHeader = () => (
  <header>
    <div className="container">
      <div className="buttons buttons--left">
        <button type="button">
          <span>Secciones</span>
          <i className="icon icon--menu"></i>
        </button>
        <button type="button">
          <span>Buscar</span>
          <i className="icon icon--search"></i>
        </button>
      </div>
      <div className="logo">

      </div>
      <div className="buttons buttons--right">
        <button type="button">
          <span>Buscar</span>
        </button>
        <button type="button">
          <span>Buscar</span>
        </button>
      </div>
    </div>
  </header>
);

LNHeader.propTypes = {};

LNHeader.defaultProps = {};

export default LNHeader;
