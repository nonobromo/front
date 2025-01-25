import { Container, Typography } from "@mui/material";

function About() {
  return (
    <Container>
      <Typography variant="h1" fontSize={60} mt={5}>
        What is Basic all about?
      </Typography>
      <Typography variant="subtitle1" fontSize={24} mt={5}>
        In Ikea as sales reprensetive there are daily tasks we do everyday in
        order to keep our departments clean and orginize. With Basic your shift
        leaders and shop keepers will be able to asign you tasks.
      </Typography>
    </Container>
  );
}

export default About;
