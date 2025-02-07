import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:3030/register", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const resData = await res.json();

      if (resData.message) {
        toast.success(`${resData.message}`, {
          position: "top-left"
        });
        




        navigate('/login');
      } else {
        toast.error(`${resData.error}`, {
          position: "top-right"
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.', {
        position: "top-right"
      });
    }
  }

  return (
    <>
      <div className='h2'><h2>Register</h2></div>
      <div className="signup">

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="userbox"
            {...register('email', {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format"
              }
            })}
            type="text"
            placeholder="Email..."
          />
          {errors.email && <p>{errors.email.message}</p>}

          <input
            className="userbox"
            {...register('password', {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
            type="password"
            placeholder="Password..."
          />
          {errors.password && <p>{errors.password.message}</p>}

          <span onClick={() => navigate('/login')} >Do You Have Already An Account?</span>
          <button type="submit">
            Register
          </button>

        </form>

      </div>
      <ToastContainer />
    </>

  );
}

export default Signup;