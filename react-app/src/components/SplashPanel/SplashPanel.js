
import React, { useState} from 'react';
import { useSelector } from 'react-redux'
import LoginForm from '../auth/LoginFormModal/LoginForm';

import './SplashPanel.css'
import { Redirect , useHistory} from 'react-router-dom';
import SunSignEmojiModal from './SunSignEmojiModal';

import CalculateSignModal from './CalculateSignModal';
import AboutMe from '../AboutMe';
import LoginFormModal from '../auth/LoginFormModal';
// import AboutMe from '../AboutMe';
function SplashPanel(){
const history = useHistory()

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

     <LoginForm className="login-splash"/>



)
}else{

  userActions=(
  <div
  className="user-actions"
  >
      <div
      id="user-bttn-container">
    <button
    onClick={toDashboard}
    className='primary-button user-actions '
    >
       💖User Dashboard 💖
    </button>
    <button
    onClick={toHoroscopeFeed}
    className='primary-button user-actions'
    >
       🔮 Horoscope Feed 🔮
    </button>
    </div>
    </div>
    )
}

    return(

<div
        className="main-splash-cont">

            <header id="zodi-app-header">
            <h1 >Zodi-App ✨</h1>
            {/* <img id="logo" src="https://zodiappbucket.s3.us-east-2.amazonaws.com/Frame+8.png" alt="Zodi-App Logo"></img> */}
            <LoginFormModal />
            </header>
        <div  className="splash-container">


        <h2 id="click-header">
        Choose Your Sign </h2>

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

            <AboutMe/>
    </div>


    )
}

export default SplashPanel
