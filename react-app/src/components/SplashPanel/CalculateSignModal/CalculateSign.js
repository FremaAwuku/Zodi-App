import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {calculateSunSign} from '../../../store/sunSigns'
import SunSignEmojiModal from "../SunSignEmojiModal"


function CalculateSign({setShowModal}){

    const [errors, setErrors] = useState([])
    const[calculatedSign,setCalculatedSign]=useState({})
    const [fetchSuccess,setFetchSuccess]=useState(false)
    const[birthDay, setBirthDay]=useState('')
        const dispatch = useDispatch()

        useEffect(()=>{
            const e =[]
            if(birthDay===''){
                e.push('You must enter a date ')
            }
            setErrors(e)
        },[birthDay])
 //make a function that fetches CalcSign
//and returns a sign that will be the placeholder of the sign input
//Or user can choose from a drop down menu of pre populated signs
const calculateSign = async (e) =>{

    // const [showCalculated, set]
    e.preventDefault()

    const calcData = birthDay.split("-")
    const calcMonth = Number(calcData[1])
    const calcDate = Number(calcData[2])
    // console.log(calcMonth,"<<<<<FRONT END MONTH")
    // console.log(calcDate,"<<<<<<<<FRONT END MONTH")

    const signCalc = await dispatch(calculateSunSign({
        calcMonth,
        calcDate
    }))


    if(signCalc){

    setCalculatedSign(signCalc)
    setFetchSuccess(true)

    }

}
const closeModal = () =>{
    setShowModal(false)
}
let emojiDetail
if(fetchSuccess){
    emojiDetail=(
        <>
        <h1>{(calculatedSign)? `You Are An ${calculatedSign.sign}`: ""}</h1>
    <SunSignEmojiModal sign={calculatedSign}/>
        </>
    )
}else{
    emojiDetail=(
        <>
        </>
    )
}

return(

   <div
    className='univ-modal-wrapper calc'>
         <h5
                    id="close-calc"
                    onClick={closeModal}>CLOSE</h5>
       {!fetchSuccess && <form
        onSubmit={calculateSign}
        className='univ-form-wrapper calc'
        >
            <div style={{textAlign:"center"}}>
        {errors.map((error, ind) => (
          <div
          className="univ-form-errors"
          key={ind}>{error}</div>
        ))}
      </div>

            <label
            className='univ-form-label calc'
            >
                Enter Birth Day
            <input
            className="univ-form-input"
            type="date"
            onChange ={(e)=>setBirthDay(e.target.value)}
            // placeholder={}
            //value={}
            // hidden={!showCalc}
            />
</label>
             <button
             className="primary-button calc"
             disabled={errors.length>0}
            // onClick={calculateSign}
             >
                    Calculate
                    </button>
    </form>}
        {emojiDetail}
    </div>
)
}
export default CalculateSign
