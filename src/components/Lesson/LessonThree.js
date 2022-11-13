import React, { useState } from 'react';

const LessonThree = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <div>
            <h2>Name: &nbsp;{  name} </h2>
            <p>Email: {email}</p>
            <br />
            <label htmlFor="">Name: <input onChange={(e)=>setName(e.target.value)} type="text" /></label>
                <br />
            <label onChange={(any)=>setEmail(any.target.value)} htmlFor="">Email: <input type="password" /></label>
        </div>
    );
};

export default LessonThree;