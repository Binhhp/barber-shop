import React from 'react';
import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
const AppointmentForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {(formikProps) => {
        // do something here ...
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });
        return <Form></Form>;
      }}
    </Formik>
  );
};

AppointmentForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default AppointmentForm;
