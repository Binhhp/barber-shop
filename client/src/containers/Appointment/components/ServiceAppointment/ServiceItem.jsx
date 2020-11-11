import React from 'react'
import PropTypes from 'prop-types'

const ServiceItem = ({ item: { id, imgPath, description, name } }) => {
  return (
    <div className='col-md-6'>
      <input type="radio" name='service-appointment' />
      <div className='thumb'>
        <img src={imgPath} alt={description} />
      </div>
      <span>{name}</span>
    </div>
  )
}

ServiceItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    imgPath: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string
  })
}

export default ServiceItem
