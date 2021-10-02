
import  { useState} from 'react';
import { useSelector } from 'react-redux'
import LoginForm from '../auth/LoginFormModal/LoginForm';
import SunSign from './SunSignEmojiModal/SunSign';
import './SplashPanel.css'
import { Redirect , useHistory} from 'react-router-dom';
import SunSignEmojiModal from './SunSignEmojiModal';
import {crystalBall} from '../../images/crystal-ball-emoji-png-emoji-crystal-ball-png.png'
import CalculateSignModal from './CalculateSignModal';
function SplashPanel(){
const history = useHistory()
const [showLogin, setShowLogin] = useState(false)
const [birthDay,setBirthDay] = useState('')
// const [showSign, setShowSign]= useState(false)
const signs = useSelector(state => Object.values(state.sunSigns))
const user = useSelector(state=>state.session.user)


const toDashboard = () =>{

    <Redirect to={`/user_dashboard/${user.id}`}/>
    history.push(`/user_dashboard/${user.id}`)
}
const toHoroscopeFeed = () =>{
    <Redirect to="horoscope_feed"/>
    history.push('/horoscope_feed')
}
let userActions
if(!user){
userActions=(
    <>
     <div
     className="login-sect"
     >

     <LoginForm/>
     </div>
     </>
)
}else{

  userActions=(
  <div
  className="user-actions"
  >
    <button
    onClick={toDashboard}
    className='primary-button user-actions'
    >
        User Dashboard
    </button>
    <button
    onClick={toHoroscopeFeed}
    className='primary-button user-actions'
    >
        Horoscope Feed
    </button>
    </div>
    )
}

    return(
        <>
        {/* <div>
        <h1>
           ARIES
        </h1>
        <h1>
            TAURUS
        </h1>
        <h1>
           GEMINI
        </h1>
        <h1>
            CANCER
        </h1>
        <h1>
            LEO
        </h1>
        <h1>
            VIRGO
        </h1>
        <h1>
           LIBRA
        </h1>
        <h1>
            SCORPIO
        </h1>
        <h1>
            SAGITTARIUS
        </h1>
        <h1>
            CAPRICORN
        </h1>
        <h1>
            AQUARIUS
        </h1>
        <h1>
            PISCES
        </h1>
        </div> */}


        <div  className="splash-container">


        <h2
        id="click-header"

        > Click On Your Sign </h2>
    <div className="splash-wrapper">


    <section className="sign-wrapper">

    {signs && signs?.map((sign)=>(

             <SunSignEmojiModal sign={sign}/>
    ))}
     </section>

     </div>

     <CalculateSignModal/>

     </div>

    {userActions}

       </>
    )
}

export default SplashPanel
