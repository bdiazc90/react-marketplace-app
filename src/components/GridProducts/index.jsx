import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

function GridProducts(props) {
    const { list } = props; 
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
								</CardContent>
								</Card>
						</Grid>
					))}
			</Grid>
        </>
    )
}

export default GridProducts;