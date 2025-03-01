import { Box, Container, Typography, IconButton } from "@mui/material";
import { getAllSystemUsers } from "../services/usersService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { patchSlStatus, deleteUser } from "../services/usersService";
import DeleteIcon from "@mui/icons-material/Delete";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function UsersManage() {
  const [users, setAllUsers] = useState([]);
  async function handleDelete(id) {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this user?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await deleteUser(id);
              toast.success("User deleted successfully");

              setAllUsers((prevUsers) =>
                prevUsers.filter((user) => user._id !== id)
              );
            } catch (error) {
              toast.error("Failed to delete user");
            }
          },
        },
        {
          label: "No",
          onClick: () => toast.info("User not deleted"),
        },
      ],
      overlayClassName: "overlay-custom-class",
    });
  }

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const { data } = await getAllSystemUsers();
        setAllUsers(data);
      } catch (err) {
        toast.error("Failed to fetch all users");
      }
    };
    fetchAllUsers();
  }, []);

  async function reFetchUsers(id) {
    try {
      await patchSlStatus(id);
      const { data } = await getAllSystemUsers();
      setAllUsers(data);
      toast.success("Shift Leader Status Changed");
    } catch (err) {
      toast.error("Failed to update SL status");
    }
  }

  return (
    <Container maxWidth={false} sx={{ maxWidth: "1400px", marginTop: 4 }}>
      <Typography
        variant="h2"
        gutterBottom
        sx={{ fontSize: { xs: 36, lg: 48 } }}
      >
        Manage Users
      </Typography>
      <div className="users-grid">
        {users.map((user) => (
          <Box
            key={user._id}
            sx={{
              display: "flex",
              border: "1px solid #ddd",
              borderRadius: 2,
              padding: 2,
              boxShadow: 1,
              alignItems: "center",
              gap: 2,
              minHeight: 80,
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography variant="h6">
                {`${user?.name?.first} ${user?.name?.last}`}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                SL Status: {user.shiftLeader ? "true" : "false"}
              </Typography>
            </div>
            <div>
              <IconButton
                color="error"
                aria-label="delete user"
                onClick={() => handleDelete(user._id)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="change role"
                onClick={() => reFetchUsers(user._id)}
              >
                <SwapHorizIcon />
              </IconButton>
            </div>
          </Box>
        ))}
      </div>
    </Container>
  );
}

export default UsersManage;
