import React from 'react';

const DeleteModal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative w-1/2" for="">
          <h3 className="text-3xl font-bold text-center">
            Are You sure ?
          </h3>

          <div className="modal-action flex items-center justify-center">
            <label htmlFor="my-modal" className="btn ">
              Delete
            </label>
          </div>
        </label>
      </label>
    </div>
  );
};

export default DeleteModal;