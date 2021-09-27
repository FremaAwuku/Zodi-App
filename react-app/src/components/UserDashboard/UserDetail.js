import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserHoroscopePosts } from '../../store/horoscopePosts';
import { getAllUsers, updateProfilePic } from '../../store/users';
import defaultPicture from '../../images/default_profile.png'
import { authenticate, signUp } from '../../store/session';
import UpdateSign from './UpdateSignModal/UpdateSign';
import UpdateSignModal from './UpdateSignModal';



const UserDetail = ({user}) =>{
    const userId= user.id;

    const dispatch = useDispatch()
    const signs = useSelector(state => Object.values(state.sunSigns))
    const userSign = signs.filter((sign)=>sign.id === user.sun_sign_id)[0]
    const users = useSelector(state => state?.session.users);
    const profileOwner = users?.filter(user_ => user_.id === +user.id )[0]
    const userPosts =  useSelector(state => Object.values(state.horoscope_posts))
    const inputFile = useRef(null)

    const [showUpdate,setShowUpdate] = useState(false)
    console.log(userSign,"<<<<<<<<<<User Sign")
    // console.log(userId,"<<<<<<<<<<USER IDE")
    useEffect(()=>{
        dispatch(getUserHoroscopePosts(user?.id))
        dispatch(getAllUsers())



    }, [dispatch])
    const submitProfilePic = async (e) => {
        e.preventDefault()

        const profilePic = e.target.files[0]

        // console.log(profilePic,"<<<<<<<<<<PROFILE")
        // console.log(userId,"<<<<<<<<<<USER IDE")

        await dispatch(updateProfilePic({profilePic,
            userId}))

        return
    }
    let currentProfilePic
    if(user?.profile_pic){
        currentProfilePic=defaultPicture
    }else{
          currentProfilePic=user?.profile_picture
        console.log(user.profile_picture,"<<<<<<<<CURRENT PIC")
    }

    let signSet
    if(userSign){
        signSet=(
             <section>
                    <h4>{user.username}</h4>
                    <div className="user-sign-detail">
                    <h4>{userSign?.sign}</h4>
                    <p>Element: {userSign?.element}</p>
                    <p>Qualities: {userSign?.qualities}</p>
                    <p>Symbol: {userSign?.symbol}</p>
                    <p>Ruling Planet: {userSign?.ruling_planet}</p>
                    <p>Strengths : {userSign?.strengths}</p>
                    <p>Weaknesses: {userSign?.weaknesses}</p>
                    </div>
                </section>
        )

    }else{
        signSet=(<h3>Calculate your sun sign</h3>)
    }
    return(
    <>
    <h1 >{user?.username}'s Profile Page</h1>



                    <div className="user-profile-pic-div">

                            <input
                                style={{ display: "none" }}
                                ref={inputFile}
                                name="profile_picture"
                                onChange={submitProfilePic}
                                type="file"
                            />
                            <div onClick={() => inputFile.current.click()}>
                                <img style={{maxHeight:200 , maxWidth:200}}
                                className="user-profile-pic" src={currentProfilePic} alt="user profile"/>
                            </div>
                    </div>
            <div className="user-controls">
                {/* <section>
                    <h4>{user.username}</h4>
                    <div className="user-sign-detail">
                    <h4>{userSign?.sign}</h4>
                    <p>Element: {userSign?.element}</p>
                    <p>Qualities: {userSign?.qualities}</p>
                    <p>Symbol: {userSign?.symbol}</p>
                    <p>Ruling Planet: {userSign?.ruling_planet}</p>
                    <p>Strengths : {userSign?.strengths}</p>
                    <p>Weaknesses: {userSign?.weaknesses}</p>
                    </div>
                </section> */}
                {signSet}
              <UpdateSignModal userId={userId}/>

             </div>
    </>
    )

}

export default UserDetail
