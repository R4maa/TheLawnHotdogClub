import './css/App.css'
import Feed from './Feed.tsx'

function App() {
  return (
    <>
      <div className='background'>
        <img className='logo' src='TheLawnLogo.png'></img>
        <div className='flexbox'>
          <div className='feedbg'>
            <h1>Welcome to The Lawn Hotdog Club!</h1>
            <div style={{margin: "px"}}>
              <h2>@ Towers 1</h2>
              <h3>Room 718</h3>
            </div>

            <Feed />
          
          </div>
        </div>
      </div>
    </>
  )
}

export default App