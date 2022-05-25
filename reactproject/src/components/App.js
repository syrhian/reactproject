import banner from './banner'
import logo from '../assets/logo_wt.webp'
import Tabframe from "./tabframe";


function App() {
  return (
      <div>
        <banner>
            <img src={logo} alt='logo-wt' className='wt-logo' />
          <h1 className='wt-title'>Warframe Tracker</h1>
        </banner>
          <Tabframe />
      </div>
  )
}

export default App