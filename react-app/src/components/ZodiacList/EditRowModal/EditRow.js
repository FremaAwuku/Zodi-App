import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getUserFriends } from '../../../store/friends';
import {addListMatch} from '../../../store/zodiacLists'
function EditRow({setShowModal, row, firstName, firstSignName}) {


        //Display frist name / sign
        //thos valuse cant be editited
        //collect match name & sign

        //match name will have prepopulated data list that is filtered to not include first name
        //match sign will be prepoulated with all sign
        //TO ADD LATER CALCULATE SIGN BUTTON ON ZODIAC LIST
        //payload sends back
        //match name and sign only
        //LATER ADD FRIENDS
        const[matchName, setMatchName] = useState("")
        const[matchSign, setMatchSign] = useState("")
        const [validationErrors,setValidationErrors] = useState([])

        const dispatch = useDispatch()

        const user = useSelector(state=> state.session.user)
        const userId = user.id
        const friends = useSelector(state=> Object.values(state.friends))
        const filteredFriends = friends.filter((friend)=> friend.friend_to_user.username !== firstName )

        // console.log(row.first_name,"<<<<<<<<<ROW FIRST NAME")
        const signs = useSelector(state=>Object.values(state.sunSigns))
        const signObjs = useSelector(state=>state.sunSigns)

        useEffect(()=>{


            dispatch(getUserFriends(userId))
        },[dispatch])


        const firstInput = (e) => {
            setMatchName(e.target.value)}
        const secondInput = (e) => {
                    setMatchSign(e.target.value)
                }


    const handleSubmit = async (e)  =>{
        e.preventDefault()

       const payload={
            rowId:row.id,
            userId,
            match_name:matchName,
            match_name_id:null,
            match_name_sign:matchSign

        }

        // console.log(payload, "<<<<<<<<EDIT MATCH PAYLOAD")

        await dispatch(addListMatch(payload))

    }



    return(
        <>
            <div className="univ-modal-wrapper">
        <form
        onSubmit={handleSubmit}
        className="univ-form-wrapper">
               <div className="univ-form-errors">
                {validationErrors.map((error, int) => (<div key={int}>{error}</div>))}
        </div>
        <label
        className="univ-form-label"
        for='match_name'
        >
            Enter Match Name
            <input
            name='match_name'
            type="text"
            list="user_friends"
            onChange ={firstInput}
            />
                <datalist id="user_friends">
                {filteredFriends&& filteredFriends.map((friend)=>{
                    let friendSunSign = signObjs[friend.friend_to_user.sun_sign_id].sign
                    return(
                    <option value={`${friend.friend_to_user.username}`}>
                            {friendSunSign}
                        </option>
                    )
                    })}
                </datalist>


        </label>
        <label
        >
            Enter Sign
            <input
            // type="date"
            onChange={secondInput}
            // placeholder={}
            // value={firstNameSignId}
            list="sun_signs"
            />
            <datalist id="sun_signs">
                {signs&& signs.map((sign)=>(
                    <option value={sign.sign}>

                        </option>
                ))}
                </datalist>
                </label>


        <button
        disabled = {validationErrors.length > 0}
        type="submit"

        >
        Add Row
        </button>
        </form>
        </div>
        </>
    )

}
export default EditRow;
