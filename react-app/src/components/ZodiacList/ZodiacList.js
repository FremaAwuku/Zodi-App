import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import backIcon from '../../images/back-arrow.ico'
import { getUserZodiacList } from '../../store/zodiacLists';
import AddRowModal from './AddRowModal/index';
import ListRow from './ListRow';
// import ShowFriendsModal from './ShowFriendsModal';
const ZodiacList = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session)
    // console.log(user.user.username, "<<<<<<<<<<<<USER")
    const listRows = useSelector(state => Object.values(state.zodiac_lists))
    const goBack = () =>{
        history.goBack()

    }

    useEffect(()=>{
        dispatch(getUserZodiacList(user.user.id))



    }, [dispatch])
    return(
        <>
        <button
        className="primary-button"
        onClick={goBack}
        >
            <img src={backIcon}></img>

            Go Back
        </button>
        <div className='univ-zodiac-list-wrapper'>
        <h1>{`${user.user.username}'s Zodiac List'`}</h1>
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
                <th>
                   Compatibility
                </th>

            </tr>
        {listRows && listRows?.map((rows)=>{
            if(listRows.length <= 20){
                return(
            <tr className="univ-list-row">
            <ListRow rows={rows} key={rows.id}/>
            </tr>
                )
            }else{
                <>too many rows</>
            }
})}
        </table>
        <AddRowModal/>
        {/* <ShowFriendsModal userId ={user.user.id}/> */}
        </div>

        </>

    )

}
export default ZodiacList
