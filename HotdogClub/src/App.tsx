import './App.css'
import Feed from './Feed.tsx'

function App() {
  return (
    <>
      <div className='background'>
        <img className='logo' src='TheLawnLogo.png'></img>
        <div className='feedbox'>
          <h1>Welcome to The Lawn Hotdog Club!</h1>
          <p>More to come soon!</p>
          <Feed />
        </div>
      </div>
    </>
  )
}

export default App