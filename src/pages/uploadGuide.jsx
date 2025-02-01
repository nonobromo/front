import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import Joi from "joi";
import { uploadTask } from "../services/tasksService";

function CreateNewGuide() {
  const taskForm = useFormik({
    initialValues: {
      title: "",
      description: "",
      dueDate: "",
      priority: "Medium",
      category: "Other",
    },
    validate(values) {
      const schema = Joi.object({
        title: Joi.string().min(2).max(255).required().label("Task Title"),
        description: Joi.string().min(10).max(1024).required(),
        priority: Joi.string().valid("Low", "Medium", "High").required(),
        category: Joi.string()
          .valid("Cleaning", "Recovery", "Printing", "Assembly", "Other")
          .default("Other")
          .required(),
        dueDate: Joi.string().required().label("Due Date"),
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
        await uploadTask(values);
      } catch (error) {
        console.error("Error uploading new task:", error);
      }
    },
  });

  return (
    <Container maxWidth="sm" sx={{ minHeight: "100vh" }}>
      <Typography fontSize={36} mt={4} textAlign="center">
        Create A Task
      </Typography>

      <Box
        component="form"
        onSubmit={taskForm.handleSubmit}
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: 5,
        }}
      >
        <TextField
          label="Task Title"
          fullWidth
          required
          {...taskForm.getFieldProps("title")}
          error={taskForm.touched.title && taskForm.errors.title}
        />
        <TextField
          label="Task Description"
          fullWidth
          required
          multiline
          rows={5}
          {...taskForm.getFieldProps("description")}
          error={taskForm.touched.description && taskForm.errors.description}
        />

        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <InputLabel>Priority</InputLabel>
            <Select
              fullWidth
              {...taskForm.getFieldProps("priority")}
              value={taskForm.values.priority || "Medium"}
              displayEmpty
              error={taskForm.touched.priority && taskForm.errors.priority}
            >
              <MenuItem disabled value="">
                Select a Priority
              </MenuItem>
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </Select>
          </Box>

          <Box sx={{ flex: 1 }}>
            <InputLabel>Category</InputLabel>
            <Select
              fullWidth
              {...taskForm.getFieldProps("category")}
              value={taskForm.values.category || "Other"}
              displayEmpty
              error={taskForm.touched.category && taskForm.errors.category}
            >
              <MenuItem disabled value="">
                Select a Category
              </MenuItem>
              <MenuItem value="Cleaning">Cleaning</MenuItem>
              <MenuItem value="Recovery">Recovery</MenuItem>
              <MenuItem value="Printing">Printing</MenuItem>
              <MenuItem value="Assembly">Assembly</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </Box>
        </Box>
        <InputLabel>Due Date</InputLabel>
        <Input
          label="Due Date"
          type="date"
          fullWidth
          required
          {...taskForm.getFieldProps("dueDate")}
          error={taskForm.touched.dueDate && taskForm.errors.dueDate}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default CreateNewGuide;
