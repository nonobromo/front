import { Box, Container, Input, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

function CreateNewGuide(){
    return(
     <Container maxWidth="sm" sx={{border: "1px solid black", minHeight: "100vh"}}>
        <Typography fontSize={36} mt={4} textAlign={"center"}>
            Create A Guide
        </Typography>

        <Box sx={{marginTop: 4, border: "1px solid black", display: "flex", flexDirection: "column", gap: 4, padding: 5}}>
        <TextField label="Guide Title"/>
        <TextField label="Guide Description"/>

        <InputLabel>Select Cateogires</InputLabel>
        <Select defaultValue="" required>
        <MenuItem value="" disabled>Choose A Category</MenuItem>
        <MenuItem value="option1">Internet</MenuItem>
        <MenuItem value="option2">Printers</MenuItem>
        <MenuItem value="option3">Word</MenuItem>
        <MenuItem value="option3">Excel</MenuItem>
        <MenuItem value="option3">Outlook</MenuItem>
        <MenuItem value="option3">Misc</MenuItem>
        </Select>

        <Input type="file"/>
        </Box>
     </Container>  
    )
}

export default CreateNewGuide