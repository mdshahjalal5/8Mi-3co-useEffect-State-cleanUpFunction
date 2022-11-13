import React, { useEffect, useState } from 'react';

const Lessson2 = () => {
    const [post, setPost] = useState({});
    const [random, setRandom] = useState(6 )
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${random}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    const handleNewPost = (b) =>{
        let rNumber = Math.ceil(Math.random()*10);
        
        setRandom(rNumber)
        console.log(random)
    }
    return (
        <div>
            <div>
                <h2>Post Title: <b>{post.title} </b> </h2>
                <p>Post body: <b>{post.body} </b> </p>
                <button onClick={handleNewPost}>New Post</button>
            </div>
        </div>
    );

};

export default Lessson2;