import React, { useRef, useState } from "react";
import {
    Box,
    Container,
    Grid,
    TextField,
    Typography,
    InputAdornment,
    IconButton,
    Button,
    Link,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
const Signup = () => {
    const [showPass, setShowPass] = useState(false);
    const [showConPass, setShowConPass] = useState(false);
    const [imageFile, setImageFile] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "", 
    });


    const fileInputRef = useRef(null);

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const handleShowConPass = () => {
        setShowConPass(!showConPass);
    };

    const HandleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setImageFile(file);
    };

    const HandleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleRemoveFile = () => {
        setImageFile(null);
        fileInputRef.current.value = "";
    };

    const changeHandler = (e) => {
        const { value, name } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const [user, setUser] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        console.log(imageFile);

        const formPayload = new FormData(); // Renaming the variable
        formPayload.append("name", formData.name);
        formPayload.append("email", formData.email);
        formPayload.append("phone", formData.phone);
        formPayload.append("password", formData.password);
        formPayload.append("confirmPassword", formData.confirmPassword);
        formPayload.append("avatar", imageFile);
        setUser(formPayload)
        console.log('signed up successfully', user );
    }
    return (
        <Container
            maxWidth="sm"
            sx={{
                my: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                mx: "auto",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    p: 2, // Adding some padding
                    gap: 4,
                }}
            >
                <Typography>Sign Up</Typography>

                <Box
                    component={"form"}
                    onSubmit={submitHandler}
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                required
                                fullWidth
                                name="name"
                                value={formData.name}
                                onChange={changeHandler}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                required
                                name="email"
                                value={formData.email}
                                onChange={changeHandler}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Phone"
                                variant="outlined"
                                type="number"
                                fullWidth
                                required
                                name="phone"
                                value={formData.phone}
                                onChange={changeHandler}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Password"
                                variant="outlined"
                                fullWidth
                                required
                                type={showPass ? "text" : "password"}
                                autoComplete="new-password"
                                name="password"
                                value={formData.password}
                                onChange={changeHandler}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleShowPass}
                                            >
                                                {showPass ? (
                                                    <VisibilityIcon />
                                                ) : (
                                                    <VisibilityOffIcon />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Confirm Password"
                                variant="outlined"
                                fullWidth
                                required
                                autoComplete="new-password"
                                type={showConPass ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={changeHandler}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleShowConPass}
                                            >
                                                {showConPass ? (
                                                    <VisibilityIcon />
                                                ) : (
                                                    <VisibilityOffIcon />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                sx={{ py: 1 }}
                                color="secondary"
                                variant="contained"
                                startIcon={<SaveIcon />}
                                onClick={HandleButtonClick}
                            >
                                Upload Image
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    hidden
                                    onChange={HandleFileChange}
                                />
                            </Button>

                            {imageFile && (
                                <Box
                                    mt={2}
                                    display="flex"
                                    color={"inherit"}
                                    alignItems="center"
                                >
                                    <Typography variant="body2" sx={{ mr: 2 }}>
                                        Selected File: {imageFile.name}
                                    </Typography>
                                    <IconButton
                                        onClick={handleRemoveFile}
                                        color="error"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            )}
                        </Grid>
                    </Grid>

                    <LoadingButton
                        fullWidth
                        startIcon={<SendIcon />}
                        loadingPosition="start"
                        variant="contained"
                        sx={{ py: 1 }}
                        type="submit"
                    >
                        <span>Submit</span>
                    </LoadingButton>
                </Box>

                <Link
                    variant="body2"
                    href="/login"
                    sx={{ ":hover": { cursor: "pointer" }, ml: "auto" }}
                >
                    Already have an account ?
                </Link>
            </Box>

            <Typography variant="body2">
                Copyright ©{" "}
                <Link href="#" color={"inherit"}>
                    JJ.com
                </Link>{" "}
                2024 .
            </Typography>
        </Container>
    );
};

export default Signup;