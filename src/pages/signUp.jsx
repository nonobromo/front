import React from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Container,
  Input,
} from "@mui/material";

import { createUser } from "../services/usersService";
import { useFormik } from "formik";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
import regaxs from "../regax";
import { toast } from "react-toastify";
const SignUp = () => {
  const navigate = useNavigate();
  const userForm = useFormik({
    initialValues: {
      name: {
        first: "",
        last: "",
      },
      email: "",
      phone: "",
      password: "",
    },
    validate(values) {
      const schema = Joi.object({
        name: Joi.object({
          first: Joi.string().min(2).max(255).required().label("First Name"),
          last: Joi.string().min(2).max(255).required().label("Last Name"),
        }).required(),
        email: Joi.string().min(6).max(255).required().label("Email"),
        phone: Joi.string().min(9).max(11).required().label("Phone"),
        password: Joi.string()
          .min(7)
          .max(20)
          .required()
          .pattern(regaxs.passwordRegexSignUp)
          .message(
            "must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*- "
          ),
        picture: Joi.string().allow("").label("Picture"),
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
        toast.success("Signed Up!");
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
