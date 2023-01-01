import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, modalData, success }) => {
    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => success(modalData)} htmlFor="confirmation-modal" className="btn btn-error btn-xs">Delete Confirm</label>
                        <button onClick={closeModal} className='btn btn-info btn-xs'>Cancel</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ConfirmationModal;