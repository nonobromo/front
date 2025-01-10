import { Container, Button } from "@mui/material";

function Categoires() {
  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", justifyContent: "space-between", mt: "30px" }}
    >
      <Button variant="contained">Internet</Button>
      <Button variant="contained">Printers</Button>
      <Button variant="contained">Word</Button>
      <Button variant="contained">Excel</Button>
      <Button variant="contained">Outlook</Button>
      <Button variant="contained">Misc</Button>
    </Container>
  );
}

export default Categoires;
