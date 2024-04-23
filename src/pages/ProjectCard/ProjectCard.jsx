import React, { useState } from "react";
import Container from "@mui/material/Container";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import IssueSection from "../IssueSection/IssueSection";
import FileFolder from "../FileFolder/FileFolder";
import CodeEditor from "../CodeEditor/CodeEditor";

export default function ProjectCard() {
  const [showFileFolder, setShowFileFolder] = useState(true);
  const [showIssueSection, setShowIssueSection] = useState(true);
  const [notificationVisible, setNotificationVisible] = useState(true); // Add state for notification

  const toggleFileFolder = () => {
    setShowFileFolder(!showFileFolder);
  };

  const toggleIssueSection = () => {
    setShowIssueSection(!showIssueSection);
  };

  return (
    <React.Fragment>
      <Container maxWidth="l">
        <div className="bg-primary py-2 relative"> {/* Add relative positioning */}
          <div className="flex flex-row pl-4 justify-between">
            <div className="flex flex-row font-bold leading-8 pt-2 items-center">
              <FileCopyIcon style={{ color: "#5554D9" }} />
              <div className="text-white pl-2 text-2xl font-body">
                Sample Project
              </div>
            </div>
            <div>
              <button className="w-32 h-8 rounded-sm bg-blue-600 text-white text-sm font-semibold leading-4 text-center mr-4 py-2 px-6">Audit Now</button>
              <button className="w-32 h-8 rounded-sm text-blue-600 text-sm font-semibold mr-8 leading-4 relative py-2 px-6 bg-optionButton text-center">Options
                {notificationVisible && <div className="h-3 w-3 bg-red-500 rounded-full absolute top-0 right-0"></div>} 
              </button>
            </div>
          </div>
          <div className="m-4 border border-solid border-darkBorder w-12/12"></div>
          
          <div className="flex flex-row justify-between">
            {showFileFolder && <FileFolder />}
            <CodeEditor
              onHideFileFolder={toggleFileFolder}
              onHideIssueSection={toggleIssueSection}
              showFileFolder={showFileFolder}
              showIssueSection={showIssueSection}
            />
            {showIssueSection && <IssueSection />}
          </div> 
        </div>
      </Container>
    </React.Fragment>
  );
}
