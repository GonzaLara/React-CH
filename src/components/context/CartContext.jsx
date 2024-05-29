import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let product = cart.find(prod => prod.id === item.id);
            product.quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, quantity: quantity }]);
        }
    }

    const removeItem = (id) => {
        const items = cart.filter(item => item.id !== id);
        setCart([...items]);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id == id);
    }

    const countProducts = () => {
        return cart.reduce((acum, item) => acum += item.quantity, 0);
    }

    const finalProducts = () => {
        return cart.reduce((acum, item) => acum += item.quantity * item.precio, 0);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, countProducts, finalProducts }}>
            {children}
        </CartContext.Provider>
    )

    // const productos = [
    //     { id: 1, nombre: "Mochila Rosa", precio: 28500, imagen: "https://simpsonsmerch.b-cdn.net/wp-content/uploads/2022/08/The-Simpsons-Canvas-Backpack-Anime-Student-Schoolbag-Teenger-Unisex-Packsack-Mochila-Travel-Laptop-Bag-Cartoon-6.jpg", stock: 7, categoria: "mochila" },
    //     { id: 2, nombre: "Mochila Azul", precio: 28500, imagen: "https://simpsonsmerch.com/wp-content/uploads/2022/08/The-Simpsons-Canvas-Backpack-Anime-Student-Schoolbag-Teenger-Unisex-Packsack-Mochila-Travel-Laptop-Bag-Cartoon-4-1.jpg_640x640-4-1.jpg", stock: 7, categoria: "mochila" },
    //     { id: 3, nombre: "Mochila Negra", precio: 30000, imagen: "https://simpsonsmerch.b-cdn.net/wp-content/uploads/2022/08/The-Simpsons-Canvas-Backpack-Anime-Student-Schoolbag-Teenger-Unisex-Packsack-Mochila-Travel-Laptop-Bag-Cartoon-2-1.jpg", stock: 2, categoria: "mochila" },
    //     { id: 4, nombre: "Funko Pop Bart", precio: 40999, imagen: "https://cdn.awsli.com.br/800x800/84/84034/produto/115114684/funko-pop--simpsons-gangster-bart-900-c-800-vbn916yg6f.jpg", stock: 1, categoria: "juguete" },
    //     { id: 5, nombre: "Remera Amarilla", precio: 12000, imagen: "https://i5.walmartimages.com/seo/The-Simpsons-Boys-Bart-Simpson-Skating-Shirt-Krusty-The-Klown-Bart-and-Homer-Simpson-Tee-Graphic-T-Shirt_2eff40cc-7179-486e-9223-206ce4560b27.ccbba1a88be8cf06f991244737b8f1a9.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", stock: 5, categoria: "remera" },
    //     { id: 6, nombre: "Remera Negra", precio: 14600, imagen: "https://m.media-amazon.com/images/I/71tN3ysi4DL._AC_UY1000_.jpg", stock: 5, categoria: "remera" },
    //     { id: 7, nombre: "Buzo Amarillo", precio: 25499, imagen: "https://www.cosplaysos.com/cdn/shop/products/CSSG096_1200x1200.jpg?v=1579781453", stock: 4, categoria: "buzo" },
    //     { id: 8, nombre: "Buzo Celeste", precio: 23000, imagen: "https://cdn.shopify.com/s/files/1/1235/0120/products/smhd3298-The-Simpsons-Hoodie-1-Square.jpg?v=1667922718", stock: 6, categoria: "buzo" },
    //     { id: 9, nombre: "Buzo Rosa", precio: 22000, imagen: "https://img.fruugo.com/product/2/30/232274302_max.jpg", stock: 2, categoria: "buzo" }
    // ];

    // const[carrito, setCarrito] = useState([]);

    // const totalProductos = () => {
    //     return carrito.length;
    // }

    // const agregarProducto = (id) => {
    //     const producto = productos.find(item=>item.id ===id);
    //     setCarrito([...carrito, {...producto}]);
    //     console.log("Producto agregado!");
    // }

    // return (
    //     <CartContext.Provider value={{productos, carrito, totalProductos, agregarProducto}}>
    //         {children}
    //     </CartContext.Provider>
    // )
}
export default CartContextProvider;