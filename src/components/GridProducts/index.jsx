import { Grid, Paper, Typography } from "@mui/material";

function GridProducts(props) {
    const { products } = props; 
    return (
        <>
            <Grid container spacing={2}>
				{products.length > 0 &&
					products.map((product, index) => (
						<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
							<Paper sx={{padding: 3}}>
								<Typography>{product.name}</Typography>
							</Paper>
						</Grid>
					))}
			</Grid>
        </>
    )
}

export default GridProducts;