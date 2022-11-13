import React, { useState } from 'react';

const LessonFourPr2 = () => {
    const [user, setUser] = useState({
        
    });
        const handleInput = (event)=>{
            // console.log(event.target.value);
            setUser({...user,[event.target.name]:event.target.value});

        }
    return (
        <div>
            <>
                <div className="">
                    <h2>Name: {user.name} </h2>
                    <p>Email: {user.email} </p>
                </div>
                <div className="">
                     Name: <input onChange={(e)=>handleInput(e)} type="text" name="name" id="name" /><br />
                    Email: <input onChange={(e)=>handleInput(e)} type="text" name="email" id="email" />
                </div>
            </>        
        </div>
    );
};

export default LessonFourPr2;