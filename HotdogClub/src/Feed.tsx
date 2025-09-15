import './css/Feed.css'
import { postList } from './posts';

function Feed() {
  return (
  <>
    <div>
        <Post postIndex={1}/>
        <Post postIndex={0}/>
    </div>
  </>
  )
}

export default Feed


function Post( {postIndex} : {postIndex:any} ) {
  const post = postList[postIndex]; // Sets post index to project  
  
  return(
    <>
      <div className='postList'>  
        <div className='post'>
          <img src={post.img}></img>
          <div className='postInfo'>
            <h3>{post.title}</h3>
            <p>{post.date}</p>
            <p>{post.desc}</p>
          </div>
        </div>
      </div>
    </>
  )

}