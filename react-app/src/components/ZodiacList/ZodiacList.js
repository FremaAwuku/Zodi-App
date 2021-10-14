import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import backIcon from '../../images/back-arrow.ico'
import { getUserZodiacList } from '../../store/zodiacLists';
import AddRowModal from './AddRowModal/index';
import ListRow from './ListRow';
import { addZodiacListRow } from '../../store/zodiacLists';
import { getAllFriends } from '../../store/friends';

// import ShowFriendsModal from './ShowFriendsModal';
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
        if(firstNameSign===''){
            errors.push("Please Enter Zodiac Sign ")
        }
        if(firstName===''){
            errors.push("Please Input First Name")
        }
        }
        setValidationErrors(errors)

    }, [dispatch,firstNameSign,firstName])

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
    return(
        <>

        <div className='univ-zodiac-list-wrapper'>
        <div className='univ-zodiac-table-container'>
        <h1
        id="sign-detail-header"
        >{`Zodiac List`}</h1>
        <table className='univ-zodiac-list-table'>
            <tr>
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

            </tr>
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
            <div className="univ-form-errors">
                {validationErrors.map((error, int) => (<div key={int}>{error}</div>))}
            </div>
        <table
        id="first-match-input"
        >
            <tr>

                <td>
                <label>
                    1st Name

                <input
                name='first_name'
                type="text"
                list="user_friends"
                onChange ={firstInput}
            />
            </label>

                <datalist id="user_friends">
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
            <input
            // type="date"
            onChange ={secondInput}

            list="sun_signs"
            />
            <datalist id="sun_signs">
                {signs&& signs.map((sign)=>(
                    <option value={sign.sign}
                    key={sign.id}>

                        </option>
                ))}
                </datalist>
                </label>
            </td>

            </tr>
        </table>
        </form>}
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
