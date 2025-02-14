import { Box, Container } from "@mui/material";

function TableHeaders() {
  return (
    <Container maxWidth="false" sx={{maxWidth: "1400px"}}>
        <div className="table-contents">
          <span className="table-title">Title</span>
          <span className="hide-on-small">Created By</span>
          <span className="hide-on-small table-data-assignedToo">Assigned To</span>
          <span className="hide-on-small">Date Created</span>
          <span className="table-date-due">Due Date</span>
          <span className="hide-on-small">Category</span>
          <span className="hide-on-small">Priority</span>
        </div>
    </Container>
  );
}

export default TableHeaders;
