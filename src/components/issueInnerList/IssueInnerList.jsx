import * as React from "react";
import "./IssueInnerList.css";
import Container from "@mui/material/Container";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IssueTitle from "./issueTitle.js";
import { Checkbox } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function IssueInnerList({ onChevronClick }) {
  return (
    <Container maxWidth="l">
      <div className="accordion1" onClick={() => onChevronClick()}>
        <div className="round"></div>
        <div className="text-white tracking-wide font-body text-2xl leading-9 font-bold">
          108
        </div>
        <div className="small_line"></div>
        <div className="text-white font-body text-sm leading-4 ">
          High Severity Issues
        </div>
      </div>

      <div className="Issueheading">List of Issues</div>

      <div className="Issueline"></div>

      <div className="issue-title-scrollable">
        {IssueTitle.map((data) => (
          <div
            className="w-72 bg-primary font-body shadow rounded flex flex-row items-center justify-between p-2 my-2.5"
            key={data.id}>
            <div className="issueTitle">{data.title}</div>
            <div className="small_line"></div>
            <ChevronRightIcon style={{ color: "fff" }} />
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
