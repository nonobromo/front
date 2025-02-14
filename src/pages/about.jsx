import { Container, Typography } from "@mui/material";

function About() {
  return (
    <Container>
      <Typography variant="h1" fontSize={60} mt={5}>
        What is Basic all about?
      </Typography>
      <Typography variant="subtitle1" fontSize={24} mt={5}>
      Basic is your go-to CRM for managing daily tasks at IKEA. Whether you're assembling furniture, printing PTAGS, handling recovery, or maintaining the store, Basic keeps everything in one place for you
      </Typography>
    </Container>
  );
}

export default About;
