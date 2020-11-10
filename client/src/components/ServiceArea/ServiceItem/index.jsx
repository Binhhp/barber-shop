import React from 'react'
import PropTypes from 'prop-types';

const ServiceItem = ({ item: { name, imgPath, id, description, price } }) => {
  console.log({ name, imgPath, id, description, price })
  return (
    <div className='single_service d-flex justify-content-between align-items-center'>
      <div className='service_inner d-flex align-items-center'>
        <div className='thumb'>
          <img src={imgPath} alt={description} />
        </div>
        <span>{ }</span>
      </div>
      <p>………………………..{price} VNĐ</p>
    </div>

  )
}

ServiceItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    imgPath: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
  })
}

export default ServiceItem
