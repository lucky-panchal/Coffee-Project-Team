import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div className="h-screen h-full bg-gradient-to-r from-purple-500 from-10% via-blue-500 via-50% to-yellow-500 to-90% ...">

            <form onSubmit={SubmitFinal} className=" h-screen p-6 rounded shadow-md  space-y-4">
                <div className='flex space-x-2'>
                    <label Form="name" className="block text-sm font-medium text-white-700">Name:</label>
                    <input
                       className="w-full md:w-96 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        type="text"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required
                    />
                </div>
                <div className='flex space-x-2'>
                    <label Form="email" className="block text-sm font-medium text-white-700">Email:</label>
                    <input
                        className="w-full md:w-96 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        type="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required

                    />
                </div>
                <div className='flex space-x-2'>
                    <label Form="message" className="block text-sm font-medium text-white-700">Message:</label>
                    <textarea
                        className="w-full md:w-96 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={message}
                        onChange={(e) => setmessage(e.target.value)}
                        required
                    />
                                {submit.name && (
                <button onClick={() => console.log(submit)}>
                    <h2 className='text-xl font-bold mb-2 '>Submitted Data:</h2>
                    <p><strong>Name : </strong> {submit.name}</p>
                    <p><strong>Email : </strong> {submit.email}</p>
                    <p><strong>Message : </strong> {submit.message}</p>
                </button>
            )}
                </div>
                <button id="submit" className="w-full bg-500 text-green py-2 rounded hover:bg-red-900" type="submit"><strong>Submit</strong></button>
            </form>
            
            <h1>
<Link to='/counter'>counter</Link>
</h1>

        </div>
    );
};

export default Assignment;