import React from 'react';
import PropTypes from 'prop-types';

const setting = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 1,
  speed: 500,
  rows: 4,
  slidesPerRow: 5,
};
const AppointmentTime = ({ listTime }) => {
  return (
    <Slider {...setting}>
      {listTime?.map((item) => (
        <TimeItem item={item} />
      ))}
    </Slider>
  );
};

AppointmentTime.propTypes = {
  listTime: PropTypes.array.isRequired,
};

export default AppointmentTime;
