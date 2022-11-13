import React, { useState } from 'react';

const LessonFour = () => {
    const [user, setUser] = useState({
        name:'shahjalal', 
        email:'muhommodshahjalal@gmail.com'
    });
    console.log(user)
    const handleInput = (event) =>{
        // console.log(event.target.name,'event.target')
        setUser((current)=>{
            return {...current, [event.target.name]:event.target.value};
        })
    }
    return (
        <>
        <div> 
                <h2>Name: {user.name} </h2>
                <p>Email: {user.email} </p>
        </div>
        <div>
            <label htmlFor="">Name: <input name='name' onChange={(e)=> handleInput (e)} type="text" /></label>    <br />
            <label htmlFor="">Email: <input name='email' onChange={(e)=> handleInput (e)} type="text" /></label>    
        </div>
        </>
    );
};

export default LessonFour;