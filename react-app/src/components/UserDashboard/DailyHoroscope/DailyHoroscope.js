import { useState,useEffect } from "react"
import { useSelector } from "react-redux"
import AddHoroscopeModal from "./AddHoroscopeModal"


const aztroJs = require("aztro-js")

const DailyHoroscope =({user}) =>{

    const [todaysHoro ,setTodaysHoro] =useState({})
    const signs = useSelector(state=>state.sunSigns)
    const userSign = signs[user.sun_sign_id].sign

    let sign = userSign.toLowerCase()
    let property = 'description'

    useEffect(()=>{
        aztroJs.getTodaysHoroscope(sign, function(res) {
            setTodaysHoro(res)
        }, property)


    },[])

    // const getYesterday

    const getToday = async () =>{

        //Get today's horoscope

    }




    return(
<>
<h1>
    Daily Horoscope
</h1>
<h2>
{`"${todaysHoro}"`}
</h2>
<AddHoroscopeModal horoscope={todaysHoro} userId={user?.id}/>
</>

    )

}
export default DailyHoroscope
