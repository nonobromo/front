import {useLocation} from "react-router-dom"
import useGuide from "../../hooks/getGuide";
import { Container, Typography } from "@mui/material";

function GuidePage(){
    const location = useLocation();
    const {id} = location.state

    const {guideData} = useGuide(id)

    return(
        <Container>
            <Typography variant="h2">{guideData?.title}</Typography>
            <Typography variant="body2">{guideData?.description}</Typography>
 
        </Container>
    )
}

export default GuidePage