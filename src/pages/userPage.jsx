import {
  Avatar,
  Box,
  Button,
  Container,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "../context/auth.context";
import useUser from "../hooks/getUser";
import { useFormik } from "formik";
import Joi from "joi";
import { updateUserInfo, updateProfilePicture } from "../services/usersService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function UserPageInfo() {
  const { user } = useAuth();
  const { userInfo } = useUser(user._id);

  const altName = `${userInfo?.name?.first[0]}${userInfo?.name?.last[0]}`;

  const editUserInfoForm = useFormik({
    initialValues: {
      name: {
        first: "",
        last: "",
      },
      phone: "",
    },
    validate(values) {
      const schema = Joi.object({
        name: Joi.object({
          first: Joi.string().min(2).max(255).required().label("First Name"),
          last: Joi.string().min(2).max(255).required().label("Last Name"),
        }),
        phone: Joi.string().min(9).max(11).required().label("Phone Number"),
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
        await updateUserInfo(user._id, values);
        toast.success("Info updated!");
      } catch (err) {
        toast.error("Failed to update info");
      }
    },
  });

  useEffect(() => {
    if (userInfo) {
      editUserInfoForm.setValues({
        name: {
          first: userInfo?.name?.first || "",
          last: userInfo?.name?.last || "",
        },
        phone: userInfo.phone,
      });
    }
  }, [userInfo]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const response = await updateProfilePicture(user._id, file);
      toast.success("Picutre Updated!");
    } catch (error) {
      toast.error("Failed to update Picture");
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h1" sx={{ fontSize: "48px", marginTop: "12px" }}>
        Personal Info
      </Typography>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", marginTop: 4, gap: 2 }}
        onSubmit={editUserInfoForm.handleSubmit}
      >
        <TextField
          {...editUserInfoForm.getFieldProps("name.first")}
          type="text"
          label="First Name"
        />
        <TextField
          {...editUserInfoForm.getFieldProps("name.last")}
          type="text"
          label="Last Name"
        />
        <TextField
          {...editUserInfoForm.getFieldProps("phone")}
          type="phone"
          label="Phone Number"
        />

        <Button type="submit" variant="contained" color="primary">
          Save Changes
        </Button>

        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 8,
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ width: "100%", marginBottom: "12px" }}>
            Change your profile Picture
          </Typography>

          <Avatar
            sx={{ width: 100, height: 100, objectFit: "cover" }}
            src={userInfo?.picture}
            alt={altName}
          />

          <Input
            type="file"
            sx={{ marginTop: "24px", marginBottom: "24px" }}
            onChange={handleFileUpload}
          />
        </Container>
      </Box>
    </Container>
  );
}

export default UserPageInfo;
