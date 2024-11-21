import {
    Box,
    Grid,
    Link,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const Login = () => {

    const [formData, setFormData] = useState({
      email: "", 
      password: "", 
    });
    const [user, setUser] = useState({})


    const changeHandler = (e) => {
      const {value, name} = e.target;

      setFormData((prev) => ({...prev, [name]: value}));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        setUser(formData)
        console.log("after login -> ", user);
    };

    return (
        <Grid container sx={{ height: "100vh" }}>
            <Grid item xs={false} sm={4} md={7} />
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={10}
                square
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                        alignItems: "center",
                        justifyContent: "center",
                        my: 8,
                        mx: 4,
                    }}
                >
                    <Typography>Sign In</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            alignItems: "center",
                            width: "100%",
                        }}
                        component={"form"}
                        onSubmit={submitHandler}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 4,
                                alignItems: "center",
                                width: "100%",
                            }}
                        >
                            <TextField
                                label="Email"
                                fullWidth
                                required
                                name="email"
                                value={formData.email}
                                onChange={changeHandler}
                            ></TextField>

                            <TextField
                                label="Password"
                                fullWidth
                                required
                                name="password"
                                value={formData.password}
                                onChange={changeHandler}
                            ></TextField>
                        </Box>

                        <LoadingButton
                            fullWidth
                            variant="contained"
                            sx={{ py: 1 }}
                            type="submit"
                        >
                            Sign In
                        </LoadingButton>
                    </Box>

                    <Box
                        sx={{
                            width: "100%",
                            display: "flex", // Using flexbox for easier alignment control
                            justifyContent: { xs: "center", sm: "flex-start" }, // Center on small devices, left-align on larger devices
                        }}
                    >
                        <Link
                            sx={{
                                textUnderlineOffset: 4, // Slight offset for underline
                                ":hover": { cursor: "pointer" }, // Pointer cursor on hover
                            }}
                            variant="body1"
                            href="/signup"
                        >
                            Don't have an account? Sign Up
                        </Link>
                    </Box>

                    <Typography variant="body2">
                        Copyright © <Link variant="body2" color={'inherit'} sx={{":hover": {cursor: 'pointer'}, textUnderlineOffset: 4}}>JJ.com</Link> 2024.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Login;
