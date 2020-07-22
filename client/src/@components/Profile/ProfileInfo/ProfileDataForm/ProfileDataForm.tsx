import React from 'react';
import { Formik } from 'formik';

interface Props {
  // any
}

export const ProfileDataForm: React.FC<Props> = (props) => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{
        fullName: '',
        aboutMe: '',
        lookingForAJob: '',
        lookingForAJobDescription: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="fullName"
            name="fullName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullName}
          />
          {errors.fullName && touched.fullName && errors.fullName}
          <input
            type="aboutMe"
            name="aboutMe"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.aboutMe}
          />
          {errors.aboutMe && touched.aboutMe && errors.aboutMe}

          <input
            type="lookingForAJob"
            name="lookingForAJob"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lookingForAJob}
          />
          {errors.lookingForAJob &&
            touched.lookingForAJob &&
            errors.lookingForAJob}

          <input
            type="lookingForAJobDescription"
            name="lookingForAJobDescription"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lookingForAJobDescription}
          />
          {errors.lookingForAJobDescription &&
            touched.lookingForAJobDescription &&
            errors.lookingForAJobDescription}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default ProfileDataForm;
