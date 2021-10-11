import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const {user} = useAuth();

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} placeholder="Your Name" {...register("name")} />

                <input defaultValue={user.email} placeholder="Your Email"  {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}

                <input defaultValue="" placeholder="Your Address" {...register("address")} />
                <input defaultValue="" placeholder="Your City" {...register("city")} />

                <input defaultValue="" placeholder="Your Phone" {...register("Phone")} />


                <input type="submit" />

            </form>
        </div>
    );
};

export default Shipping;