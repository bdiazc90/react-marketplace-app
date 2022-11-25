import { useState } from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { post } from "../../services";
import Swal from "sweetalert2";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await post("users/signup", values);
    if (data.ok) {
      Swal.fire({
        icon: "success",
        text: "Usuairo creado correctamente",
      });
      setValues({
        name: "",
        email: "",
        password: "",
      });
    } else {
      Swal.fire({
        icon: "error",
        text: data.message.detail,
      });
    }
  };

  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Paper
        sx={{
          width: 300,
        }}
      >
        <Box p={3} component="form" onSubmit={handleSubmit} method="post">
          <Typography textAlign="center" variant="h4">
            Sign Up
          </Typography>
          <Box my={3}>
            <TextField
              name="name"
              value={values.name}
              onChange={handleInputChange}
              label="Full name"
              fullWidth
              required
            />
          </Box>
          <Box my={3}>
            <TextField
              name="email"
              value={values.email}
              onChange={handleInputChange}
              type="email"
              label="E-mail"
              fullWidth
              required
            />
          </Box>
          <Box my={3}>
            <TextField
              name="password"
              value={values.password}
              onChange={handleInputChange}
              type="password"
              label="Password"
              fullWidth
              required
            />
          </Box>
          <Box my={3}>
            <Button type="submit" fullWidth variant="outlined">
              Register
            </Button>
          </Box>
          <Box>
            <Button
              component={Link}
              to="/login"
              sx={{
                textTransform: "capitalize",
              }}
            >
              Ya tengo cuenta
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
