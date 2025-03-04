import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Input,
  InputLabel,
} from "@mui/material";

import { createUser } from "../services/usersService";
import { useFormik } from "formik";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { createUserValidateSchema, createUserValues } from "../../schemas";
const SignUp = () => {
  const navigate = useNavigate();
  const userForm = useFormik({
    initialValues: createUserValues,
    validate(values) {
      const schema = createUserValidateSchema;

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
        toast.success("Signed Up!");
      } catch (er) {
        toast.error("Failed to sign up");
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
            {...userForm.getFieldProps("name.first")}
            type="text"
            label="First Name"
            required
            error={
              !!(userForm.touched.name?.first && userForm.errors["name.first"])
            }
            helperText={
              userForm.touched.name?.first && userForm.errors["name.first"]
            }
          />

          <TextField
            {...userForm.getFieldProps("name.last")}
            type="text"
            label="Last Name"
            required
            error={
              !!(userForm.touched.name?.last && userForm.errors["name.last"])
            }
            helperText={
              userForm.touched.name?.last && userForm.errors["name.last"]
            }
          />
          <TextField
            {...userForm.getFieldProps("email")}
            type="email"
            label="Email"
            required
            error={!!(userForm.touched.email && userForm.errors["email"])}
            helperText={userForm.touched.email && userForm.errors["email"]}
          />
          <TextField
            {...userForm.getFieldProps("phone")}
            type="text"
            label="Phone"
            required
            error={!!(userForm.touched.phone && userForm.errors["phone"])}
            helperText={userForm.touched.phone && userForm.errors["phone"]}
          />
          <TextField
            {...userForm.getFieldProps("password")}
            type="password"
            label="Password"
            required
            error={!!(userForm.touched.password && userForm.errors["password"])}
            helperText={
              userForm.touched.password && userForm.errors["password"]
            }
          />
          <InputLabel>
          Upload a profile picture
          </InputLabel>
          <Input
            {...userForm.getFieldProps("picture")}
            type="file"
            label="Picture"
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
