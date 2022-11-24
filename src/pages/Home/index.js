import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { get } from "../../services";
import { AuthContext } from "../../context/AuthContext";

import { Paper, Typography } from "@mui/material";
import GridActions from "../../components/GridActions";
import { GridProducts } from "../../components";

function Home() {
	const { user } = useContext(AuthContext);
	const [productList, setProductList] = useState([]);
	const [refresh, setRefresh] = useState(false);

	async function getProducts() {
		const products = await get("products");
		setProductList(products.data);
	}

	useEffect(() => {
		getProducts();
	}, [refresh]);

	return (
		<>
			<Paper sx={{ padding: 3 }}>
				<Typography variant="h4" textAlign="center">
					MarketPlace
				</Typography>
			</Paper>
			<GridActions user={user} setRefresh={setRefresh} />
			<GridProducts products={productList} />
		</>
	);
}

export default Home;
