import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const CreatePost = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        await axios.post('http://localhost:3000/create-post', formData).then((response) => {
            navigate('/feed');
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
        })
          
    };

  return (
    <section className='create-post-section'>
             <h1>Create Post</h1> 

             <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <input type='file' name='image'  accept='image/*'/>
                <input type='text' name='caption' placeholder='Enter the Caption ' required/>
                <button type='submit'> Post</button>
             </form>
    </section>

  )}

export default CreatePost