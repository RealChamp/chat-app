import React from 'react'
import {Form, Input} from 'antd'
import {ExclamationCircleTwoTone,MailOutlined,
  UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import {Button, Block} from '../../../components'

const success = false;

const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'} help={!touched.email ? null : errors.email } hasFeedback>
              <Input
              id='email'
               prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                size="large"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
               size="large" placeholder="Ваше имя" />
            </Form.Item>
            <Form.Item validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
            help={!touched.password ? null : errors.password }
            hasFeedback >
              <Input
                id='password'
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                size="large"
                type="password"
                placeholder="Пароль"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                size="large"
                type="password"
                placeholder="Повторите пароль"
              />
            </Form.Item>
            <Form.Item>
            {!isValid && 'Error'}
              <Button onClick={handleSubmit} type="primary" size="large">
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login" className="auth__register-link">
                Войти в аккаунт
              </Link>
            </Form.Item>
          </Form>
        ) : (
          <div className="auth__success-block">
            <ExclamationCircleTwoTone style={{fontSize: '50px'}} />
            <h3>Подтвердите свой аккаунт</h3>
            <p>На вашу почту отправлено письмо с сыллкой на подтверждение аккаунта</p>
          </div>
        )}
      </Block>
    </div>
  );
}

export default RegisterForm