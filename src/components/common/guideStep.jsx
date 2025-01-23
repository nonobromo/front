import { Box, Input, InputLabel,  } from "@mui/material";

function GuideStep() {
  return (
    <Box sx={{ marginTop: 4 }}>
      <InputLabel>Step</InputLabel>
      <Input type="text" sx={{ border: "1px solid black", width: "100%" }} required/>
      <Input type="file" />
    </Box>
  );
}

export default GuideStep;
