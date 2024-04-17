import * as React from "react";
import "./issueDescription.css";
import Container from "@mui/material/Container";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function IssueDescription() {
  return (
    <Container maxWidth="l">
      <div className="Issueline"></div>
      <div className="issue-title-scrollable">
        <div className="accordion1">
          <div className="issueTitle">#1. Lorem ipsum dolor sit ame</div>
          <div className="small_line"></div>
          <ChevronRightIcon />
        </div>
      </div>
    </Container>
  );
}
