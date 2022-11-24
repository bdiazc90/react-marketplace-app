import { Grid, Paper, Typography } from "@mui/material";

function GridProducts(props) {
	const { products } = props;
	console.log(products);
	return (
		<>
			<Grid container spacing={2}>
				{products.length > 0 &&
					products.map((product, index) => (
						<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
							<Paper>
								<Typography>{product.name}</Typography>
							</Paper>
						</Grid>
					))}
			</Grid>
		</>
	);
}

export default GridProducts;
