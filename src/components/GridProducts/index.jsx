import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { post } from "../../services";

function GridProducts(props) {
    const { list, user, addRefresh } = props;

	const { cart, addCart, removeCart } = useContext(CartContext);

	async function deleteProduct(product) {
		const response = await post("products/remove", {product_id: product.id});
		addRefresh();
	}

    return (
        <>
            <Grid container spacing={2}>
				{list.length > 0 &&
					list.map((product, index) => (
						<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="140"
									image={product.image_url}
									alt="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{product.name}
									</Typography>
									<Typography gutterBottom variant="h6" component="div">
										$ {product.price}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{product.user_name}
									</Typography>
									{(product.user_id !== user.id) ?
										(cart.find((item) => item.id === product.id) === undefined ?
											(<Button
												fullWidth
												onClick={() => addCart(product)}
												variant="contained"
												>
													Add to cart
												</Button>)
												:
											(<Button
												fullWidth
												onClick={() => removeCart(product.id)}
												color="error"
												variant="contained"
												>
													Remove from cart
												</Button>)
										)
									: (
										<Button
												fullWidth
												onClick={() => deleteProduct(product)}
												color="error"
												variant="contained"
												>
													Delete Product
												</Button>
									)}									
								</CardContent>
								</Card>
						</Grid>
					))}
			</Grid>
        </>
    )
}

export default GridProducts;