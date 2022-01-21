import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import Form from 'react-bootstrap/Form';
import { Button, Spinner } from 'react-bootstrap';
import { ProfileResponseType } from '../../../../@types';

interface IValues {
  // lookingForAJob: boolean | null;
  // lookingForAJobDescription: string | null;
  // aboutMe?: string | null;
  // fullName: string | null;
  lookingForAJob: any;
  lookingForAJobDescription: any;
  aboutMe?: any;
  fullName: any;
}

// type IValues = Partial<ProfileType>;

interface FormProps {
  submitCallback: (payload: any) => void;
  profile: ProfileResponseType;
  cancelCallback: () => void;
}

export const ProfileDataForm: React.FC<FormProps> = ({
  submitCallback,
  cancelCallback,
  profile = {
    fullName: '',
    aboutMe: '',
    lookingForAJob: false,
    lookingForAJobDescription: '',
  },
}) => {
  const onSubmit = (values: IValues, props: FormikHelpers<IValues>) => {
    console.log(values);
    // submitCallback(values);
    setTimeout(() => {
      submitCallback(values);
      // props.resetForm();
      props.setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={profile as any}
      onSubmit={onSubmit}
    >
      {(props) => {
        const {
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        } = props;
        return (
          <Form noValidate onSubmit={handleSubmit}>
            {/* 1 */}
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={values.fullName}
                placeholder="Введите full name"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                // isValid={touched.fullName && !errors.fullName}
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
                value={values.aboutMe}
                placeholder="Введите aboutMe"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                // isValid={touched.aboutMe && !errors.aboutMe}
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
                value={values.lookingForAJobDescription}
                placeholder="My professional skills"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                // isValid={ touched.lookingForAJobDescription && !errors.lookingForAJobDescription}
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
              {isSubmitting ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden ml-1">Loading...</span>
                </>
              ) : (
                'Submit'
              )}
            </Button>
            <Button
              variant="outline-secondary"
              disabled={isSubmitting}
              onClick={() => cancelCallback()}
            >
              Cancel
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ProfileDataForm;
