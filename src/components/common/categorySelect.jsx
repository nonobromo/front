import { Box, InputLabel, MenuItem, Select } from "@mui/material";

function CategorySelect({ value, onChange, error }) {
  return (
    <Box sx={{ flex: 1 }}>
      <InputLabel>Category</InputLabel>
      <Select fullWidth value={value} onChange={onChange} displayEmpty error={error}>
        <MenuItem disabled value="">
          Select a Category
        </MenuItem>
        <MenuItem value="Cleaning">Cleaning</MenuItem>
        <MenuItem value="Recovery">Recovery</MenuItem>
        <MenuItem value="Printing">Printing</MenuItem>
        <MenuItem value="Assembly">Assembly</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>
    </Box>
  );
}

export default CategorySelect;
