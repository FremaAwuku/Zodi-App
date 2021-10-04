import { useState,useEffect } from "react"

import { useSelector } from "react-redux"
import AddHoroscopeModal from "./AddHoroscopeModal"


const aztroJs = require("aztro-js")

const DailyHoroscope =({user}) =>{

    const [todaysHoro ,setTodaysHoro] =useState({})

    const [yesterday,setYesterday]=useState({})
    const [tomorrow,setTomorrow]=useState({})

    const [showToday,setShowToday]=useState(true)
    const [showYest,setShowYest]=useState(false)
    const [showTom,setShowTom]=useState(false)

    const signs = useSelector(state=>state.sunSigns)

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

        aztroJs.getTomorrowsHoroscope(sign, function(res) {
            setTomorrow(res)
        }, property)

        aztroJs.getYesterdaysHoroscope(sign, function(res) {
            setYesterday(res)
        }, property)


    },[userSign,aztroJs])

    const hideToday = ()=>{
        if(!showToday){
            setShowTom(false)
            setShowYest(false)
            setShowToday(true)
        }else{
            setShowToday(false)
        }
    }
    const hideTom =()=>{
        if(showTom){
            setShowTom(false)
        }else{
            setShowToday(false)
            setShowYest(false)
            setShowTom(true)
        }
    }

    const hideYest =()=>{
        if(showYest){
            setShowYest(false)
        }else{
            setShowToday(false)
            setShowTom(false)
            setShowYest(true)

        }
    }





if(user.sun_sign_id){
    return(
        <>
{showToday&&<div
className='horo-cont'
>

<div
id="today"
>
<h2>
    {`Today's Horoscope for ${userSign}`}
</h2>


<h4>
{`"${todaysHoro}"`}
</h4>


<AddHoroscopeModal horoscope={todaysHoro} userId={user?.id}/>

</div>
</div>}

{showTom&&<div
className='horo-cont'
>

<div
id="tom"
>
<h2>
{` Tomorrow's Horoscope for ${userSign}`}

</h2>


<h4>
{`"${tomorrow}"`}
</h4>


</div>
</div>}

{showYest&&<div
className='horo-cont'
>

<div
id="yest"
>
<h2>
{` Yesterdays's Horoscope for ${userSign}`}

</h2>


<h4>
{`"${yesterday}"`}
</h4>


</div>
</div>}

<div
className="user-controls">
    <button
    onClick={hideToday}
    className="horo-button"
    >
        Today
    </button>
    <button
    onClick={hideTom}
     className="horo-button"
    >
        Tomorrow
    </button>
    <button
    onClick={hideYest}
     className="horo-button"
    >
        Yesterday
    </button>
</div>
</>
    )
}else{
return(
        <div
        className='horo-cont'
        >
    <h4>
    Calculate your SunSign to Get Daily Horoscope
    </h4>
    </div>
)

}


}
export default DailyHoroscope
