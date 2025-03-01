import { Box, InputLabel, MenuItem, Select } from "@mui/material";

function PrioritySelect({ value, onChange, error, helperText }) {
  return (
    <Box sx={{ flex: 1 }}>
      <InputLabel>Priority</InputLabel>
      <Select fullWidth value={value} onChange={onChange} displayEmpty error={error} >
         <MenuItem disabled value=""> 
          Select a Priority
        </MenuItem>
        <MenuItem value="Low">Low</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="High">High</MenuItem>
      </Select>
    </Box>
  );
}

export default PrioritySelect;
