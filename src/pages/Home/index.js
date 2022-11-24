import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import { TaskForm, TaskCard } from "../../components";
import { get, post } from "../../services";
import { AuthContext } from "../../context/AuthContext";

import {
	Paper,
	Typography,
	Divider,
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Box,
	TextField,
	DialogActions,
} from "@mui/material";

import Swal from "sweetalert2";

function Home() {
	const { user } = useContext(AuthContext);
	const [productList, setProductList] = useState([]);
	const [openDialog, setOpenDialog] = useState(false);

	const [productForm, setProductForm] = useState({
		name: "",
		image_url: "",
		price: null,
		user_id: user.id,
	});

	async function getProducts() {
		const products = await get("products");
		setProductList(products);
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		if (name == "price" && isNaN(value)) {
			e.target.value = "0.00";
			return false;
		}

		setProductForm({
			...productForm,
			[name]: value,
		});
	};

	function closeDialogProduct() {
		setProductForm({
			name: "",
			image_url: "",
			price: null,
			user_id: user.id,
		});
		setOpenDialog(false);
	}

	async function saveProduct() {
		const response = await post("products/add", productForm);
		closeDialogProduct();
		if (response.ok) {
			Swal.fire({
				icon: "success",
				text: "Product added",
			});
		} else {
			Swal.fire({
				icon: "error",
				text: response.message,
			});
		}
	}

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<>
			<Paper sx={{ padding: 3 }}>
				<Typography variant="h4" textAlign="center">
					MarketPlace
				</Typography>
			</Paper>
			<Paper sx={{ padding: 3, marginTop: 3 }}>
				<Button variant="contained" onClick={() => setOpenDialog(true)}>
					New Product
				</Button>
			</Paper>
			<Divider sx={{ margin: 3 }} />
			<Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
				<DialogTitle textAlign="center">New Product</DialogTitle>
				<Divider sx={{ margin: 1 }} />
				<DialogContent>
					<Box component="form">
						<TextField
							fullWidth
							name="name"
							value={productForm.name}
							onChange={handleInputChange}
							label="Nombre"
							variant="outlined"
						/>
						<TextField
							fullWidth
							sx={{ mt: 2 }}
							name="image_url"
							value={productForm.image_url}
							onChange={handleInputChange}
							label="Imagen (url)"
							placeholder="http://"
							variant="outlined"
						/>
						<TextField
							fullWidth
							sx={{ mt: 2 }}
							name="price"
							value={productForm.price}
							onChange={handleInputChange}
							label="Precio"
							placeholder="0.00"
							variant="outlined"
						/>
					</Box>
				</DialogContent>
				<DialogActions sx={{ p: 3 }}>
					<Button color="error" onClick={closeDialogProduct}>
						Cancel
					</Button>
					<Button variant="contained" onClick={saveProduct}>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default Home;
