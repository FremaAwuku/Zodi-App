import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getUserFriends } from '../../../store/friends';
import { calculateSunSign } from '../../../store/sunSigns';
const AddRow =() =>{
    const [showCalc, setShowCalc] = useState(false)
    const [friendChosen, setFriendChosen] = useState(false)
    const [calcSign, setCalcSign] = useState({})
    const [firstName, setFirstName] = useState("")
    const [firstNameId, setFirstNameId] = useState(null)
    const [birthMonth, setBirthMonth] = useState(null)
    const [birthDate, setBirthDate] = useState(null)
    const [birthDay,setBirthDay] = useState("")
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



    //use use state to save variable of friends name (first name )
    //filter through friend to get that specific friends details

    const chosenFriend = friends?.filter((friend)=>friend?.friend_to_user.username === firstName)[0]
    .friend_to_user
    const chosenFriendId = chosenFriend?.id
    const chosenFriendSign = signObjs[chosenFriend?.sun_sign_id]
    // friendSignIds.forEach((id)=>{

    //         filteredSigns.push(signObjs[id].sign)
    //     })


    console.log(friends,"<<<<<<<Friends")
    console.log(friendUsernames,"<<<<<<<Friend Usernames")
    console.log(friendSignIds,"<<<<<<<Friend Sign Ids")
    console.log(signObjs,"<<<<<<<ARRAY OF OBJ?")
    console.log(filteredSigns,"<<<<<<<FILTERED SIGNS HOPEFULLY")
    console.log(chosenFriend,"<<<<<<<<<<< CHOSEN FRIEND")
    console.log(chosenFriendId,"<<<<<<<<<<< CHOSEN FRIEND ID")
    console.log(chosenFriendSign,"<<<<<<<<<<< CHOSEN FRIEND Sign")
    useEffect(()=>{


        const errors = []


        if(birthDay === "")errors.push("  Please Enter Birth Date")
        setValidationErrors(errors)
        // if(description.length === 0)errors.push("Description can not be Empty")
        // setValidationErrors(errors)

        dispatch(getUserFriends(userId))
    },[dispatch])

    const handleSubmit = async (e)  =>{
        e.preventDefault()
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
    const signCalc = await dispatch(calculateSunSign({
        calcMonth,
        calcDate
    }))
    setCalcSign(signCalc)

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
            setFriendChosen(true)
            setFirstNameId()
            setFirstNameSignId()

        }
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
        <label
        >
            Enter Sign
            <input
            // type="date"
            // onChange
            // placeholder={}
            //value={}
            hidden={showCalc}
            list="sun_signs"
            />
            <datalist id="sun_signs">
                {signs&& signs.map((sign)=>(
                    <option value={sign.sign}>

                        </option>
                ))}
                </datalist>
                <button
            onClick = {()=> setShowCalc(true)}

            >
                Calculate Sign
            </button>
            <label
            hidden={!showCalc}>
                Enter Sign
            <input
            type="date"
            // onChange
            // placeholder={}
            //value={}
            hidden={!showCalc}
            />

            </label>




        </label>
        <button
        type="submit"
        >
        Add Row
        </button>
        </form>
        </div>
    )


}
export default AddRow
