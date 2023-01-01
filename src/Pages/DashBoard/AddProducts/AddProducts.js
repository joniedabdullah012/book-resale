import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imagehostkey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate()

    const handleAddProduct = (data) => {

        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imagehostkey}`

        fetch(url, {

            method: 'POST',
            body: formData
        })

            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);


                    const products = {
                        name: data.name,
                        price: data.price,
                        phone: data.phone,
                        location: data.location,
                        condition: data.condition,
                        description: data.description,
                        image: imgData.data.url





                    }

                    // save products
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(products)


                    })

                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/myproducts')
                        })
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
