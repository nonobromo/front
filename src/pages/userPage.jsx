import { Avatar, Container, Typography } from "@mui/material"
import { useAuth } from "../context/auth.context"
import useUser from "../hooks/getUser"

function UserPageInfo(){
    const {user} = useAuth()
    const {userInfo} = useUser(user._id)
    return(
        <Container maxWidth="xs" sx={{display: "flex", flexDirection: "column", marginTop: 4, gap: 2}}>
            <Typography sx={{border: "1px solid black", padding: 2}} component="span">First Name: {userInfo?.name?.first}</Typography>
            <Typography sx={{border: "1px solid black", padding: 2}} component="span">Last Name: {userInfo?.name?.last}</Typography>
            <Typography sx={{border: "1px solid black", padding: 2}} component="span">Email: {userInfo?.email}</Typography>
            <Typography sx={{border: "1px solid black", padding: 2}} component="span">Phone: {userInfo?.phone}</Typography>
            <Container maxWidth="xs" sx={{display: "flex", justifyContent: "center", padding: 2}}>
            <Avatar  
              alt="User Name" 
              src={userInfo?.picture} 
              sx={{ width: 100, height: 100,objectFit: 'cover' }}
              />
            </Container>
        </Container>
    )
}

export default UserPageInfo