import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom'
import './Signin.css'; 

function Signin() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // eslint-disable-next-line
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const res = await fetch('http://localhost:3030/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const resData = await res.json();
            console.log(resData);
            setUser(resData);

            if (resData.message) {
                toast.success(`${resData.message}`, {
                    position: "top-right"
                }); 
                
            } else {
                toast.error(`${resData.error}`, {
                    position: "top-right"
                });
            }
        } catch (error) {
            console.error("Error:", error.message || "Invalid API or no internet connection");
        }
    };



    return (
        <>
        <div className="signup">
            <h1 >Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('email', {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email format",
                        },
                    })}
                    type="text"
                    placeholder="Email..."

                />
                {errors.email && <p>{errors.email.message}</p>}

                <input
                    {...register('password', {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        },
                    })}
                    type="password"
                    placeholder="Password..."

                />
                {errors.password && <p>{errors.password.message}</p>}

                <span onClick={() => navigate('/validate')} >Forgot password?</span>
                <button type="submit">
                    Login
                </button>
                

            </form>
        </div>
        <ToastContainer />
        </>
    );
}

export default Signin;