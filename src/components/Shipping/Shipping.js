import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';


const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const {user} = useAuth();

    const onSubmit = data => {
        console.log(data)
    };

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();


    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handlePlaceOrder = () => {
        setCart([]);
        clearTheCart();
        history.push('/placeorder');
    }

    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} placeholder="Your Name" {...register("name")} />

                <input defaultValue={user.email} placeholder="Your Email"  {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}

                <input defaultValue="" placeholder="Your Address" {...register("address")} />
                <input defaultValue="" placeholder="Your City" {...register("city")} />

                <input defaultValue="" placeholder="Your Phone" {...register("Phone")} />

                <input  onClick={handlePlaceOrder}  className="btn-regular w-auto" type="submit" />
            
            </form>
        </div>
    );
};

export default Shipping;