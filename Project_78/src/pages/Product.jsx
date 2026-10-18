
import { useContext } from "react";
import { cartData } from "../data/data";
import { onAdd, onUpdate } from "../utils/Cart";
import { CartContext } from "../context/Cart";

const Product = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="prod-con">
      <h1>Keep Adding More</h1>

      <div className="cards">
        {cartData.map((data) => {
          // Check whether product exists in cart
          const cartItem = cart.find(
            (item) => item.id === data.id
          );

          return (
            <div className="card" key={data.id}>
              <img
                className="image"
                src={data.image}
                alt={data.name}
              />

              <div className="con">
                <h1>{data.name}</h1>
                <p>{data.price}</p>
                <p>{data.category}</p>
                <p>{data.rating}</p>

                {cartItem ? (
                  <div>
                    <button
                      onClick={()=>onUpdate(data,cart,setCart,-1)}
                    >
                      -
                    </button>

                    <span> {cartItem.quantity} </span>

                    <button
                      onClick={()=>onUpdate(data,cart,setCart,1)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="add"
                    onClick={() => onAdd(data, cart, setCart)}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
