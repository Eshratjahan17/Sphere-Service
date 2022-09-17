import React, { useEffect } from 'react';
import Loader from '../Shared/Loader';

const DeleteModal = (
  product,
  deleteModal,
  setDeleteModal,
  isLoading,
  setIsLoading
) => {
  console.log(product);
  useEffect(() => {}, []);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (product.isLoading) {
          return <Loader></Loader>;
        } else if (data.deletedCount) {
         product.setIsLoading(false);
          window.alert("Delete Successful");
          console.log(data);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative w-1/2" for="">
          <h3 className="text-3xl font-bold text-center">
            Are You sure to Delete {product?.deleteModal?.name}?
          </h3>

          <div className="modal-action flex items-center justify-center">
            <label
              htmlFor="my-modal-4"
              className="btn hover:btn-primary "
              onClick={() => handleDelete(product?.deleteModal?._id)}
            >
              Delete
            </label>
          </div>
        </label>
      </label>
    </div>
  );
};

export default DeleteModal;