import { Box, Container, TextField, Typography } from "@mui/material";
import useUser from "../hooks/getUser";
import {getGuides} from "../services/guidesService";
import { useEffect, useState } from "react";
import Categoires from "../components/categories";
import GuidePreview from "../components/common/guidePreview";
import { useAuth } from "../context/auth.context";
function MainPage() {

  const [guides, setGuides] = useState([]);
  const [search, setSearch] = useState("");

  const filteredCards = search
    ? guides.filter((guide) => guide.title.includes(search.toLowerCase()))
    : guides;
  useEffect(() => {
    const getCard = async () => {
      const result = await getGuides();
      setGuides(result.data);
    };
    getCard();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ minHeight: "100%" }}>
      <Typography fontSize="4rem" variant="h1" mt={4}>
        Welcome to Guidify!
      </Typography>
      {/* {userInfo && (
        <Typography fontSize="2rem" variant="h2" mt={4}>
          What will you need help with today{" "}
          {}?
        </Typography>
      )} */}

      <Categoires />
      <TextField
        id="filled-basic"
        label="I Need Help With:"
        variant="filled"
        sx={{ mt: "40px", width: "100%" }}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Box mt={4}>
        {(search ? filteredCards : guides).map((guide) => {
          return <GuidePreview guide={guide} key={guide._id} />;
        })}
      </Box>
    </Container>
  );
}

export default MainPage;
