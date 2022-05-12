import Card from 'react-bootstrap/Card'
import meImage from '../images/me.PNG'
import React from 'react';
import Layout from '../Layout/Layout';
import './about.styles.scss';
import Button from 'react-bootstrap/Button'
// import './login.scss'

const Login = () => {

  return (
    <div className="background-color-break-page">
    <Layout>
        <div className='product-list-container hello'>
            <Card className='register-card'>
                <h1>Login</h1>
                <form className="form-container">
                    <input className="inputs" placeholder='username' />
                    <input className="inputs" placeholder='password' />
                    <div className="reister-btn-container">
                        <Button variant="dark" type='button'>Login</Button>
                    </div>
                    <div className="register-link-container">
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