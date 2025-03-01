import { useEffect, useState } from "react";
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
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import {
  editTask,
  addRemark,
  markAsComplete,
  deleteTask,
} from "../../services/tasksService";
import useTask from "../../hooks/getTask";
import { useNavigate, useParams } from "react-router-dom";
import useAllUser from "../../hooks/getAllUsers";
import Remark from "./remark";
import { toast } from "react-toastify";
import PrioritySelect from "./prioritySelect";
import CategorySelect from "./categorySelect";
import { editTaskSchema, editTaskValues } from "../../../schemas";
import { useAuth } from "../../context/auth.context";

function TaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { taskById, refetch } = useTask(id);
  const { allUsersByName } = useAllUser();
  const [remarkText, setRemarkText] = useState("");
  const { user } = useAuth();

  async function handleRemarkSubmit() {
    try {
      await addRemark(id, remarkText);
      setRemarkText("");
      toast.success("Remark added successfully");
      refetch();
    } catch {
      toast.error("Remark cant be empty");
    }
  }

  async function markTaskAsComplete(id) {
    try {
      await markAsComplete(id);
      navigate("/tasks");
      toast.success(
        taskById.complete ? "Marked as Uncompleted" : "Marked as Completed"
      );
    } catch {
      toast.error("Failed to mark as complete");
    }
  }

  async function handleDeleteTask(id) {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this task?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await deleteTask(id);
              toast.success("Task deleted successfully");
              navigate("/tasks");
            } catch (error) {
              toast.error("Failed to delete task");
            }
          },
        },
        {
          label: "No",
          onClick: () => toast.info("Task not deleted"),
        },
      ],
      overlayClassName: "overlay-custom-class",
    });
  }

  const taskEditForm = useFormik({
    initialValues: editTaskValues,
    validate(values) {
      const schema = editTaskSchema;

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
        await editTask(id, values);
        toast.success("Changes Submitted");
      } catch (error) {
        toast.error(error);
      }
    },
  });

  useEffect(() => {
    if (taskById) {
      taskEditForm.setValues({
        title: taskById.title || "",
        description: taskById.description || "",
        priority: taskById.priority || "",
        category: taskById.category || "",
        dueDate: taskById.dueDate || "",
        assignedTo: taskById.assignedTo || { user_id: "", name: "" },
      });
    }
  }, [taskById]);

  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
      <Typography fontSize={36} mt={4} textAlign="center">
        Task overview
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <Button
          color="success"
          variant="contained"
          onClick={() => markTaskAsComplete(id)}
        >
          {taskById.complete ? "Mark as uncomplete" : "Mark as complete"}
        </Button>

        {user?.shopKeeper && (
          <Button
            color="error"
            variant="contained"
            onClick={() => handleDeleteTask(taskById._id)}
          >
            Delete Task
          </Button>
        )}
      </Box>
      <Box
        component="form"
        onSubmit={taskEditForm.handleSubmit}
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: 5,
          borderBottom: "1px solid black",
        }}
      >
        <TextField
          label="Task Title"
          fullWidth
          required
          {...taskEditForm.getFieldProps("title")}
          error={taskEditForm.touched.title && !!taskEditForm.errors.title}
        />
        <TextField
          label="Task Description"
          fullWidth
          required
          multiline
          rows={5}
          {...taskEditForm.getFieldProps("description")}
          error={
            taskEditForm.touched.description &&
            !!taskEditForm.errors.description
          }
        />

        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <PrioritySelect
            value={taskEditForm.values.priority || "Medium"}
            onChange={(e) =>
              taskEditForm.setFieldValue("priority", e.target.value)
            }
            error={
              taskEditForm.touched.priority && taskEditForm.errors.priority
            }
          />

          <CategorySelect
            value={taskEditForm.values.category || "Other"}
            onChange={(e) =>
              taskEditForm.setFieldValue("category", e.target.value)
            }
            error={
              taskEditForm.touched.category && taskEditForm.errors.category
            }
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <InputLabel sx={{ marginBottom: 1 }}>Due Date</InputLabel>
            <Input
              label="Due Date"
              type="date"
              fullWidth
              required
              {...taskEditForm.getFieldProps("dueDate")}
              error={
                taskEditForm.touched.dueDate && taskEditForm.errors.dueDate
              }
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <InputLabel sx={{ marginBottom: 1 }}>Assigned to</InputLabel>
            <Select
              fullWidth
              displayEmpty
              value={taskEditForm.values.assignedTo.user_id || ""}
              onChange={(event) => {
                const selectedUser = allUsersByName.find(
                  (user) => user.id === event.target.value
                );
                taskEditForm.setFieldValue("assignedTo", {
                  user_id: selectedUser?.id || "",
                  name: selectedUser?.fullName || "",
                });
              }}
            >
              <MenuItem value="" disabled>
                Select a User
              </MenuItem>
              {allUsersByName.map((user) => (
                <MenuItem value={user.id} key={user.id}>
                  {user.fullName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Save
        </Button>
      </Box>

      <Typography variant="h4" sx={{ marginTop: 4 }}>
        Remarks
      </Typography>

      <Container maxWidth="md">
        <TextField
          value={remarkText}
          sx={{ marginBottom: "24px", marginTop: "24px" }}
          fullWidth
          multiline
          rows={6}
          label="Add Remark"
          onChange={(e) => setRemarkText(e.target.value)}
        />
        <Button
          onClick={handleRemarkSubmit}
          sx={{ marginTop: "12px", marginBottom: "12px" }}
          variant="contained"
          color="primary"
        >
          Send
        </Button>
      </Container>

      <Container maxWidth="md" sx={{ paddingBottom: "20px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {taskById?.remarks?.length > 0 ? (
            taskById?.remarks.map((remark, index) => (
              <Remark remark={remark} key={index} />
            ))
          ) : (
            <Typography variant="body1" color="text.secondary">
              No remarks yet.
            </Typography>
          )}
        </Box>
      </Container>
    </Container>
  );
}

export default TaskPage;
