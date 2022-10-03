import React , {useState} from 'react';
import { useParams } from 'react-router';
import {DATA} from '../Data';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from "../Redux/cartSlice";

const ProductDetail = () => {

    const [cartBtn, setCartBtn] = useState("Add to Cart")


    const proId = useParams();
    const proDetail = DATA.filter(x=> x.id == proId.id)
    const product = proDetail[0];
    // console.log(product);

    const dispatch = useDispatch()

    const handleCart = (product) => {
        if(cartBtn === "Add to Cart"){
            dispatch(addProduct({...product}))
            // console.log(v);
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(removeProduct({...product}))
            setCartBtn("Add to Cart")
        }
    }
  return (
    <>

    <div className="container my-5 py-5">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
                <img src={product.img} alt={product.title} height="500px"/>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className='display-5 fw-bold'>{product.title}</h1>
                <hr/>
                <h2 className='my-4'>${product.price}</h2>
                <p className='lead'>{product.desc}</p>
                <button onClick={()=>handleCart(product)} className='btn btn-outline-primary my-5'>{cartBtn}</button>
            </div>
        </div>
    </div>

    </>
  )
}

export default ProductDetail