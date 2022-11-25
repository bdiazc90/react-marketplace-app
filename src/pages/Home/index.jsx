import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Divider, Paper, Typography } from "@mui/material";
import { GridProducts } from "../../components";

function Home() {
    const { user } = useContext(AuthContext);
    const productsExample = [
        {name: "p1"},
        {name: "p2"},
        {name: "p3"},
        {name: "p4"},
        {name: "p5"},
        {name: "p6"},
        {name: "p7"},
    ]
    return (
        <>
            <Paper sx={{padding: 3}}>
                <Typography variant="h4" textAlign="center">
                    Marketplace App
                </Typography>
            </Paper>
            <Divider sx={{margin: 3}} />
            <GridProducts products={productsExample} />
        </>
    );
}

export default Home;