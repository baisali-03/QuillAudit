import * as React from "react";
import "./ProjectCard.css";
import Container from "@mui/material/Container";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import IssueSection from "../IssueSection/IssueSection";
import FileFolder from "../FileFolder/FileFolder";
import CodeEditor from "../CodeEditor/CodeEditor";
export default function ProjectCard() {
  return (
    <React.Fragment>
      <Container maxWidth="l">
        <div className="bg-primary py-2">
          <div className="sampleProject">
            <div className="flex flex-row font-bold leading-8 pt-2 items-center">
              <FileCopyIcon style={{color:"#5554D9"}}/>
              <div className="text-white pl-2 text-2xl font-body">Sample Project</div>
            </div>
            <div>
              <button className="AuditButton">Audit Now</button>
              <button className="OptionsButton relative">
                Options
               
                <span className="notification-dot absolute top-0 right-0 bg-tomato rounded-full w-3 h-3"></span>
              </button>
            </div>
          </div>
          <div className="linelarge"></div>
          <div className="projectSection">
            <FileFolder />
            <CodeEditor />
            <IssueSection />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
