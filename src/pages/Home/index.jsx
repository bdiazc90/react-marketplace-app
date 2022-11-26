import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Divider, Paper, Typography } from "@mui/material";
import { GridActions, GridProducts } from "../../components";

import { get } from "../../services";

function Home() {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [refresh, setRefresh] = useState(0);

    function addRefresh() {
        setRefresh(refresh + 1);
    }

    async function getProducts() {
        const response = await get("products");
        if (response.ok) {
            setProducts(response.data);
        }
    }

    useEffect(() => {
        getProducts();
    }, [refresh]);
    
    return (
        <>
            <Paper sx={{padding: 3}}>
                <Typography variant="h4" textAlign="center">
                    Marketplace App
                </Typography>
            </Paper>
            <Divider sx={{margin: 3}} />
            <GridActions sx={{margin: 3}} user={user} addRefresh={addRefresh} />
            <Divider sx={{margin: 3, borderColor: "black", borderStyle: "dashed"}} />
            <GridProducts list={products} user={user} addRefresh={addRefresh} />
        </>
    );
}

export default Home;