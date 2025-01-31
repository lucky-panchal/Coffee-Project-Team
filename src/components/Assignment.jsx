import React, { useState } from 'react';

const Assignment = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const [submit, setsubmit] = useState({});
    

    const SubmitFinal = (e) => {
        e.preventDefault();
        const detail = { name, email, message };
        setsubmit(detail);
        setname("");
        setemail("");
        setmessage("");
       
    };

    return (
        <div >

            <form onSubmit={SubmitFinal}>
                <div >
                    <label Form="name" >Name:</label>
                    <input
                       
                        type="text"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required
                    />
                </div>
                <div className='flex space-x-2'>
                    <label Form="email" className="block text-sm font-medium text-white-700">Email:</label>
                    <input
                       
                        type="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required

                    />
                </div>
                <div className='flex space-x-2'>
                    <label Form="message" >Message:</label>
                    <textarea
                        
                        value={message}
                        onChange={(e) => setmessage(e.target.value)}
                        required
                    />
                                {submit.name && (
                <button onClick={() => console.log(submit)}>
                    <h2 >Submitted Data:</h2>
                    <p><strong>Name : </strong> {submit.name}</p>
                    <p><strong>Email : </strong> {submit.email}</p>
                    <p><strong>Message : </strong> {submit.message}</p>
                </button>
            )}
                </div>
                <button id="submit" type="submit"><strong>Submit</strong></button>
            </form>
            




        </div>  
    );
};

export default Assignment;