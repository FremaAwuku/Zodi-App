
import  { useState} from 'react';
import { useSelector } from 'react-redux'
import LoginFormModal from '../auth/LoginFormModal';
import SunSign from './SunSignEmojiModal/SunSign';
import './SplashPanel.css'
import { Redirect , useHistory} from 'react-router-dom';
import SunSignEmojiModal from './SunSignEmojiModal';
import {crystalBall} from '../../images/crystal-ball-emoji-png-emoji-crystal-ball-png.png'
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
        <div  className="splash-container">
    <div className="splash-wrapper">

    <section className="sign-wrapper">
    {signs && signs?.map((sign)=>(

             <SunSignEmojiModal sign={sign}/>
    ))}
     </section>


     {/* </div> */}



     <button className="primary-button
     crystal-ball"onClick={toHoroscopeFeed}>Horoscope Feed</button>
     <LoginFormModal showLogin={showLogin}
    setShowLogin={setShowLogin}
    />
     </div>
     </div>
    )
}

export default SplashPanel
