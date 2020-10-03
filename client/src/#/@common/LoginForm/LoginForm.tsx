import React, { useCallback, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Formik } from 'formik';
import { LoginPayload } from '../../../@store/auth/types';
import { validationSchema } from './yup';

interface LoginForm {
  error?: string | null;
  captchaUrl?: string | null;
  submitCallback: (payload: LoginPayload) => void;
}

const LoginForm: React.FC<LoginForm> = ({
  captchaUrl,
  submitCallback,
  error,
}) => {
  const [wait, setWait] = useState(false);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
        captcha: undefined,
      }}
      onSubmit={(values) => {
        submitCallback(values);
      }}
      validationSchema={validationSchema}
    >
      {({
        handleSubmit,
        handleChange,
        // handleBlur,
        values,
        touched,
        errors,
      }) => (
        // @ts-ignore
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email адрес</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              placeholder="Введите email"
              required
              onChange={handleChange}
              isValid={touched.email && !errors.email}
            />
            {touched.email && errors.email ? (
              <Form.Text className="text-danger">{errors.email}</Form.Text>
            ) : null}
            {!touched.email ? (
              <Form.Text className="text-muted">
                Не беспокойся за корректность! Мы верифицируем входные данные!
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              placeholder="Пароль"
              required
              onChange={handleChange}
              isValid={touched.password && !errors.password}
            />
            {touched.password && errors.password ? (
              <Form.Text className="text-danger">{errors.password}</Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group controlId="formCheckbox">
            <Form.Check
              type="checkbox"
              label="Запомнить меня"
              name="rememberMe"
              checked={values.rememberMe}
              onChange={handleChange}
            />
          </Form.Group>
          {captchaUrl ? (
            <Form.Group controlId="formCaptcha">
              <Form.Label>Проверочка на робота</Form.Label>
              <div className="d-flex justify-content-center mb-3">
                <Image src={captchaUrl} fluid />
              </div>
              <Form.Control
                type="text"
                placeholder="Введи символы с картинки"
                name="captcha"
                value={values.captcha}
                required
                onChange={handleChange}
                isValid={touched.captcha && !errors.captcha}
              />
              {touched.captcha && errors.captcha ? (
                <Form.Text className="text-danger">{errors.captcha}</Form.Text>
              ) : null}
            </Form.Group>
          ) : null}
          <Form.Group>
            <div className="d-flex justify-content-center">
              {error && wait ? (
                <Button
                  className="w-100"
                  variant="danger"
                  disabled
                  type="submit"
                >
                  {error}
                </Button>
              ) : (
                <Button
                  className="w-100"
                  variant="primary"
                  disabled={false}
                  type="submit"
                >
                  Войти
                </Button>
              )}
            </div>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
