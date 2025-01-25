import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './Validate.css';

const Validate = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const res = await fetch(`http://localhost:3030/validate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const resData = await res.json();
            console.log(resData);
            if (resData.message) {
                toast.success(`${resData.message}`, {
                    position: "top-right"
                });
                navigate('/forgotpass');
            } else {
                toast.error(`${resData.error}`, {
                    position: "top-right"
                });
            }
        } catch (error) {
            console.error(error.message || "Invalid API or no internet connection");
        }
    }

    return (
        <div className="container"> 
            <h1>Validate Email</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('email', {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email format"
                        }
                    })}
                    type="text"
                    placeholder='Enter your valid email'
                />
                {errors.email && <p>{errors.email.message}</p>}
                <button type='submit'>Check</button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Validate;