import  { useContext } from 'react'
import { CartContext } from '../context/Cart'
import { Trash } from 'lucide-react';
import { onDelete } from '../utils/Cart';

const Cart = () => {
    const {cart,setCart}=useContext(CartContext);
  return (
    <div>
        <h1 >Welcome to Cart Page</h1>
        <div className='cart-con'>
            {cart.map(data=>(
                <div key={data.id} className='cart-data'>
                    <p>{data.id}</p>
                    <p>{data.name}</p>
                    <p>{data.price*data.quantity}</p>
                    <p>{data.quantity}</p>
                    <Trash onClick={()=>onDelete(data,cart,setCart)} size={20} color='black' style={{cursor:"pointer"}} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cart