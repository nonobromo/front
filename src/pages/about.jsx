import { Container, Typography } from "@mui/material";

function About() {
  return (
    <Container>
      <Typography variant="h1" fontSize={60} mt={5}>
        What is Guidify all about?
      </Typography>
      <Typography variant="subtitle1" fontSize={24} mt={5}>
        Our goal is to develop an efficient and user-friendly knowledge
        management system tailored for companies handling extensive information
        about their internal software.
      </Typography>
    </Container>
  );
}

export default About;
