import { Container, Typography } from "@mui/material"

function SkPage(){
    return (
        <Container maxWidth={false} sx={{maxWidth: "1400px"}}>
        <Typography fontSize={48} mt={4} variant="h1">Shop Keeper Dashboard</Typography>
        <Typography fontSize={32} mt={4} variant="h2">There are currently 20 tasks</Typography>

        
        
    </Container>
    )
}

export default SkPage