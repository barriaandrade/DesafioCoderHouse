import React, { useContext, useState } from 'react'


export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({children, defaultCart}) {

    const [cart, setCart] = useState(defaultCart);

    const cleanCart = () => {
        setCart(defaultCart);
    }

    const getFromCart = (id) => {
        return cart.find(obj => obj.id ===id)
    }

    const isInCart = (id) => {
        return id === undefined ? undefined : getFromCart(id) !== undefined
    }

    const add = (item) => {

        if (isInCart(item && item.id)){
            console.log("ya existe item");
            return;
        }
        setCart([...cart, item]);
        console.log('Añadiendo', item);
        

    }

    console.log(' en carrito ', cart);

    const remove = (item) =>{

        if (!isInCart(item && item.id)){
            console.log("no existe item");
            return;
        }
        setCart(cart.filter(obj => obj.id !== item.id));
        console.log('Removiendo', item.id);
    }

    const total = () => {
        let total = 0
        

        cart.forEach( item => {
            
            let cantidad = parseInt(item.total);
            let price = parseInt(item.price);
            let priceCant =  cantidad * price;
            total = total + priceCant;
            
        });

        return total;
    }

    const cantidad = () =>{
        let cantidad  = 0

        cart.forEach( item => {
            
            let cant = parseInt(item.total);

            cantidad = cantidad + cant;
            
        });

        return cantidad;
    }

    return <CartContext.Provider value={{cart, add, remove, total, cantidad, cleanCart}}>
        {children}
    </CartContext.Provider>
}


