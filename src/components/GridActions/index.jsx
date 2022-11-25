import { useState } from "react";
import { Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import { post } from "../../services";

function GridActions(props) {
    const { user, addRefresh } = props;
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState({
        name: "",
        image_url: "",
        price: "",
        user_id: user.id,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "price" && isNaN(value)) {
            e.target.value = 0;
            return;
        }
        setProduct({
          ...product,
          [name]: value,
        });
    };

    function closeDialog() {
        setProduct({
            name: "",
            image_url: "",
            price: "",
            user_id: user.id,
        });
        setOpen(false);
    }

    async function saveProduct() {
        const response = await post("products/add", product);
        if (response.ok) {
            closeDialog();
            addRefresh(true);
        } else {
            console.log(response);
        }
    }

    return (
        <Grid container spacing={2}>
            <Grid item>
                <Button variant="contained" color="secondary" onClick={() => addRefresh()}>Refresh List</Button>
            </Grid>
            <Grid item>
            <Button variant="contained" onClick={() => setOpen(true)}>Add Product</Button>
            </Grid>
            
            <Dialog open={open} onClose={closeDialog}>
                <DialogTitle>New Product</DialogTitle>
                <DialogContent>

                    <TextField
                        sx={{marginTop: 2}}
                        autoFocus
                        label="Name"
                        type="text"
                        fullWidth
                        name="name"
                        value={product.name}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        sx={{marginTop: 2}}
                        autoFocus
                        label="Image url"
                        placeholder="http://"
                        type="text"
                        fullWidth
                        name="image_url"
                        value={product.image_url}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextField
                        sx={{marginTop: 2}}
                        autoFocus
                        label="Price"
                        placeholder="0.00"
                        type="text"
                        fullWidth
                        name="price"
                        value={product.price}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                
                </DialogContent>
                <DialogActions>
                <Button color="error" onClick={closeDialog}>Cancel</Button>
                <Button variant="contained" onClick={saveProduct}>Save</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}

export default GridActions;