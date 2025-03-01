import { Checklist } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 0.5,
      }}
    >
      <Typography sx={{ fontSize: 24 }}>Basic</Typography>
      <Checklist sx={{ fontSize: 24 }} />
    </Box>
  );
}

export default Logo;
