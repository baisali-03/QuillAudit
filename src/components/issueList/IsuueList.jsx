import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import issueList from "../../pages/IssueSection/issue-data";

export default function IssueList({ onChevronClick }) {
  return (
    <Container maxWidth="l">
      <div className="w-80 h-12 bg-primary font-body shadow rounded flex flex-row items-center justify-between pl-2 pr-10">
        <Button variant="contained">Current file</Button>
        <Button>Full Project</Button>
      </div>
      {issueList.map((data, index) => (
        <div
          className="w-80 bg-primary font-body shadow rounded flex flex-row items-center justify-between p-2 my-2.5"
          key={data.number}>
          <div className="flex flex-row items-center" style={{ width: "35%" }}>
            <div
              className="w-2.5 h-2.5 rounded-full ml-2.5"
              style={{ background: getRandomColor() }}></div>
            <div className="text-white tracking-wider font-body text-2xl leading-9 font-bold pl-4">
              {data.number}
            </div>
          </div>
          <div className="h-8 border border-solid border-darkBorder"></div>
          <div
            className="text-white font-body text-sm leading-4 pl-3 "
            style={{ width: "60%" }}>
            {data.title}
          </div>
          <div
            onClick={() => onChevronClick()}
            style={{ color: "white", cursor: "pointer" }}>
            <ChevronRightIcon />
          </div>
        </div>
      ))}
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
