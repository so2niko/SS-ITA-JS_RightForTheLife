import React, { useState } from 'react';
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
  });

  const [isPasswordCanBeSeen, setIsPasswordCanBeSeen] = useState(false);

  const handleShowPasswordButtonClick = (event) => {
    event.preventDefault();
    setIsPasswordCanBeSeen(!isPasswordCanBeSeen);
  }

  return (
    <div className="w-full min-h-full flex items-center justify-center">
      <form onSubmit={formik.handleSubmit} className="flex-grow max-w-xs text-lightgray-700">
        <h1 className="text-3xl font-medium mb-8 ml-2  ">Добро пожаловать!</h1>
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block ml-2"
          >
            Имя:
          </label>
          <input
            id="username"
            className="block w-full rounded-full h-10 px-4 text-lg font-medium focus:outline-none"
            {...formik.getFieldProps('username')}
          />
          <div className="ml-2 text-xs text-red-600 h-1">
          {formik.touched.username && formik.errors.username ? formik.errors.username : null}
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block ml-2"
          >
            Пароль:
          </label>
          <div className="relative">
            <input
              id="password"
              type={isPasswordCanBeSeen ? 'text' : 'password'}
              className="block w-full rounded-full h-10 px-4 text-lg font-medium focus:outline-none"
              {...formik.getFieldProps('password')}
            />
            <button
              onClick={handleShowPasswordButtonClick}
              className="h-10 w-10 rounded-full absolute right-0 top-0 flex items-center justify-center cursor-pointer focus:outline-none"
            >
              <i className={`far ${isPasswordCanBeSeen ? 'fa-eye-slash' : 'fa-eye'}`} />
            </button>
          </div>
          <div className="ml-2 text-xs text-red-600 h-1">
            {formik.touched.password && formik.errors.password ? formik.errors.password : null}
          </div>
        </div>
        <div className="text-red-600 text-center mb-6 font-medium">Неверный логин или пароль</div>
        <button
          type="submit"
          className="bg-orange-300 hover:bg-orange-400 text-orange-700 font-bold py-3 px-4 rounded-xl focus:outline-none block ml-auto"
        >Войти
        </button>
      </form>
    </div>
    )
}
