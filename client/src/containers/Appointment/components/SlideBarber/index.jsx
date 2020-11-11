import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import BarberItem from './BarberItem';
import './styles.scss';
const settings = {
  className: 'center',
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 5,
  swipeToSlide: true,
  afterChange: function (index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
    );
  },
};
const SlideBarber = ({ barbers }) => {
  return (
    <Slider {...settings}>
      {barbers?.map((item) => (
        <BarberItem item={item} />
      ))}
    </Slider>
  );
};

SlideBarber.propTypes = {
  barbers: PropTypes.array.isRequired,
};

export default SlideBarber;
