import React from 'react';
import PropTypes from 'prop-types';

const Appointment = (props) => {
  return (
    <React.Fragment>
      {/* form itself end*/}
      <form id='test-form' className='white-popup-block mfp-hide'>
        <div className='popup_box '>
          <div className='popup_inner'>
            <h3>Make an Appointment</h3>
            <div className='row'>
              <div className='col-xl-6 col-md-6'>
                <input id='datepicker' placeholder='Date' />
              </div>
              <div className='col-xl-6 col-md-6'>
                <input id='timepicker' placeholder='time' />
              </div>
              <div className='col-xl-6 col-md-6'>
                <select className='form-select wide' id='default-select'>
                  <option data-display='Choose services'>
                    Choose services 1
                  </option>
                  <option value={1}>Choose services 2</option>
                  <option value={2}>Choose services 3</option>
                  <option value={3}>Choose services 4</option>
                </select>
              </div>
              <div className='col-xl-6 col-md-6'>
                <select className='form-select wide' id='default-select'>
                  <option data-display='Choose Barbers'>Choose Barbers</option>
                  <option value={1}>Zaki</option>
                  <option value={2}>Ronky</option>
                  <option value={3}>kalu</option>
                </select>
              </div>
              <div className='col-xl-6 col-md-6'>
                <input type='text' placeholder='Your name' />
              </div>
              <div className='col-xl-6 col-md-6'>
                <input type='text' placeholder='Phone no' />
              </div>
              <div className='col-xl-12'>
                <input type='email' placeholder='Your email' />
              </div>
              <div className='col-xl-12'>
                <button type='submit' className='boxed-btn3'>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* form itself end */}
    </React.Fragment>
  );
};

Appointment.propTypes = {};

export default Appointment;
