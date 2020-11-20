import React from 'react';
import PropTypes from 'prop-types';
// Import Swiper React components
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import TimeItem from './TimeItem';
import './styles.scss';
import Slider from 'react-slick';

const settings = {
  className: 'center',
  infinite: false,
  centerPadding: '60px',
  slidesToShow: 5,
  rows: 4,

  swipeToSlide: true,
  afterChange: function (index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
    );
  },
};

const AppointmentTime = ({ listTime }) => {
  const gridTime = useSelector((state) => state.appointment.gridTime);
  // useEffect(() => {
  //   effect

  // }, [gridTime])
  return (
    <Slider {...settings}>
      {gridTime?.map((item) => (
        <TimeItem key={item.id} item={item} />
      ))}
    </Slider>
  );
};

AppointmentTime.propTypes = {
  listTime: PropTypes.array.isRequired,
};

export default AppointmentTime;
