import React from 'react';
import PropTypes from 'prop-types';
import BarberItem from './BarberItem';
import Slider from "react-slick"; 
import './styles.scss';
const settings = {
  // dots: true,
  infinite: false,
  speed: 500,
  slidesToScroll: 4,
  slidesToShow: 4
};
const SlideBarber = ({ barbers }) => {
  return (
    <Slider {...settings}
      >
      {barbers?.map((item) => (
          <BarberItem key={item.id} item={item} />
      ))}
    </Slider>
  );
};

SlideBarber.propTypes = {
  barbers: PropTypes.array.isRequired,
};

export default SlideBarber;
