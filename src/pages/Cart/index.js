import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { GridActions, GridProducts, ListProducts } from "../../components";
import { post } from "../../services";

function Cart() {
	const { user } = useContext(AuthContext);
	const { cart, totalCart } = useContext(CartContext);
	const [products, setProducts] = useState([]);

	async function placeOrder() {
		const orderDetail = cart.map((item) => {
			return {
				product_id: item.id,
				quantity: 1,
				price: item.price,
			};
		});
		const order = {
			user_id: user.id,
			created_at: "2022-11-25 23:05:00",
			order_detail: orderDetail,
		};
		console.log(order);
		const response = await post("orders/add", order);
	}

	useEffect(() => {
		setProducts(cart);
	}, [cart]);

	return (
		<>
			<Paper sx={{ padding: 3 }}>
				<Typography variant="h4" textAlign="center">
					Marketplace: Cart
				</Typography>
			</Paper>
			<Divider sx={{ margin: 3 }} />
			<ListProducts list={products} />
			<Typography textAlign="center">
				Total a pagar: $ {totalCart()}
			</Typography>
			<Box
				sx={{
					margin: "10 auto",
					maxWidth: 300,
					textAlign: "center",
					display: "flex",
					alignContent: "center",
					justifyContent: "center",
				}}
			>
				<Button variant="contained" fullWidth onClick={placeOrder}>
					Place Order
				</Button>
			</Box>
		</>
	);
}

export default Cart;
