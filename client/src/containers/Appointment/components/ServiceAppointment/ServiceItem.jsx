import React from 'react';
import PropTypes from 'prop-types';

const ServiceItem = ({ item: { id, imgPath, description, name } }) => {
  return (
    <div>
      <img src={imgPath} alt={description} /> &nbsp;
      <span>{name}</span>
    </div>
  );
};

ServiceItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    imgPath: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default ServiceItem;
