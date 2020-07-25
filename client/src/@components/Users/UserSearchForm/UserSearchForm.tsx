import React from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { UsersFilterType } from '../../../@types';

type Props = {
  handleSetUsersFilter: (filter: UsersFilterType) => void;
};

export const UserSearchForm: React.FC<Props> = ({ handleSetUsersFilter }) => {
  const submit = (values: any, { setSubmitting }: any) => {
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
    handleSetUsersFilter({ term: values.term, friend: null });
    setSubmitting(false);
  };

  return (
    <div>
      <Formik initialValues={{ term: '' }} onSubmit={submit}>
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
              {/* <Form.Label>Term</Form.Label> */}
              <Form.Control
                type="text"
                name="term"
                // @ts-ignore
                value={values.term}
                placeholder="Введите term"
                required
                onChange={handleChange}
                // isValid={touched.term && !errors.term}
              />
              {touched.term && errors.term ? (
                <Form.Text className="text-danger">{errors.term}</Form.Text>
              ) : null}
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="mr-3"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserSearchForm;
