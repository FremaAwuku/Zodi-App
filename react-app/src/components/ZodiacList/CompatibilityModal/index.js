import React, {  useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
// import {ariesEmoji} from '/Users/fremy/appacademy/selfProject/capStone/Zodi-App/react-app/src/images/sign_png/aries.png'

import { Modal } from '../../../context/Modal';
import { getUserZodiacList } from '../../../store/zodiacLists';
import Compatibility from './Compatibilty'
function CompatibilityModal({rowId}){

    const {userId} = useParams()
    const userRows = useSelector(state=>state.zodiac_lists)
    const row = userRows[rowId]
    const rating = row?.compatibility

    useEffect(()=>{

       getUserZodiacList(userId)

    },
    [])


    const [showModal, setShowModal] = useState(false);
    let heartEmoji
    if(rating)
{    if (rating === 7){
            heartEmoji=(
                <>
        <div
        id="comp-modal-hearts"
        onClick={() => setShowModal(true)}
        > 💜💜💜💜💜❤️‍🔥</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
            <Compatibility rating={rating} setShowModal={setShowModal} />
            </Modal>
        )}
                </>
            )


        }else if(rating === 6){
            heartEmoji=(
                <>
        <div
        id="comp-modal-hearts"
        onClick={() => setShowModal(true)}
        > 💜💜💜💜💜💜</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
            <Compatibility rating={rating} setShowModal={setShowModal} />
            </Modal>
        )}
                </>
            )


        }else if(rating === 5){
            heartEmoji=(
                <>
        <div
        id="comp-modal-hearts"
        onClick={() => setShowModal(true)}
        > 💜💜💜💜💜</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
            <Compatibility rating={rating} setShowModal={setShowModal} />
            </Modal>
        )}
                </>
            )

        }else if(rating === 4){
            heartEmoji=(
                <>
        <div
        id="comp-modal-hearts"
        onClick={() => setShowModal(true)}
        > 💜💜💜💜</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
            <Compatibility rating={rating} setShowModal={setShowModal} />
            </Modal>
        )}
                </>
            )

        }else if(rating === 3){
            heartEmoji=(
                <>
        <div
        id="comp-modal-hearts"
        onClick={() => setShowModal(true)}
        > 💜💜💜</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
            <Compatibility rating={rating} setShowModal={setShowModal} />
            </Modal>
        )}
                </>
            )

        }else if(rating === 2){
            heartEmoji=(
                <>
        <div
        id="comp-modal-hearts"
        onClick={() => setShowModal(true)}
        > 💜💜</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
            <Compatibility rating={rating} setShowModal={setShowModal} />
            </Modal>
        )}
                </>
            )


        }else {
            heartEmoji=(
                <>
        <div
        id="comp-modal-hearts"
        onClick={() => setShowModal(true)}
        > 💜</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
            <Compatibility rating={rating} setShowModal={setShowModal} />
            </Modal>
        )}
                </>
            )

        }}
    return(
        <>
        {heartEmoji}
        </>
    )
}
export default CompatibilityModal
