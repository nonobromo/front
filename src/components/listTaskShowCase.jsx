import { Box, Container } from "@mui/material"
import TableHeaders from "./common/tableHeaders"
import { useAuth } from "../context/auth.context";
import TaskItem from "./common/taskItem";

function ListTaskShowCase({displayedTasks}){

     const { user } = useAuth();
    return(
        <Container maxWidth={false} sx={{maxWidth: "1400px"}}>

        <TableHeaders />


      {user && displayedTasks.length > 0
        ? displayedTasks.map((task) => (
            <TaskItem taskData={task} key={task._id} />
          ))
        : "No Tasks to show"}
    </Container>
    )
}

export default ListTaskShowCase