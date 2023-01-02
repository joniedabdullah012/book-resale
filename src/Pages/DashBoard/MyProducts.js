import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';

const MyProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null)


    const closeModal = () => {
        setDeleteProduct(null);
    }


    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/products', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }

                });

                const data = await res.json()
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDelete = (product) => {
        console.log(product);
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Delete Successfully')

                }
                refetch()
            })

    }

    if (isLoading) {
        return <progress className="progress w-56"></progress>
    }
    return (
        <div>
            <h1>my products : {products?.length}</h1>


            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>

                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.map((product, i) =>
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={product.image} alt="" />
                                        </div>
                                    </div></td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.location}</td>
                                    <td> <label onClick={() => setDeleteProduct(product)} htmlFor="confirmation-modal" className="btn  btn-xs btn-error">Delete</label>
                                    </td>

                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

            {
                deleteProduct && <ConfirmationModal
                    title={`Are You Want To Delete Product?`}
                    message={`If you are delete ${deleteProduct.name}`}
                    closeModal={closeModal}
                    success={handleDelete}
                    modalData={deleteProduct}
                ></ConfirmationModal>
            }

        </div>
    );
};

export default MyProducts;