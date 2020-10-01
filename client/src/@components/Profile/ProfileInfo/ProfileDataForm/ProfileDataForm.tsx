import React from 'react';
import { Formik, FormikProps } from 'formik';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { ProfileType } from '../../../../@types';

interface OtherProps {
  submitCallback: (payload: any) => void;
  profile: ProfileType;
}

// TODO:
interface FormValues {
  fullName: any;
  aboutMe: any;
  lookingForAJob: any;
  lookingForAJobDescription: any;
  // profile: ProfileType;
}

export const ProfileDataForm: React.FC<OtherProps> = ({
  submitCallback,
  profile = {
    fullName: '',
    aboutMe: '',
    lookingForAJob: false,
    lookingForAJobDescription: '',
  },
}) => (
  <div>
    <Formik
      enableReinitialize
      initialValues={profile}
      onSubmit={(values, { setSubmitting }) => {
        submitCallback(values);
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
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
        // @ts-ignore
        <Form noValidate onSubmit={handleSubmit}>
          {/* 1 */}
          <Form.Group controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              // @ts-ignore
              value={values.fullName}
              placeholder="Введите full name"
              required
              onChange={handleChange}
              isValid={touched.fullName && !errors.fullName}
            />
            {touched.fullName && errors.fullName ? (
              <Form.Text className="text-danger">{errors.fullName}</Form.Text>
            ) : null}
            {!touched.fullName ? (
              <Form.Text className="text-muted">
                Не беспокойся за корректность! Мы верифицируем входные данные!
              </Form.Text>
            ) : null}
          </Form.Group>
          {/* 2 */}
          <Form.Group controlId="aboutMe">
            <Form.Label>About Me</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              // type="text"
              name="aboutMe"
              // @ts-ignore
              value={values.aboutMe}
              placeholder="Введите aboutMe"
              required
              onChange={handleChange}
              isValid={touched.aboutMe && !errors.aboutMe}
            />
            {touched.aboutMe && errors.aboutMe ? (
              <Form.Text className="text-danger">{errors.aboutMe}</Form.Text>
            ) : null}
          </Form.Group>
          {/* 3 */}
          <Form.Group controlId="lookingForAJob">
            {/* <Form.Label>lookingForAJob</Form.Label> */}
            <Form.Check
              type="checkbox"
              label="Looking for a job"
              name="lookingForAJob"
              // @ts-ignore
              checked={values.lookingForAJob}
              onChange={handleChange}
            />
          </Form.Group>
          {/* 4 */}
          <Form.Group controlId="lookingForAJobDescription">
            <Form.Label>My professional skills</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              // type="text"
              name="lookingForAJobDescription"
              // @ts-ignore
              value={values.lookingForAJobDescription}
              placeholder="My professional skills"
              required
              onChange={handleChange}
              isValid={
                touched.lookingForAJobDescription &&
                !errors.lookingForAJobDescription
              }
            />
            {touched.lookingForAJobDescription &&
            errors.lookingForAJobDescription ? (
              <Form.Text className="text-danger">
                {errors.lookingForAJobDescription}
              </Form.Text>
            ) : null}
          </Form.Group>
          <div className="option-subheading">Contacts</div>

          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="mr-3"
          >
            Submit
          </Button>

          {/* <Button type="submit" variant="secondary" disabled={isSubmitting}>
            Cancel
          </Button> */}
        </Form>
      )}
    </Formik>
  </div>
);

export default ProfileDataForm;
