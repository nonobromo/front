import { Container, Typography } from "@mui/material";

function GuidePreview({ guide }) {
  return (
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column" }}>
      <Typography fontSize={36} mt={2}>
        {guide?.title}
      </Typography>
      <Typography mt={0}>{guide?.description}</Typography>
    </Container>
  );
}

export default GuidePreview;
