import * as React from "react";
import "./IssueInnerList.css";
import Container from "@mui/material/Container";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IssueTitle from "./issueTitle.js";
import { Checkbox } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function IssueInnerList({ onIssueTitleClick }) {
  return (
    <Container maxWidth="l">
      <div className="accordion1">
        <div className="round"></div>
        <div className="text-white tracking-wide font-body text-2xl leading-9 font-bold mx-3">
          108
        </div>
        <div className="small_line"></div>
        <div className="text-white font-body text-sm leading-4 ml-4">
          High Severity Issues
        </div>
      </div>
      <div className="Issueheading">List of Issues</div>
      <div className="Issueline"></div>
      <div className="issue-title-scrollable">
        {IssueTitle.map((data) => (
          <div
            className="w-86 bg-primary font-body shadow rounded flex flex-row items-center justify-between my-2.5"
            key={data.id}>
            <div className="issueTitle">{data.title}</div>
            <div className="small_line"></div>
            <ChevronRightIcon
              onClick={onIssueTitleClick}
              style={{ color: "fff" }}
            />
          </div>
        ))}
      </div>
      <div className="Issue-line"></div>
      <div className="text-white text-sm leading-4 flex flex-row items-center">
        <Checkbox {...label} style={{ color: "white" }} />
        <div>Exclude Dependencies</div>
      </div>
    </Container>
  );
}
