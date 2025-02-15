import { Card, Typography } from "@mui/material";

function Remark({ remark: { createdAt, writtenBy, text } }) {
  return (
    <Card sx={{ padding: 2, borderLeft: "4px solid #1976d2" }}>
      <Typography variant="body2" color="text.secondary">
        {createdAt}
      </Typography>
      <Typography variant="subtitle1" fontWeight="bold">
        {writtenBy}
      </Typography>
      <Typography variant="body1">{text}</Typography>
    </Card>
  );
}

export default Remark;
