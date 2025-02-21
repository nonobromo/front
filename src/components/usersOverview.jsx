import { useEffect, useState } from "react";
import useAllTasks from "../hooks/getTasks";
import useAllUser from "../hooks/getAllUsers";
import { Container, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import CategoryIcon from "./common/categoryIcon";

function Useroverview(){
    const [taskReport, setTaskReport] = useState({});
    const { allTasks } = useAllTasks();
    const { allUsersByName } = useAllUser();
    
      useEffect(() => {
        const generateReport = () => {
          return allUsersByName.reduce((acc, user) => {
            const userTasks = allTasks.filter(
              (task) => task.assignedTo?.user_id === user.id
            );
            acc[user.fullName] = {
              total: userTasks.length,
              printing: userTasks.filter((task) => task.category === "Printing")
                .length,
              assembly: userTasks.filter((task) => task.category === "Assembly")
                .length,
              recovery: userTasks.filter((task) => task.category === "Recovery")
                .length,
              cleaning: userTasks.filter((task) => task.category === "Cleaning")
                .length,
            };
            return acc;
          }, {});
        };
    
        setTaskReport(generateReport());
      }, [allUsersByName, allTasks]);
    

    return (
        <Container
        maxWidth={false}
        sx={{
          backgroundColor: orange[100],
          maxWidth: "1400px",
          borderRadius: 2,
          marginTop: 2,
        }}
      > 
        <Typography variant="h2">Tasks per user</Typography>
        <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
          <div className="report-table-headers">
            <span className="sk-user-table">User</span>
            <span className="sk-total-table">Total Tasks</span>
            <span className="hide-on-small">
              <CategoryIcon category="Printing" />
            </span>
            <span className="hide-on-small">
              <CategoryIcon category="Assembly" />
            </span>
            <span className="hide-on-small">
              <CategoryIcon category="Cleaning" />
            </span>
            <span className="hide-on-small">
              <CategoryIcon category="Recovery" />
            </span>
          </div>

          {Object.entries(taskReport).map(([userName, report]) => (
            <div key={userName} className="report-table-headers user-report-m">
              <span className="sk-user-table">{userName}</span>
              <span className="sk-total-table">{report.total}</span>
              <span className="hide-on-small">{report.printing}</span>
              <span className="hide-on-small">{report.assembly}</span>
              <span className="hide-on-small">{report.cleaning}</span>
              <span className="hide-on-small">{report.recovery}</span>
            </div>
          ))}
        </Container>
      </Container>
    )
}

export default Useroverview