import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Home() {
    const { user } = useContext(AuthContext);
    return (
        <>
            <h1>Hola</h1>
        </>
    );
}

export default Home;