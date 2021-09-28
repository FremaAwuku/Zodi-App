import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getUserFriends } from '../../../store/friends';
import { calculateSunSign } from '../../../store/sunSigns';
import { addZodiacListRow } from '../../../store/zodiacLists';
const AddRow =() =>{
    const [showCalc, setShowCalc] = useState(false)
    const [friendChosen, setFriendChosen] = useState(false)
    const [calcSign, setCalcSign] = useState({})
    const [fetchSuccess,setFetchSuccess] = useState(false)
    // const [friendName, setFriendName] = useState("")
    // const [friendNameId, setFriendNameId] = useState(null)
    const [birthMonth, setBirthMonth] = useState(null)
    const [birthDate, setBirthDate] = useState(null)
    const [hideCalcBtn, setHideCalcBtn] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [firstNameId, setFirstNameId] = useState(null)
    const [firstNameSignId, setFirstNameSignId] = useState(null)
    const [validationErrors,setValidationErrors] = useState([])
    const dispatch = useDispatch()
    const user = useSelector(state=> state.session.user)
    const userId = user.id
    const friends = useSelector(state=> Object.values(state.friends))
    const friendUsernames = useSelector(state=> Object.values(state.friends)).map((friend)=>friend = friend.friend_to_user.username)
    const friendSignIds = friends
    // .filter((friend)=> setFriendChosen&& friend.username === firstName)
    .map((friend)=>friend = friend.friend_to_user.sun_sign_id)
    const signs = useSelector(state=>Object.values(state.sunSigns))
    const signObjs = useSelector(state=>state.sunSigns)
    const filteredSigns =[]

    const calculatedSign = calcSign?.sign
    const calculatedSignId = calcSign?.id

    //use use state to save variable of friends name (first name )
    //filter through friend to get that specific friends details

    const chosenFriend = friends?.filter((friend)=>friend?.friend_to_user.username === firstName)[0]
    const chosenFriendId = chosenFriend?.friend_id
    const chosenFriendSignId = signObjs[chosenFriend?.friend_to_user?.sun_sign_id]?.id
    const [birthDay,setBirthDay] = useState(signObjs[chosenFriend?.friend_to_user?.sun_sign_id]?.sign)
    // friendSignIds.forEach((id)=>{

    //         filteredSigns.push(signObjs[id].sign)
    //     })


    // console.log(friends,"<<<<<<<Friends")
    // console.log(friendUsernames,"<<<<<<<Friend Usernames")
    // console.log(friendSignIds,"<<<<<<<Friend Sign Ids")
    // console.log(signObjs,"<<<<<<<ARRAY OF OBJ?")
    // console.log(filteredSigns,"<<<<<<<FILTERED SIGNS HOPEFULLY")
    // console.log(chosenFriend,"<<<<<<<<<<< CHOSEN FRIEND")
    // console.log(chosenFriendId,"<<<<<<<<<<< CHOSEN FRIEND ID")
    // console.log(chosenFriendSignId,"<<<<<<<<<<< CHOSEN FRIEND Sign")
    console.log(calcSign,"<<<<<<<calc sign")
    useEffect(()=>{


        // const errors = []


        // if(firstName === ""|| !chosenFriend )errors.push("  Please Enter Name or Friend")
        // setValidationErrors(errors)
        // if(description.length === 0)errors.push("Description can not be Empty")
        // setValidationErrors(errors)

        dispatch(getUserFriends(userId))
    },[dispatch])

    const handleSubmit = async (e)  =>{
        e.preventDefault()
        let payload
        if(friendChosen){
       payload={
            userId,
            first_name:firstName,
            first_name_id:chosenFriendId,
            first_name_sign:chosenFriendSignId

        }
    }else{
        payload ={
            userId,
            first_name:firstName,
            first_name_id:firstNameId,
            first_name_sign:firstNameSignId

        }
    }
        console.log(payload, "<<<<<<<<FRONT END PAYLOAD")
        console.log(payload, "<<<<<<<<FRONT END PAYLOAD")
        await dispatch(addZodiacListRow(payload))

    }
    // const getSign
 //make a function that fetches CalcSign
//and returns a sign that will be the placeholder of the sign input
//Or user can choose from a drop down menu of pre populated signs

const calculateSign = async (e) =>{
    e.preventDefault()

    const calcData = birthDay.split("-")
    const calcMonth = Number(calcData[1])
    const calcDate = Number(calcData[2])
    console.log(calcMonth,"<<<<<FRONT END MONTH")
    console.log(calcDate,"<<<<<<<<FRONT END MONTH")
    const signCalc = await dispatch(calculateSunSign({
        calcMonth,
        calcDate
    }))
    if(signCalc){

    setCalcSign(signCalc)
    setFetchSuccess(true)
    setFirstNameSignId(signCalc?.id)
    }


}
    let friendInput
    // const showFriends = () =>{
    //     setShowFirstName(true)
    //     friendInput=(
    //         <select name="first_name">
    //             {friends&& friends?.map((friend)=>(
    //                 <option value={friend.friend_id}>
    //                     {friend.username}
    //                 </option>
    //             )
    //             )}
    //         </select>
    //     )

    // }

    // ENTER SIGN LOGIC
    //if a user inserts their friend as a value ,
    //the the friends information should preload the Sign placement as a value

    // Onchange Functions
    //friends list filter through
    //if friends username matches what is put in setFirst name
    //set chosenFrriend to true and the value of that friend(username) will be then used
    //again to pre-poulate value sign of Sign placement SHEEEESH
    const firstInput = (e) => {
        setFirstName(e.target.value)
        if(friendUsernames.includes(firstName)){
            console.log("<<<<<<<<<<onchange")
            setFriendChosen(true)

            setFirstNameId(chosenFriendId)
            setFirstNameSignId(chosenFriendSignId)

        }

    }
    const secondInput = (e) => {
    setFirstNameSignId(e.target.value)

    }

    //ATttempting to prepopluate dropdown
    let chosenSigns

        if(firstName&&friendUsernames.includes(firstName)){

            // setFriendChosen(true)
            // setFirstNameId(chosenFriendId)
            // setFirstNameSignId(chosenFriendSignId)
        // if(friendChosen){
        chosenSigns=(
            <label
            hidden={showCalc}
            >
                    Friend Sign
                    <input
                    // type="date"
                    onChange={secondInput}
                    // placeholder={}
                    hidden={showCalc}
                    value={signObjs[chosenFriend?.friend_to_user?.sun_sign_id]?.sign}
                    />

                </label>
                        )
//   }

  }else if(fetchSuccess ){

    chosenSigns=(
        <label>
                Calculated Sign
                <input
                // type="date"
                onChange ={secondInput}
                // placeholder={}
                value={signObjs[calculatedSignId]?.sign}
                />


            </label>
                    )


  }
  else{

    chosenSigns=(
    <label
        >
            Enter Sign
            <input
            // type="date"
            onChange ={secondInput}
            // placeholder={}
            // value={firstNameSignId}
            hidden={showCalc}
            list="sun_signs"
            />
            <datalist id="sun_signs">
                {signs&& signs.map((sign)=>(
                    <option value={sign.id} key={sign.id}>
                        {sign.sign}

                        </option>
                ))}
                </datalist>
                </label>)

    }

    return(
        <div className="univ-modal-wrapper">
        <form
        onSubmit={handleSubmit}
        className="univ-form-wrapper">
               <div className="univ-form-errors">
                {validationErrors.map((error, int) => (<div key={int}>{error}</div>))}
        </div>
        <label
        className="univ-form-label"
        for='first_name'
        >
            Enter Name
            <input
            name='first_name'
            type="text"
            list="user_friends"
            onChange ={firstInput}
            />
                <datalist id="user_friends">
                {friends&& friends.map((friend)=>(
                    <option value={friend.friend_to_user.username}>

                        </option>
                ))}
                </datalist>

            {/* <button
            onClick={showFriends}>
                Choose From Friends
            </button> */}

        </label>
        {/* <label
        >
            Enter Sign
            <input
            // type="date"
            // onChange
            // placeholder={}
            // value={firstNameSignId}
            hidden={showCalc}
            list="sun_signs"
            />
            <datalist id="sun_signs">
                {signs&& signs.map((sign)=>(
                    <option value={sign.sign}>

                        </option>
                ))}
                </datalist>
                </label> */}
                {chosenSigns}
                <button
            onClick = {()=> setShowCalc(true)}
            hidden={showCalc}

            >
                Calculate Sign
            </button>
            <label
            hidden={!showCalc}>
                Enter Birth Day
            <input
            type="date"
            onChange ={(e)=>setBirthDay(e.target.value)}
            // placeholder={}
            //value={}
            hidden={!showCalc}
            />
             <button
            onClick={calculateSign}
             >
                    Calculate
                    </button>

        </label>
        <button
        disabled = {validationErrors.length > 0}
        type="submit"

        >
        Add Row
        </button>
        </form>
        </div>
    )


}
export default AddRow
