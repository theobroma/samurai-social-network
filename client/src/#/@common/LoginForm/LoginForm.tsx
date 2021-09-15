import { Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import { InputGroup, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { FaEye, FaEyeSlash, FaLock, FaRegEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LoginPayload } from '../../../@store/auth/types';
import { validationSchema } from './yup';

interface LoginFormProps {
  captchaUrl?: string | null;
  submitCallback: (payload: LoginPayload) => void;
}

interface IValues {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string | undefined;
}

const LoginForm: React.FC<LoginFormProps> = ({
  captchaUrl = null,
  submitCallback,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const initialValues: IValues = {
    email: '',
    password: '',
    rememberMe: false,
    captcha: undefined,
  };
  const onSubmit = (values: IValues, props: FormikHelpers<IValues>) => {
    console.log(values);
    setTimeout(() => {
      submitCallback(values);
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
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
            <Form.Group controlId="formEmail">
              <Form.Label>Email адрес</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FaRegEnvelope />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="Введите email"
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={Boolean(touched.email && !errors.email)}
                  isInvalid={Boolean(touched.email && errors.email)}
                />
              </InputGroup>

              {touched.email && errors.email ? (
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              ) : null}
              {!touched.email ? (
                <Form.Text className="text-muted">
                  Не беспокойся за корректность! Мы верифицируем входные данные!
                </Form.Text>
              ) : null}
            </Form.Group>
            {/* =================================--Password--================================= */}
            <Form.Group controlId="formPassword">
              <Form.Label>Пароль</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FaLock />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={values.password}
                  placeholder="Пароль"
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={Boolean(touched.password && !errors.password)}
                  isInvalid={Boolean(touched.password && errors.password)}
                />
                <InputGroup.Append>
                  <InputGroup.Text
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      setShowPassword((prevShowPassword) => !prevShowPassword)
                    }
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
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
                  <Form.Text className="text-danger">
                    {errors.captcha}
                  </Form.Text>
                ) : null}
              </Form.Group>
            ) : null}
            <Form.Group>
              <div className="d-flex justify-content-center">
                <Button
                  className="w-100"
                  variant="primary"
                  disabled={isSubmitting}
                  type="submit"
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
                    'Sign in'
                  )}
                </Button>
              </div>
            </Form.Group>
            <Form.Group>
              <div className="text-center">
                <a href="https://social-network.samuraijs.com/signUp">
                  Регистрация
                </a>
              </div>
            </Form.Group>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
