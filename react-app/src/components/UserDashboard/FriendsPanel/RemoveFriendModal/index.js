import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { Modal } from '../../../../context/Modal';
import { deleteFriend, getUserFriends } from '../../../../store/friends';
import { authenticate } from '../../../../store/session';

function RemoveFriendModal({ userId, friendId, showDeleteModal, setShowDeleteModal }) {


    const dispatch = useDispatch()
    const history = useHistory()

    const handleDeleteRequest = async () =>{



        await dispatch(deleteFriend({userId,friendId}))
        await dispatch(getUserFriends(userId))
        await authenticate()
        setShowDeleteModal(false)
        history.push(`/user_dashboard/${userId}`)

    }

    return (
        <>
            {showDeleteModal && (
                <Modal onClose={() => setShowDeleteModal(false)}>
                    <div className="submit-comment-form">
                        <button className="secondary-button" onClick={handleDeleteRequest}>Confirm</button>
                        <button className="secondary-button" onClick={() => setShowDeleteModal(false)}>
                            Cancel
                        </button>
                    </div>
                </Modal>
            )
            }
        </>
    );
}

export default RemoveFriendModal;
