import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getAllFriends } from '../../../store/friends';
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
        const {userId} = useParams()
        const friends = useSelector(state=> Object.values(state.friends))
        .filter((friend)=>friend?.user_id === Number(userId))
        const filteredFriends = friends.filter((friend)=> friend.friend_to_user.username !== firstName )

        // console.log(row.first_name,"<<<<<<<<<ROW FIRST NAME")
        const signs = useSelector(state=>Object.values(state.sunSigns))
        const signObjs = useSelector(state=>state.sunSigns)

        useEffect(()=>{

        const errors = []


        if(matchName === "" )errors.push("Please Choose Friend or Type Match Name")
        setValidationErrors(errors)
        if(matchName.length < 3 )errors.push("Name must longer than 3 characters")
        setValidationErrors(errors)
        if(matchSign === "")errors.push("Sign can not be Empty")
        setValidationErrors(errors)

            dispatch(getAllFriends())
        },[dispatch,matchName, matchSign])


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

    const close = () =>{
        setShowModal(false)
    }

    return(
        <>
            <div className="univ-modal-wrapper edit-list">

        <form
        onSubmit={handleSubmit}
        className="univ-form-wrapper edit-list">
                      <p
               onClick={close}
            style={{textAlign:"left",padding:0,margin:0}}>CLOSE</p>
               <div className="univ-form-errors">
                {validationErrors.map((error, int) => (<div key={int}>{error}</div>))}

        </div>
        <div
        className="first-match"
        style={{alignItems:"center"}}>
        <p>
          1st Match Name:
          <span>
          {row.first_name}
          </span>

        </p>
        <p>
        Sign:
        <span>
         {row.first_name_sign}
         </span>
        </p>
        </div>
        <label
        className="univ-form-label"
        for='match_name'
        >
            Enter 2nd Match Name
            <input
            name='match_name'
            type="text"
            list="user_friends"
            onChange ={firstInput}
            className="univ-form-input"
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
        className="univ-form-label"
        >
            Enter Sign
            <input
            className="univ-form-input"
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
        className="secondary-button"
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
