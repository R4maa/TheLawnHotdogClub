import './css/Feed.css'
import { postList } from './posts';

function Feed() {
  return (
  <>
    <div className='postMngr'>
        <Post postIndex={2}/>
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
            <div className='title'>
              <h2>{post.title}</h2>
              <div className='timeDate'>
                <p>Event Date: <b>{post.date}</b></p>
                <p>Time: <b>{post.time}</b></p>
              </div>
            </div>
          <div className='postInfo'>
            <p style={{ whiteSpace: "pre-line" }}>
              {post.desc}
            </p>
          </div>
        </div>
          <div className='imageBar'>
            <img src={post.img}></img>
          </div>
      </div>
    </>
  )

}