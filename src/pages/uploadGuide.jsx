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
import GuideStep from "../components/common/guideStep";

function CreateNewGuide() {
  const [fileInputs, setFileInputs] = useState([]);

  const addFileInput = () => {
    setFileInputs([...fileInputs, `file-${fileInputs.length}`]);
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: "100vh" }}>
      <Typography fontSize={36} mt={4} textAlign={"center"}>
        Create A Guide
      </Typography>

      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: 5,
        }}
      >
        <TextField label="Guide Title" />
        <TextField label="Guide Description" />

        <InputLabel>Select Categories</InputLabel>
        <Select defaultValue="" required>
          <MenuItem value="" disabled>
            Choose A Category
          </MenuItem>
          <MenuItem value="internet">Internet</MenuItem>
          <MenuItem value="printers">Printers</MenuItem>
          <MenuItem value="word">Word</MenuItem>
          <MenuItem value="excel">Excel</MenuItem>
          <MenuItem value="outlook">Outlook</MenuItem>
          <MenuItem value="misc">Misc</MenuItem>
        </Select>

        <Box>
          <GuideStep />
          <GuideStep />
        </Box>

        {fileInputs.map((input, index) => (
          <Input key={input} type="file" />
        ))}

        <Button variant="contained" onClick={addFileInput}>
          Add Another File
        </Button>
      </Box>
    </Container>
  );
}

export default CreateNewGuide;
