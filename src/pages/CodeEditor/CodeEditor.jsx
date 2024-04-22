import React from "react";
import * as monaco from "monaco-editor";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./CodeEditor.css";

const CodeEditor = ({
  code,
  language,
  onHideFileFolder,
  onHideIssueSection,
  showFileFolder,
}) => {
  React.useEffect(() => {
    const editor = monaco.editor.create(document.getElementById("editor"), {
      value: code,
      language: language,
      automaticLayout: true,
      lineNumbers: "on",
      minimap: { enabled: false },
      theme: "vs-dark",
    });

    return () => {
      editor.dispose();
    };
  }, [code, language]);

  const handleCancel = () => {
    onHideFileFolder();
  };

  const handleCancelIssue = () => {
    onHideIssueSection();
  };

  return (
    <div className={`relative ${showFileFolder ? "" : "fullWidth"}`}>
      <div className="relative bg-darkBorder">
        <div className="absolute top-0 left-0 right-0 w-full h-10 p-0 flex justify-between text-sm rounded items-center">
          <div className="text-white bg-blue-600 h-10 flex justify-center items-center w-32">
            Sample File
            <IconButton className="cancelButton" style={{ color: "white" }}>
              <ClearIcon />
            </IconButton>
          </div>
        </div>
        <div className="text-white bg-darkBlue h-10 flex rounded justify-center items-center w-full">
          Sample Project
          <IconButton className="cancelButton" style={{ color: "white" }}>
            <ClearIcon />
          </IconButton>
        </div>
        <div id="editor" className="codeEditor w-96" />
      </div>
      <div className="absolute bottom-0 left-0">
        <IconButton
          onClick={handleCancel}
          className="cancelButton"
          style={{
            color: "white",
            backgroundColor: "#007AFF",
            borderRadius: "2px",
            padding:'4px',
            height:20,
            width:20,
            marginBottom:'20px',
          }}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div className="absolute bottom-0 right-0">
        <IconButton
          onClick={handleCancelIssue}
          className="cancelButton"
          style={{
            color: "white",
            backgroundColor: "#007AFF",
            borderRadius: "2px",
            padding:'4px',
            height:20,
            width:20,
            marginBottom:'20px',
          }}>
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CodeEditor;
