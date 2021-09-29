
import  { useState} from 'react';
import { useSelector } from 'react-redux'
import LoginFormModal from '../auth/LoginFormModal';
import SunSign from '../SunSign';
import './SplashPanel.css'
import { Redirect , useHistory} from 'react-router-dom';

function SplashPanel(){
const history = useHistory()
const [showLogin, setShowLogin] = useState(false)
// const [showSign, setShowSign]= useState(false)
const signs = useSelector(state => Object.values(state.sunSigns))

    const toHoroscopeFeed = ()=>{
        <Redirect to='/horoscope_feed'/>
        history.push('/horoscope_feed')
    }
    return(
    <>
    <div className="splash-container">

    <LoginFormModal showLogin={showLogin}
    setShowLogin={setShowLogin}

    />
    <div   className="sign-container">
    <section className="sign-wrapper">
    {signs && signs?.map((sign)=>(
             <SunSign sign={sign}/>
    ))}
     </section>
     </div>
     <button className="primary-button splash-feed"onClick={toHoroscopeFeed}>Horoscope Feed</button>
     </div>
    </>
    )
}

export default SplashPanel
