import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import backIcon from '../../images/back-arrow.ico'
import { getUserZodiacList } from '../../store/zodiacLists';
const ZodiacList = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session)
    const listRows = useSelector(state => Object.values(state.zodiac_lists))
    const goBack = () =>{
        history.goBack()

    }

    useEffect(()=>{
        dispatch(getUserZodiacList(user?.id))



    }, [dispatch])
    return(
        <button
        className="primary-button"
        onClick={goBack}
        >
            <img src={backIcon}></img>

            Go Back


        </button>
    )

}
export default ZodiacList
