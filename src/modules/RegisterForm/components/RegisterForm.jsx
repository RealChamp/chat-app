import React, {Component} from 'react'
import {Form, Input} from 'antd'
import {ExclamationCircleTwoTone,MailOutlined,
  UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import {Button, Block} from '../../../components'


class RegisterForm extends Component {
    render() {
        const success = false
        return (
          <div>
            <div className="auth__top">
              <h2>Регистрация</h2>
              <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
              {!success ? (
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <Form.Item validateStatus="success" hasFeedback>
                    <Input
                     prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                      size="large"
                      placeholder="E-mail"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input
                      prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                     size="large" placeholder="Ваше имя" />
                  </Form.Item>
                  <Form.Item>
                    <Input
                      prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                      size="large"
                      type="password"
                      placeholder="Пароль"
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
                    <Button type="primary" size="large">
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
}

export default RegisterForm