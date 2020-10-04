import React from 'react';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Button, Block } from './../../../components';
import {validationField} from '../../../utils/helpers'


const LoginForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, авторизуйтесь</p>
      </div>
      <Block>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item
            validateStatus={validationField('email', touched, errors)}
            help={!touched.email ? null : errors.email}
            hasFeedback>
            <Input
              id="email"
              prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large"
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={validationField('password', touched, errors)}
            help={!touched.password ? null : errors.password}
            hasFeedback>
            <Input
              id="password"
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
            {/* TODO isValid Error for form */}
            <Button onClick={handleSubmit} type="primary" size="large">
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to="/register" className="auth__register-link">
              Зарегистрироваться
            </Link>
          </Form.Item>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;
