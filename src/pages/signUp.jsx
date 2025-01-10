import React from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Container,
} from "@mui/material";

import { createUser } from "../services/usersService";
import { useFormik } from "formik";
import Joi from "joi";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const userForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      biz: false,
    },
    validate(values) {
      const schema = Joi.object({
        name: Joi.string().min(2).max(255).required().label("Name"),
        email: Joi.string().min(6).max(255).required().label("email"),
        password: Joi.string().min(6).max(255).required().label("Password"),
        biz: Joi.boolean().label("Business"),
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
        await createUser(values);
        navigate("/sign-in");
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
        // padding: 2,
      }}
    >
      <Typography textAlign={"center"} fontSize={60} marginBottom={3}>
        Sign Up
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
            gap: 3,
            border: "1px solid #ccc",
            borderRadius: 2,
            width: "100%",
          }}
        >
          <Typography variant="h5" textAlign="center">
            Create User
          </Typography>
          <TextField
            {...userForm.getFieldProps("name")}
            type="text"
            label="Name"
            required
          />
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
          <FormControlLabel
            control={<Checkbox />}
            label="Business"
            {...userForm.getFieldProps("biz")}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;
