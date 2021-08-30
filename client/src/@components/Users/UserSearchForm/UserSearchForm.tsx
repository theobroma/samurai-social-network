import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { UsersFilterType } from '../../../@types';

type Props = {
  handleSetUsersFilter: (filter: UsersFilterType) => void;
};

// cause need covertation to UsersFilterType
type FormType = {
  term: string;
  friend: 'null' | 'true' | 'false'; // in UsersFilterType it's boolean|null
};

export const UserSearchForm: React.FC<Props> = ({ handleSetUsersFilter }) => {
  const submit = (values: FormType, actions: FormikHelpers<FormType>) => {
    // convert string "friend" to boolean
    const friendConverted = (() => {
      if (values.friend === 'null') return null;
      if (values.friend === 'true') return true;
      return false;
    })();

    const filter: UsersFilterType = {
      term: values.term,
      friend: friendConverted,
    };

    handleSetUsersFilter(filter);
    actions.setSubmitting(false);
  };

  const initialValues: FormType = { term: '', friend: 'null' };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={submit}>
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
            {/* 2 */}
            <Form.Group controlId="friendSelect">
              {/* <Form.Label>Example select</Form.Label> */}
              <Form.Control
                as="select"
                name="friend"
                custom
                value={values.friend}
                onChange={handleChange}
              >
                <option value="null">All</option>
                <option value="true">Only followed</option>
                <option value="false">Only unfollowed</option>
              </Form.Control>
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
