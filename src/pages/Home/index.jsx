import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Divider, Paper, Typography } from "@mui/material";
import { GridProducts } from "../../components";

import { get } from "../../services";

function Home() {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    async function getProducts() {
        const response = await get("products");
        if (response.ok) {
            setProducts(response.data);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);
    
    return (
        <>
            <Paper sx={{padding: 3}}>
                <Typography variant="h4" textAlign="center">
                    Marketplace App
                </Typography>
            </Paper>
            <Divider sx={{margin: 3}} />
            <GridProducts list={products} />
        </>
    );
}

export default Home;