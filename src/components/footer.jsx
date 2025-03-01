import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        width: "100%",
        py: 1,
        textAlign: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: "#1975d0",
      }}
    >
      <Typography variant="body2">
        {" "}
        {new Date().getFullYear()} Basic© CRM App
      </Typography>
    </Box>
  );
};

export default Footer;
