import { Avatar, Box, Button, Container, Input, TextField } from "@mui/material";
import { useAuth } from "../context/auth.context";
import useUser from "../hooks/getUser";
import { useFormik } from "formik";
import Joi from "joi";
import { updateUserInfo } from "../services/usersService";
import { useEffect, useState } from "react";

function UserPageInfo() {
    const { user } = useAuth();
    const { userInfo } = useUser(user._id);
    const [selectedImage, setSelectedImage] = useState(userInfo?.picture || "");

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
            } catch (err) {
                console.log(err);
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
                picture: userInfo.picture || "",
            });
            setSelectedImage(userInfo?.picture || "");
        }
    }, [userInfo]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result); // Preview the selected image
                editUserInfoForm.setFieldValue("picture", reader.result); // Save to form values
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Container maxWidth="xs">
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column", marginTop: 4, gap: 2 }}
                onSubmit={editUserInfoForm.handleSubmit}
            >
                <TextField {...editUserInfoForm.getFieldProps("name.first")} type="text" label="First Name" />
                <TextField {...editUserInfoForm.getFieldProps("name.last")} type="text" label="Last Name" />
                <TextField {...editUserInfoForm.getFieldProps("phone")} type="phone" label="Phone Number" />

                <Container maxWidth="xs" sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
                    <Avatar
                        alt="User Avatar"
                        src={selectedImage}
                        sx={{ width: 100, height: 100, objectFit: "cover" }}
                    />
                </Container>

                {/* File Input for Image Upload */}
                <Input type="file" accept="image/*" onChange={handleImageChange} />

                <Button type="submit" variant="contained" color="primary">
                    Save Changes
                </Button>
            </Box>
        </Container>
    );
}

export default UserPageInfo;
