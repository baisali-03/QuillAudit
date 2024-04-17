import * as React from "react";
import "./IssueList.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import issueList from "../../pages/IssueSection/issue-data";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function IssueList({ onChevronClick }) {
  return (
    <Container maxWidth="l">
      <div className="w-86 h-12 bg-primary font-body shadow rounded flex flex-row items-center justify-evenly">
        <Button variant="contained">Current file</Button>
        <Button>Full Project</Button>
      </div>
      {issueList.map((data, index) => (
        <div
          className="w-86 bg-primary font-body shadow rounded flex flex-row items-center justify-between p-2 my-2.5"
          key={data.number}
        >
          <div className="flex flex-row items-center" style={{ width: "35%" }}>
            <div className="round1" style={{ background: getRandomColor() }}></div>
            <div className="text-white tracking-wider font-body text-2xl leading-9 font-bold pl-4">
              {data.number}
            </div>
          </div>
          <div className="small_line1"></div>
          <div
            className="text-white font-body text-sm leading-4 pl-3 "
            style={{ width: "60%" }}
          >
            {data.title}
          </div>
          <div
            onClick={() => onChevronClick()}
            style={{ color: "white", cursor: "pointer" }}
          >
            <ChevronRightIcon />
          </div>
        </div>
      ))}
      <div className="Issue-line"></div>
      <div className="text-white text-sm leading-4 flex flex-row items-center pb-1">
        <Checkbox {...label} style={{ color: "white" }} />
        <div>Exclude Dependencies</div>
      </div>
    </Container>
  );
}


function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
