import React from 'react';
import Button from '../components/Button';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Cookies from 'universal-cookie';
import Axios from 'axios';
import './login.css';

const Login = () => {
  const url = 'http://localhost:1337/auth/local';
  const cookies = new Cookies();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Axios.post(url, {
      identifier: data.identifier,
      password: data.password,
    })
      .then((response) => {
        cookies.set('token', response.data.jwt);
        cookies.set('username', response.data.user.username);
        history.push('/');
      })
      .catch((error) => {
        console.log(
          'An error occurred:',
          error.response.data.message[0].messages[0].message
        );
        alert('Username/Email or Password is incorrect');
      });
  };

  return (
    <div className="bg">
      <div className="login-container">
        <div className="img-container">
          <div className="back">
            <Link to="/">
              <i className="fas fa-chevron-circle-left fa-2x"></i>
            </Link>
            <p>Back to Home</p>
          </div>

          <img
            src="images/undraw_online_shopping_re_k1sv.png"
            alt="illustration"
          />
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <h1>Login</h1>
            <div className="input-icons">
              <i className="fas fa-envelope"></i>
              <input
                className="input-field"
                type="text"
                placeholder="Username or Email"
                {...register('identifier', {
                  required: true,
                })}
              />
              {errors?.username?.type === 'required' && (
                <p>Please enter Username or Email</p>
              )}
            </div>
            <br />
            <div className="input-icons">
              <i className="fas fa-lock"></i>
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                {...register('password', {
                  required: true,
                })}
              />
              {errors?.username?.type === 'required' && (
                <p>Please enter your password</p>
              )}
            </div>
            <div>
              <input id="remember" className="cbox-field" type="checkbox" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Button value="Login" type="submit" />
            <div>
              <p>
                Don't have an account?
                <Link className="sign-up-link" to="/register">
                  <span> Sign Up Now</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
