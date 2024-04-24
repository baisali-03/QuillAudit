import * as React from "react";
import "./IssueInnerList.css";
import Container from "@mui/material/Container";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IssueTitle from "./issueTitle.js";

export default function IssueInnerList({ onIssueTitleClick }) {
  return (
    <Container maxWidth="l">
      <div className="bg-primary border-solid border-borderColor border rounded-md flex mt-4 flex-row justify-start items-center">
        <div className=" w-2.5 h-2.5 ml-5 rounded-full bg-tomato"></div>
        <div className="text-white tracking-wide font-body text-2xl leading-9 font-bold mx-3">
          108
        </div>
        <div className="h-10 border border-solid border-darkBorder"></div>
        <div className="text-white font-body text-sm leading-4 ml-4">
          High Severity Issues
        </div>
      </div>
      <div className="pt-4 text-sm font-medium leading-4 text-left text-subTitle">
        List of Issues
      </div>
      <div className="border border-solid border-darkBorder mt-1"></div>
      <div className="issue-title-scrollable overflow-y-auto overflow-x-hidden max-h-64 ">
        {IssueTitle.map((data) => (
          <div
            className="w-auto pl-1 bg-primary font-body shadow rounded flex flex-row items-center justify-between my-2.5"
            key={data.id}>
            <div className="text-sm font-normal leading-4 w-4/5 text-left text-subTitle pl-2">
              {data.title}
            </div>
            <div className="h-10 border border-solid border-darkBorder"></div>
            <ChevronRightIcon
              onClick={onIssueTitleClick}
              style={{ color: "fff", marginRight: "15px", cursor: "pointer" }}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
