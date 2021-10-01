import React from 'react';
import { useDispatch } from 'react-redux';

import { Modal } from '../../../context/Modal';
import {deleteRow, getUserZodiacList} from '../../../store/zodiacLists'

function DeleteRowModal({ userId, rowId, showDeleteModal, setShowDeleteModal }) {


    const dispatch = useDispatch()


    const handleClick = async (e) => {
        e.preventDefault();
        setShowDeleteModal(false)
        await dispatch(deleteRow(rowId))
        await dispatch(getUserZodiacList(userId))
    }

    return (
        <>
            {showDeleteModal && (
                <Modal onClose={() => setShowDeleteModal(false)}>
                    <div className="submit-comment-form">
                        <button className="secondary-button" onClick={handleClick}>Confirm</button>
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

export default DeleteRowModal;
