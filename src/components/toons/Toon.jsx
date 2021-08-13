import React from 'react';
import PropTypes from 'prop-types';

const Toon = ({ name, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);

Toon.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};


export default Toon;
