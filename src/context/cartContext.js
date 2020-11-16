import React, { useContext, useState } from 'react'


export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({children, defaultCart}) {

    const [cart, setCart] = useState(defaultCart);

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
        setCart([cart.filter(obj => obj.id !== item.id)]);
        console.log('Removiendo', item.id);
    }


    return <CartContext.Provider value={{cart, add, remove}}>
        {children}
    </CartContext.Provider>
}


