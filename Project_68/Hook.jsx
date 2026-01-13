import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  getTotal
} from "../state/Cart.js"
import { ProductsData } from "../state/Products.js"

const Hook = () => {
  const dispatch = useDispatch()

  const { loading, error, data } = useSelector(state => state.products)
  const {cartData,total} = useSelector(state => state.cart)
  


  

  useEffect(() => {
    dispatch(ProductsData())
  }, [])

  useEffect(()=>{
    dispatch(getTotal())

  },[cartData])

  if (loading) return(
  <div className="hook">
    <div className="spinner"></div>
  </div>
  )
  if (error) return <h2>Error fetching products</h2>

  return (
    <div>
      <h1>Products</h1>
      {data.map(product => (
        <div key={product.id}>
          <h1>{product.name}-{product.id}</h1>
          <p>{product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h1>Cart</h1>
      {cartData.map(item => (
        <div key={item.id}>
          <p>
            {item.title} - Qty: {item.quantity}
          </p>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
      <h1>Total : {total} </h1>
    </div>
  )
}

export default Hook
