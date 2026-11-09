import React , {useState , useEffect} from 'react'
import axios from 'axios'
const Feed = () => {
 
 const [posts , setPosts] = React.useState([
    {
        _id: 1,
        image: 'https://media.istockphoto.com/id/1990444472/photo/scandinavian-style-cozy-living-room-interior.jpg?s=612x612&w=0&k=20&c=qgzrs_4vKDrOVo6gVc0EVb9-PziE-REbV9DcM5ZAfig=',
        caption: 'This is the first post'
    }
 ])
 
  useEffect(() => {
     axios.get('http://localhost:3000/posts')
     .then((response) => {
               setPosts(response.data.posts);
    })},[])

    return (
    <section className='feed-section'>
        {
             posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className='post-card'>
                        <img src={post.imageurl || post.Image} alt='Post' />
                        <p>{post.Caption || post.caption || 'No caption available'}</p>
                    </div>))
                ) : (
                    <h1>No Post available</h1>
                )
        }
    </section>
  )
}

export default Feed