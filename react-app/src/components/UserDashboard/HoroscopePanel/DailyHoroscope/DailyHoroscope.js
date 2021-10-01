import { useState,useEffect } from "react"
import {Redirect, useHistory } from 'react-router-dom';
import { useSelector } from "react-redux"
import AddHoroscopeModal from "./AddHoroscopeModal"


const aztroJs = require("aztro-js")

const DailyHoroscope =({user}) =>{

    const [todaysHoro ,setTodaysHoro] =useState({})
    const signs = useSelector(state=>state.sunSigns)
    const history = useHistory()
    let userSign
    let sign
    if(user.sun_sign_id){
        userSign = signs[user?.sun_sign_id].sign
        sign = userSign.toLowerCase()
    }



    let property = 'description'

    useEffect(()=>{
        aztroJs.getTodaysHoroscope(sign, function(res) {
            setTodaysHoro(res)
        }, property)


    },[userSign])

    // const getYesterday

    const getToday = async () =>{

        //Get today's horoscope

    }


    const toHoroscopeFeed = ()=>{
        <Redirect to='/horoscope_feed'/>
        history.push('/horoscope_feed')
    }
if(user.sun_sign_id){
    return(
<>
<h2>
    Daily Horoscope
</h2>
<h4>
{`"${todaysHoro}"`}
</h4>
<div className="horoscope-buttons">
<button className="primary-button splash-feed"onClick={toHoroscopeFeed}>Horoscope Feed</button>
<AddHoroscopeModal horoscope={todaysHoro} userId={user?.id}/>
</div>
</>

    )
}else{
return(
        <>
    <h2>
        Daily Horoscope
    </h2>
    <h4>
    Calculate your SunSign to Get Daily Horoscope
    </h4>
    </>
)

}


}
export default DailyHoroscope
