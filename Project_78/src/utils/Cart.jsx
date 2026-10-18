




export const onAdd=(product,cart,setCart)=>{
    const productObj={
        id:product.id,
        name:product.name,
        price:product.price,
        quantity:1
    }

    const newData=[...cart,productObj];
    setCart(newData);

}

export const onDelete=(product,cart,setCart)=>{
    const newData=cart.filter(data=>data.id!==product.id);
    return setCart(newData);
}

export const onUpdate=(product,cart,setCart,value)=>{
    const newData=cart.map(data=>{
        if(data.id===product.id){
            if(data.quantity+value<=0 || data.quantity+value>5) return data;
            const updatedProduct={...data,quantity:data.quantity+value};
            return updatedProduct;
        }
        return data;
    })
    return setCart(newData);
}