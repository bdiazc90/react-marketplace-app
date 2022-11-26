import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
	const { children } = props;

	const [cart, setCart] = useState(
		JSON.parse(localStorage.getItem("cart")) ?? []
	);

	function addCart(item) {
		const newCart = [...cart, item];
		setCart(newCart);
		localStorage.setItem("cart", JSON.stringify(newCart));
	}

	function removeCart(id) {
		const newCart = cart.filter((item) => item.id !== id);
		setCart(newCart);
		localStorage.setItem("cart", JSON.stringify(newCart));
	}

	function totalCart() {
		let suma = 0;
		cart.map((item) => {
			suma += item.price;
		});
		return suma;
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addCart,
				removeCart,
				totalCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
