import Card from 'react-bootstrap/Card'
import React from 'react';
import Layout from '../../Body/Layout/Layout';
import Button from 'react-bootstrap/Button'
import './login.scss'

const Login = () => {

  return (
    <div className="background-color-break-page">
    <Layout>
        <div className='product-list-container hello'>
            <Card className='register-card'>
                <h1>Login</h1>
                <form className="form-container-login">
                    <input className="inputs-login" placeholder='username' />
                    <input className="inputs-login" placeholder='password' />
                    <div className="login-btn-container">
                        <Button variant="dark" type='button'>Login</Button>
                    </div>
                    <div className="login-link-container">
                        <a href='/'>Forgot password?</a>
                        <a href='/register'>Create a new Account</a>
                    </div>
                </form>
            </Card>
        </div>
    </Layout>
    </div>
  );
}

export default Login;