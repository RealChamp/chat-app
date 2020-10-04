import React from 'react'
import {Form, Input} from 'antd'
import {ExclamationCircleTwoTone,MailOutlined,
  UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import {Button, Block} from '../../../components'
import {validationField} from '../../../utils/helpers'

const success = false;

const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
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
            <Form.Item validateStatus={validationField('email', touched, errors)} help={!touched.email ? null : errors.email } hasFeedback>
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
            <Form.Item hasFeedback>
              <Input
                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
               size="large" placeholder="Ваше имя" />
            </Form.Item>
            <Form.Item validateStatus={validationField('password', touched, errors)}
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
            <Form.Item validateStatus={validationField('password', touched, errors)} hasFeedback>
              <Input
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                size="large"
                type="password2"
                placeholder="Повторите пароль"
              />
            </Form.Item>
            <Form.Item>
            {/* TODO isValid Error for form */}
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