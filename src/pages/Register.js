import React from 'react';
import Button from '../components/Button';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import './login.css';

const Register = () => {
  const history = useHistory();
  const url = 'http://localhost:1337/auth/local/register';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Axios.post(url, {
      username: data.username,
      email: data.email,
      password: data.password,
    })
      .then((response) => {
        // setToken(response.data.jwt);
        // dispatch(addToken(token));
        alert('register success');
        history.push('/login');
      })
      .catch((error) => {
        alert(error.response.data.message[0].messages[0].message);
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

          <img src="images/undraw_web_shopping_dd4l.png" alt="illustration" />
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <h1>Register</h1>
            <div className="input-icons">
              <i className="fas fa-user"></i>
              <input
                className="input-field"
                placeholder="Username"
                {...register('username', {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors?.username?.type === 'required' && (
                <p>Please enter username</p>
              )}
              {errors?.username?.type === 'maxLength' && (
                <p>Username cannot exceed 20 characters</p>
              )}

              {errors?.username?.type === 'pattern' && (
                <p>Alphabetical characters only</p>
              )}
            </div>
            <br />
            <div className="input-icons">
              <i className="fas fa-envelope"></i>
              <input
                className="input-field"
                type="text"
                placeholder="Email"
                {...register('email', {
                  required: true,
                })}
              />
              {errors?.email?.type === 'required' && (
                <p>Please enter your email</p>
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
              {errors?.password?.type === 'required' && (
                <p>Please enter your password</p>
              )}
            </div>
            <Button value="Register" type="submit" />
            <div>
              <Link className="login-link" to="/login">
                <p>Already have an account?</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
