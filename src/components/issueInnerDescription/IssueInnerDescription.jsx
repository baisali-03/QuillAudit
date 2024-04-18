import * as React from "react";
import "./IssueDescription.css";
import Container from "@mui/material/Container";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";

export default function IssueInnerDescription() {
  return (
    <Container maxWidth="l">
      <div className="issueDescriptionTitle">#1. Lorem ipsum dolor sit ame</div>
      <div className="issueDescriptionCard">
        <div className="issueTitle1">
          <div className="font-lato font-bold text-xs py-2 leading-4 text-blueColor">
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
          <div className="font-lato font-bold text-xs py-2 leading-4 text-blueColor">
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
        <div className="IssueDescriptionLine"></div>
        <div className="flex flex-row justify-end items-center">
          <button className="AuditFixButton">Auto Fix Code</button>
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
