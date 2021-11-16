import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import backIcon from '../../images/back-arrow.ico'
import { getUserZodiacList } from '../../store/zodiacLists';
import AddRowModal from './AddRowModal/index';
import ListRow from './ListRow';
import { addZodiacListRow } from '../../store/zodiacLists';
import { getAllFriends } from '../../store/friends';
import CalculateSignModal from '../SplashPanel/CalculateSignModal';

const ZodiacList = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session)
    const{userId}= useParams()
    const friends = useSelector(state=> Object.values(state.friends))
    .filter((friend)=>friend?.user_id === Number(userId))
    const signs = useSelector(state=>Object.values(state.sunSigns))
    const signObjs = useSelector(state=>state.sunSigns)
    const [firstName, setFirstName] = useState("")
    const [firstNameId, setFirstNameId] = useState(null)
    const [firstNameSign, setFirstNameSign] = useState("")
    const [validationErrors,setValidationErrors] = useState([])

    const listRows = useSelector(state => Object.values(state.zodiac_lists))

    const [showAddRow,setShowAddRow] = useState(false)
    useEffect(()=>{
        dispatch(getUserZodiacList(user.user.id))
        dispatch(getAllFriends())
        const errors =[]
        if(showAddRow){
            if(showAddRow &&firstName === ""){
                errors.push("Please Input First Name")
            }
            if(firstName.length < 3){
                errors.push("First name must longer than 3 characters")
            }
        if(firstNameSign==='' ){
            errors.push("Please Enter Zodiac Sign ")
        }

        }
        setValidationErrors(errors)

    }, [dispatch,firstNameSign,firstName,showAddRow])

// ADD ROW LOGIC

//onChange First Input
const firstInput = (e) => {
    setFirstName(e.target.value)

}
//onChange Second Input
const secondInput = (e) => {

        setFirstNameSign(e.target.value)

}
    const handleSubmit = async (e)  =>{



    }

    const addRowShow =async(e)=>{
        e.preventDefault()
        if(showAddRow){

            const payload ={
                userId,
                first_name:firstName,
                first_name_id:firstNameId,
                first_name_sign:firstNameSign

            }

            await dispatch(addZodiacListRow(payload))


            setShowAddRow(false)

        }else{
            setShowAddRow(true)

        }
    }
    const hideAddRow = () =>{
        setShowAddRow(false)
    }
    return(
        <>

        <div className='univ-zodiac-list-wrapper'>
        <div className='univ-zodiac-table-container'>
        <header
        className="zodi-list-header">
        <h1
        id="sign-detail-header"
        >Zodiac List</h1>
        <h4 id="zodi-list-detail"
        >Keep a track of past calculated signs and add matches to see compatibility! </h4>
        </header>
        <table className='univ-zodiac-list-table'>
            <thead className="zodiac-list-header">
                <th>
                   1st Name
                </th>
                <br/>
                <th>
                Sign
                </th>
                <br/>
                <th>
                  2nd Name
                </th>
                <br/>
                <th>
                Sign
                </th>
                <br/>
                <th
                id="comp-table"
                >
                   Compatibility
                </th>

            </thead>
            <tbody>
        {listRows && listRows?.map((rows)=>{
            // if(listRows.length <= 20){
            // if{showAddRow}
                return(
            <>
            <tr className="univ-list-row">
            <ListRow rows={rows} key={rows.id}/>
            </tr>
            </>
                )
            // }else{
            //     <>too many rows</>
            // }

})}
</tbody>
        </table>
        </div>
        <div
        >

        {showAddRow&&
         <form

         className="add-row-container"
        onSubmit={handleSubmit}>

               <p
               onClick={hideAddRow}
            style={{textAlign:"right",padding:0,margin:0}}>❌</p>
            <p
            style={{textAlign:"center",padding:0,margin:0}}> Type Name or Choose From Friends to Add to List!</p>
             <CalculateSignModal/>
            <div className="zodi-form-errors ">
                {validationErrors.map((error, int) => (<div key={int}>{error}</div>))}
            </div>
        <table
        id="first-match-input"
        >
            <tr
            >

                <td
                style={{display:"flex",flexDirection:"row", justifyContent:"space-around"}}>
                <label

                >
                    1st Name

                <input
                className="zodi-list-input"
                name='first_name'
                type="text"
                list="user_friends"
                onChange ={firstInput}
            />
            </label>

                <datalist id="user_friends"
                >
                    {friends&& friends.map((friend)=>{
                        let friendSunSign = signObjs[friend.friend_to_user.sun_sign_id].sign
                        return(
                            <option value={`${friend.friend_to_user.username}`}>
                                {friendSunSign}
                            </option>
                        )
                        })}
                </datalist>

                </td>
            <td>
            <label

            className="zodi-list-label"
            >
                Sign
            <select

            onChange ={secondInput}
            className="zodi-list-input"
            list="sun_signs"
            >
                <option placeholder=""></option>
                {signs&& signs.map((sign)=>(
                    <option value={sign.sign}
                    key={sign.id}>
                        {sign.sign}
                        </option>
                ))}
                </select>
                </label>
            </td>

            </tr>
        </table>


        </form>
       }
        </div>
        <button

        type="submit"
            disabled={validationErrors.length > 0}
              className="secondary-button"
              onClick={addRowShow}>Add New Row</button>

        {/* <ShowFriendsModal userId ={user.user.id}/> */}
        </div>

        </>

    )

}
export default ZodiacList
