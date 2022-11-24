import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
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
        <Box p={3}>
          <Typography textAlign="center" variant="h4">
            Sign Up
          </Typography>
          <Box my={3}>
            <TextField label="Full name" fullWidth />
          </Box>
          <Box my={3}>
            <TextField type="email" label="E-mail" fullWidth />
          </Box>
          <Box my={3}>
            <TextField type="password" label="Password" fullWidth />
          </Box>
          <Box my={3}>
            <Button fullWidth variant="outlined">
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
