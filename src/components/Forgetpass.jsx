import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Forgetpass = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [userId, setUserId] = useState(); 


  useEffect(() => {
    const fetchUserId = async () => {
      const email = 'anmol@gmail.com'; 
      const response = await fetch(`http://localhost:3030/validate?email=${email}`);
      const data = await response.json();
      if (response.ok && data.userId) {
        setUserId(data.userId);
      } else {
        toast.error(data.error || "User not found", { position: "top-right" });
      }
    };
    
    fetchUserId();
  }, []);

  const onSubmit = async (data) => {
    if (!userId) {
      toast.error("User  ID is not available", { position: "top-right" });
      return;
    }
    
    try {
      const checkOldPasswordRes = await fetch(`http://localhost:3030/check-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, oldpass: data.oldpass }),
      });

      const checkOldPasswordData = await checkOldPasswordRes.json();

      if (!checkOldPasswordData.isValid) {
        toast.error("Old password is incorrect", { position: "top-right" });
        return;
      }
      if (checkOldPasswordData.isValid) {
        toast.success("Old password is correct", { position: "top-right" });
        return;
      }
      

     
      const updatePasswordRes = await fetch(`http://localhost:3030/update/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newpass: data.newpass }),
      });

      const updatePasswordData = await updatePasswordRes.json();

      if (updatePasswordData.message) {
        toast.success(`${updatePasswordData.message}`, { position: "top-right" });
      } else {
        toast.error(`${updatePasswordData.error}`, { position: "top-right" });
      }
    } catch (error) {
      console.error("Error:", error.message || "Invalid API or no internet connection");
    }
  };

  const newPassword = watch('newpass');

  return (
    <div>    
      <h1>Forgot Password</h1><br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          {...register('oldpass', {
            required: "Old Password Required",
            minLength: {
              value: 6,
              message: "Password Must Be Atleast 6 Characters."
            }
          })} 
          type="password" 
          placeholder='Enter your old password' 
        />
        {errors.oldpass && <p>{errors.oldpass.message}</p>}
        <br /><br />

        <input 
          {...register('newpass', {
            required: "New Password Required",
            minLength: {
              value: 6,
              message: "Password Must Be Atleast 6 Characters."
            }
          })} 
          type="password" 
          placeholder='Enter your new password' 
        />
        {errors.newpass && <p>{errors.newpass.message}</p>}
        <br /><br />

        <input 
          {...register('confirmpass', {
            required: "Please confirm your new password",
            validate: value => value === newPassword || "Passwords do not match"
          })} 
          type="password" 
          placeholder='Confirm your new password' 
        />
        {errors.confirmpass && <p>{errors.confirmpass.message}</p>}
        <br /><br />

        <button type='submit'>Update Password</button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Forgetpass