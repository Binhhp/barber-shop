import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import { useSelector } from 'react-redux';

const HistoryAppointment = (props) => {
  const historyAppointment = useSelector((state) => state.home.history);
  return (
    <React.Fragment>
      <Header isHome={false} title='History Appointment' />
      <section className='contact-section'>
        <div className='container'>
          <div className='d-none d-sm-block mb-5 pb-4'></div>
          <div className='row'>
            <div className='col-12'>
              <h2 className='contact-title'>History Appointment</h2>
            </div>
            <div className='col-lg-12'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th scope='col'>Date</th>
                    <th scope='col'>Time</th>
                    <th scope='col'>Service</th>
                    <th scope='col'>Barber</th>
                  </tr>
                </thead>
                <tbody>
                  {historyAppointment?.map((item) => (
                    <tr>
                      <th scope='row'>{item.date}</th>
                      <td>{item.time}</td>
                      <td>{item.service}</td>
                      <td>{item.barber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

HistoryAppointment.propTypes = {};

export default HistoryAppointment;
