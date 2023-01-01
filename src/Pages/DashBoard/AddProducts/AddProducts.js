import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imagehostkey = process.env.REACT_APP_imgbb_key;

    const handleAddProduct = (data) => {

        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imagehostkey}`

        fetch(url, {

            method: 'POST',
            body: formData
        })

            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                }
            })

    }
    return (
        <div className='w-96 p-7'>
            <h1>Add products</h1>

            <form onSubmit={handleSubmit(handleAddProduct)} >


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>

                    </label>
                    <input className="input input-bordered w-full max-w-xs" type="text" {...register("name")} />




                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>

                    </label>
                    <input className="input input-bordered w-full max-w-xs" type="text" {...register("price")} />




                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone</span>

                    </label>
                    <input className="input input-bordered w-full max-w-xs" type="text" {...register("phone")} />




                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>

                    </label>
                    <input className="input input-bordered w-full max-w-xs" type="text" {...register("location")} />




                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Please Select Condition</span>
                    </label>
                    <select {...register("condition")} className="select select-bordered w-full max-w-xs">
                        <option >Excillent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>







                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>

                    </label>
                    <input className="input input-bordered w-full max-w-xs" type="file" {...register("img")} />




                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>

                    </label>
                    <input className="input input-bordered h-100 w-full max-w-xs" type="text" {...register("description")} />




                </div>





                <input value='Add Product' className=' my-3 btn  bg-blue-400 w-full' type="submit" />


            </form>

        </div>
    );
};

export default AddProducts;
