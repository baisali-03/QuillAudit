import * as React from "react";
import "./IssueDescription.css";
import Container from "@mui/material/Container";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";

export default function IssueInnerDescription() {
  return (
    <Container maxWidth="l">
      <div className="w-auto text-sm flex items-center pl-2 bg-primary rounded font-normal leading-4 h-12 text-left text-gray-400 mb-2">
        #1. Lorem ipsum dolor sit ame
      </div>
      <div className="h-80">
        <div className="w-auto text-sm flex flex-col px-2 bg-primary rounded font-normal leading-4 h-72 text-left text-gray-400 mb-2 overflow-y-auto overflow-x-hidden items-start border border-solid border-borderColor issueTitle1">
          <div className="font-lato font-bold text-sm py-2 leading-4 text-blueColor">
            Description
          </div>
          <div>
            Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor
            incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam,
            is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur
            adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna
            aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor
            ididunt utio labore et dolore magna aliqua.
          </div>
          <div className="font-lato font-bold text-sm py-2 leading-4 text-blueColor">
            Remediation:
          </div>
          <div>
            Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor
            incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam,
            is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur
            adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna
            aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor
            ididunt utio labore et dolore magna aliqua.
          </div>
        </div>
        <div className="my-2.5 border border-solid border-darkBorder"></div>
        <div className="flex flex-row justify-end items-center">
          <button className="w-32 h-8 p-2 rounded-sm bg-blue-600 text-white flex items-center justify-center text-xs font-semibold leading-4 text-left mr-4">
            Auto Fix Code
          </button>
          <AssistantPhotoIcon
            style={{
              border: "1.2px solid #FF4D4D",
              borderRadius: "4px",
              height: "30px",
              width: "30px",
              color: "#FF4D4D",
            }}
          />
        </div>
      </div>
    </Container>
  );
}
