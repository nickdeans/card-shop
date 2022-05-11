import Card from 'react-bootstrap/Card'
import meImage from '../images/me.PNG'
import React from 'react';
import Layout from '../Layout/Layout';
import './about.styles.scss';
// import './login.scss'

const Login = () => {

  return (
    <div className="background-color-break-page">
    <Layout>
        <div className='product-list-container hello'>
            <Card>
                <h1>Login</h1>
                <form>
                    <input placeholder='username' />
                    <input placeholder='password' />
                    <button type='button'>Login</button>
                    <a href='/'>Forgot password?</a>
                    <a href='/'>Create a new Account</a>
                </form>
            </Card>
        </div>
    </Layout>
    </div>
  );
}

export default Login;