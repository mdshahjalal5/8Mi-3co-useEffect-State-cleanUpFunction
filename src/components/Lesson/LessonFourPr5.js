import React, { useState } from 'react';

const LessonFourPr5 = () => {
    const [user, setUser] = useState({});
    const handleInput = (event) =>{
        setUser((prvState) =>{
            return {...prvState, [event.target.name]:event.target.value}
        })
    }
    return (
        <>
            <div>
            <h2>Name: {user.name} </h2>
            <p>Email: {user.email  } </p>
        </div>
        <div className="">
            Name: <input onChange={(e)=>handleInput(e)} type="text" name="name" id="name" placeholder='name' /> <br />
            Email: <input onChange={(e)=>handleInput(e)} type="email" name="email" id="email"  placeholder='email' />
        </div>
        
        </>
    );
};

export default LessonFourPr5;