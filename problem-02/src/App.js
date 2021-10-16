import { useEffect, useState, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import _ from "lodash";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import "./App.css";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#11131b",
    },
  },
});

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);
  const [vertical, setVertical] = useState("top");
  const [horizontal, setHorizontal] = useState("center");

  const onSubmit = (data) => {
    if (_.isEmpty(errors)) {
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="body">
      <div className="formWrapper">
        <h1 className="title">Form Validation</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputWrapper">
            <TextField
              fullWidth
              error={errors.name}
              id="name"
              label="Name"
              {...register("name", { required: true })}
              helperText={errors.name && "Name is required"}
              style={{ margin: "5px 0" }}
              variant="outlined"
            />
          </div>

          <div className="inputWrapper">
            <TextField
              fullWidth
              error={errors.email}
              id="email"
              label="Email"
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              })}
              helperText={errors.email && "Type a valid email"}
              style={{ margin: "5px 0" }}
              variant="outlined"
            />
          </div>

          <div className="inputWrapper">
            <TextField
              fullWidth
              error={errors.password}
              id="password"
              label="Password"
              type="password"
              {...register("password", { required: true, minLength: 8 })}
              helperText={
                errors.password && "Password must have minimum of 8 characters"
              }
              style={{ margin: "5px 0" }}
              variant="outlined"
            />
          </div>

          <ThemeProvider theme={theme}>
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                type="submit"
                color="secondary"
                size="large"
              >
                Submit
              </Button>
            </Box>
          </ThemeProvider>
        </form>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          key={vertical + horizontal}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Form validated. You shall pass!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default App;
