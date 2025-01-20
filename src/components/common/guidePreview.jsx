import { Container, Typography } from "@mui/material";
import useGuide from "../../hooks/getGuide";
import { Link } from "react-router-dom";


function GuidePreview({ guide }) {


  
  return (
    <Link to={`/guidePage/${guide._id}`} state={{id: guide._id}}>
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column" }}>
      <Typography fontSize={36} mt={2}>
        {guide?.title}
      </Typography>
      <Typography mt={0}>{guide?.description}</Typography>
    </Container>
    </Link>
  );
}

export default GuidePreview;
