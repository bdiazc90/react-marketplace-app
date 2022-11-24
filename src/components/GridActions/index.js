import { useState } from "react";

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

import { post } from "../../services";

function GridActions(props) {
	const { user, setRefresh } = props;
	const [openDialog, setOpenDialog] = useState(false);
	const [productForm, setProductForm] = useState({
		name: "",
		image_url: "",
		price: null,
		user_id: user.id,
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		if (name == "price" && isNaN(value)) {
			e.target.value = "0.00";
			return;
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
		setRefresh(true);
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

	return (
		<>
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

export default GridActions;
