import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getUserHoroscopePosts } from '../../store/horoscopePosts';
import { getAllUsers, updateProfilePic } from '../../store/users';

import { authenticate, signUp } from '../../store/session';
import UpdateSignModal from './UpdateSignModal';

import './UserDashboard.css'
import ZodiacListModal from '../ZodiacList';
import ZodiacList from '../ZodiacList/ZodiacList';

const UserDetail = ({user}) =>{
    const {userId}= useParams();
    const history = useHistory()
const defaultPicture = 'https://zodiappbucket.s3.amazonaws.com/supplemental/default_pic_zodi_app.png'
    const dispatch = useDispatch()
    const signs = useSelector(state => Object.values(state.sunSigns))
    const userSign = signs.filter((sign)=>sign.id === user.sun_sign_id)[0]
    const users = useSelector(state => state?.session.users);
    // const profileOwner = users?.filter(user_ => user_.id === +user.id )[0]
    // const userPosts =  useSelector(state => Object.values(state.horoscope_posts))

    const inputFile = useRef(null)

    const [showZodiacList,setShowZodiacList] = useState(false)

    useEffect(()=>{
        dispatch(getUserHoroscopePosts(user?.id))
        dispatch(getAllUsers())

        // console.log(user?.profile_picture)


    }, [dispatch])
    const submitProfilePic = async (e) => {
        e.preventDefault()

        const profilePic = e.target.files[0]

        await dispatch(updateProfilePic({profilePic,
            userId}))
        await dispatch(authenticate())

        return
    }

    const listButtonShow = (e) =>{
        if(showZodiacList){
            setShowZodiacList(false)
        }else{
            setShowZodiacList(true)
        }

    }
    let actionBtnZL
    if(showZodiacList){
        actionBtnZL=(
            <button
            className="secondary-button"
            style={{textTransform:"none"}}
            onClick={listButtonShow}>Zodiac List </button>

        )
    }else{
        actionBtnZL=(
            <button
            className="primary-button"
            onClick={listButtonShow}>Zodiac List</button>

        )

    }
    const toSplash = () =>{
        history.push('/')
    }

    let currentProfilePic
    if(user?.profile_picture ){
        currentProfilePic=user?.profile_picture

    }else{
        currentProfilePic=defaultPicture


    }
    let userInfo

    if(!showZodiacList){


    userInfo =(
        <>
  <div className="user-sign-detail">
                    <h2
                    id="sign-detail-header"
                    >{userSign?.sign}</h2>
                    <p>Element: {userSign?.element}</p>
                    <p>Qualities: {userSign?.qualities}</p>
                    <p>Symbol: {userSign?.symbol}</p>
                    <p>Ruling Planet: {userSign?.ruling_planet}</p>
                    <p>Strengths: {userSign?.strengths}</p>
                    <p>Weaknesses: {userSign?.weaknesses}</p>
                    </div>
        </>

    )}else{
        userInfo=(
            <>
             <div
    className="user-zodiac-list"
    >
       {showZodiacList && <ZodiacList />}

    </div>
            </>
        )
    }

    let signSet
    if(userSign){
        signSet=(
             <section
            className="user-sign-section"
             >
                    {userInfo}
                    <div className="user-controls">
                    <button
                    className="primary-button"
                    onClick={toSplash}
                    >
                    ← Sun Signs
                    </button>
                    <UpdateSignModal userId={userId}/>
                   {actionBtnZL}

</div>
                </section>
        )

    }else{
        signSet=(
            <section
            className="user-sign-section no-sign"
             >
                 {userInfo}
                    <div className="user-controls">
                    <button
className="primary-button"
onClick={toSplash}
>
← Sun Signs
</button>
<UpdateSignModal userId={userId}/>
<h3
// style={{maxWidth:"30%"}}
>
   Update Sign To Use the Rest of the Features
</h3>

</div>
                </section>)
    }
let dashboardControls

if(!showZodiacList){
    dashboardControls=(
        <>
        {signSet}
        </>
        )
}else{
dashboardControls=(
    <div
    className="user-zodiac-list"
    >
       {showZodiacList && <ZodiacList setShowZodiacList={setShowZodiacList}/>}

    </div>
)
}


if(userSign){
    return(

                <div
                className="user-profile-cont">

                    <div
                    className="user-profile-pic-div">

                            <input
                                style={{ display: "none" }}
                                ref={inputFile}
                                name="profile_picture"
                                onChange={submitProfilePic}
                                type="file"
                            />
                            <div onClick={() => inputFile.current.click()}>
                                <img style={{maxHeight:200 , maxWidth:200 ,borderRadius:100}}
                                className="user-profile-pic" src={currentProfilePic} alt="user profile"/>
                                             <h1
                                             className="user-header"
                                              >What
                                                 's Up {user?.username} !</h1>
                            </div>
                            <section
            className="user-sign-section"
             >
                 {userInfo}
                    <div className="user-controls">
                    <button
className="primary-button"
onClick={toSplash}
>
← Sun Signs
</button>
<UpdateSignModal userId={userId}/>
{actionBtnZL}

</div>
                </section>
                    </div>


             </div>

    )
    }else{
        return(
            <div
            className="user-profile-cont">

                <div
                className="user-profile-pic-div">

                        <input
                            style={{ display: "none" }}
                            ref={inputFile}
                            name="profile_picture"
                            onChange={submitProfilePic}
                            type="file"
                        />
                        <div onClick={() => inputFile.current.click()}>
                            <img style={{maxHeight:200 , maxWidth:200 ,borderRadius:100}}
                            className="user-profile-pic" src={currentProfilePic} alt="user profile"/>
                                         <h1
                                         className="user-header"
                                         >What's Up {user?.username} !</h1>
                        </div>
                        {dashboardControls}
                </div>
            <section className="user-sign-detail-container">
            <UpdateSignModal userId={userId}/>
            <h3 className="to-update-sign">Please Calculate your Sun Sign</h3>
        </section>
         </div>
        )
    }

}

export default UserDetail
