import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Некорректный адрес почты')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(4, 'Минимальная длина пароля 4 символа')
    .required('Обязательное поле'),
  rememberMe: Yup.boolean().notRequired(),
  // НЕ ЗНАЮ КАК СДЕЛАТЬ ВАЛИДАЦИЮ, КОГДА ПОЯВЛЯЕТСЯ ОКОШКО
  captcha: Yup.string(),
});
