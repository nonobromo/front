import React from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

import { useFormik } from "formik";
import Joi from "joi";
import { useAuth } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const userForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate(values) {
      const schema = Joi.object({
        email: Joi.string().min(6).max(255).required().label("email"),
        password: Joi.string().min(6).max(255).required().label("Password"),
      });

      const { error } = schema.validate(values, { abortEarly: false });

      if (!error) return null;

      const errors = {};
      for (const detail of error.details) {
        const key = detail.path.join(".");
        errors[key] = detail.message;
      }
      return errors;
    },
    async onSubmit(values) {
      try {
        await login(values);
        navigate("/");
      } catch (er) {
        console.log(er);
      }
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        WebkitFlexGrow: 0,
      }}
    >
      <Typography textAlign={"center"} fontSize={60}>
        Sign In
      </Typography>

      <Container
        maxWidth="xs"
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          onSubmit={userForm.handleSubmit}
          component="form"
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            border: "1px solid #ccc",
            borderRadius: 2,
            width: "100%",
          }}
        >
          <Typography variant="h5" textAlign="center">
            Sign In to your account
          </Typography>
          <TextField
            {...userForm.getFieldProps("email")}
            type="email"
            label="Email"
            required
          />
          <TextField
            {...userForm.getFieldProps("password")}
            type="password"
            label="Password"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SignIn;
