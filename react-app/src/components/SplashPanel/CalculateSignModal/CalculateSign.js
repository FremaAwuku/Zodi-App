import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"


function CalculateSign({setShowLogin}){


    const[fetchSuccess,setFetchSuccess]=useState(false)
    const[birthDay, setBirthDay]=useState('')
        const dispatch = useDispatch()
 //make a function that fetches CalcSign
//and returns a sign that will be the placeholder of the sign input
//Or user can choose from a drop down menu of pre populated signs
// const calculateSign = async (e) =>{

//     // const [showCalculated, set]
//     e.preventDefault()

//     const calcData = birthDay.split("-")
//     const calcMonth = Number(calcData[1])
//     const calcDate = Number(calcData[2])
//     // console.log(calcMonth,"<<<<<FRONT END MONTH")
//     // console.log(calcDate,"<<<<<<<<FRONT END MONTH")
//     const signCalc = await dispatch(calculateSunSign({
//         calcMonth,
//         calcDate
//     }))
//     console.log(signCalc)
//     // if(signCalc){

//     // setCalcSign(signCalc)
//     // setFetchSuccess(true)
//     // setFirstNameSign(signCalc?.id)
//     // }

// }

return(

   <div
    className='univ-modal-wrapper'>
        <form
        className='univ-form-wrapper'
        >
            <label>
                Enter Birth Day
            <input
            type="date"
            onChange ={(e)=>setBirthDay(e.target.value)}
            // placeholder={}
            //value={}
            // hidden={!showCalc}
            />
</label>
             <button
            // onClick={calculateSign}
             >
                    Calculate
                    </button>
    </form>
    </div>
)
}
export default CalculateSign
