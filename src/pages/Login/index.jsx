import { Box, TextField, Button, Paper, Typography } from "@mui/material";

const Login = () => {
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
            Login
          </Typography>
          <Box my={3}>
            <TextField label="E-mail" fullWidth />
          </Box>
          <Box my={3}>
            <TextField label="Password" fullWidth />
          </Box>
          <Box my={3}>
            <Button fullWidth variant="outlined">
              Login
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
