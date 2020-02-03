import React, { useRef } from 'react';
import { useFormik } from 'formik'

export const LoginPage = () => {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validate: values => {
      const errors = {};
      const requiredFiledText = 'Заполните это поле';
      if(!values.username) errors.username = requiredFiledText;
      if(!values.password) errors.password = requiredFiledText;
      return errors;
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const passwordFieldRef = useRef(null);

  return (
    <div className="w-full min-h-full flex items-center justify-center">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Имя:</label>
        <input id="username" {...formik.getFieldProps('username')} />
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}
        <label htmlFor="password">Имя:</label>
        <input id="password" type="password" ref={passwordFieldRef} {...formik.getFieldProps('password')} />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <button type="submit">Войти</button>
      </form>
    </div>
    )
}
