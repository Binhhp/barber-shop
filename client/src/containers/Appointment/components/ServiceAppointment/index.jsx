import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchServices } from '../../../HomePage/action';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Select from 'react-select';
import ServiceItem from './ServiceItem';
const ServiceAppointment = (props) => {
  const services = useSelector((state) => state.home.services);
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (services.length === 0) {
      dispatch(fetchServices());
    } else {
      const dt = [];
      services.map((service) =>
        dt.push({ value: service.id, label: <ServiceItem item={service} /> }),
      );
      setOptions(dt);
    }
  }, [services]);
  const handleChange = (value) => {
    console.log(value);
  };
  return (
    <div class='form-group service'>
      <h4 className='title-steps'>4. Services</h4>
      <div class='form-group'>
        <div className='row'>
          <Select
            className='w-100'
            // value={selectedOption}
            onChange={handleChange}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

ServiceAppointment.propTypes = {};

export default ServiceAppointment;
