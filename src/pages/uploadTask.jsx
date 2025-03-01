import {
  Box,
  Button,
  Container,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { uploadTask } from "../services/tasksService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTaskScehma, createTaskValues } from "../../schemas";
import CategorySelect from "../components/common/categorySelect";
import PrioritySelect from "../components/common/prioritySelect";


function CreateNewTask() {
  const navigate = useNavigate()
  const taskForm = useFormik({
    initialValues: createTaskValues,
    validate(values) {
      const schema = createTaskScehma

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
        navigate("/tasks")
        toast.success("Task Created")
      } catch (error) {
        toast.error("Error Uploading Task")
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
          helperText={taskForm.touched.title && taskForm.errors.title}
        />
        <TextField
          label="Task Description"
          fullWidth
          required
          multiline
          rows={5}
          {...taskForm.getFieldProps("description")}
          error={taskForm.touched.description && taskForm.errors.description}
          helperText={taskForm.touched.description && taskForm.errors.description}
        />

        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >

<PrioritySelect
  value={taskForm.values.priority || "Medium"}
  onChange={(e) => taskForm.setFieldValue("priority", e.target.value)}
  error={taskForm.touched.priority && taskForm.errors.priority}
  
/>

<CategorySelect
  value={taskForm.values.category || "Other"}
  onChange={(e) => taskForm.setFieldValue("category", e.target.value)}
  error={taskForm.touched.category && taskForm.errors.category}
/>
          
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
        {(taskForm.touched.dueDate && taskForm.errors.dueDate) && <Typography sx={{color: "red"}}>Please enter a date</Typography>}

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default CreateNewTask;
