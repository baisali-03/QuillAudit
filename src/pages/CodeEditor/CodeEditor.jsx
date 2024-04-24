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
  showIssueSection,
}) => {
  React.useEffect(() => {
    // Define custom theme for code-editor
    monaco.editor.defineTheme("myTheme", {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#13161a",
        "editor.foreground": "#CCCCCC",
        "editorCursor.foreground": "#7B8191",
        "editorLineNumber.foreground": "#CCCCCC",
        "editorLineNumber.activeForeground": "#CCCCCC",
        "editor.lineHighlightBackground": "#13161a",
      },
    });
    monaco.editor.setTheme("myTheme");
    const editor = monaco.editor.create(document.getElementById("editor"), {
      value: code,
      language: language,
      automaticLayout: true,
      lineNumbers: "on",
      padding: { top: 20 },
      minimap: { enabled: false },
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

  //-------------Condition to increase the width of code editor-------------------
  const editorWidth =
    showFileFolder && showIssueSection
      ? "42vw"
      : showFileFolder || showIssueSection
      ? "69vw"
      : "96vw";

  //-----------------Condition to rotate arrow icon for show folder---------------------
  const LeftarrowRotation = showFileFolder ? 0 : 180;

  //----------------Condition to rotate arrow icon for show Issue Section-----------------
  const RightarrowRotation = showIssueSection ? 0 : 180;

  return (
    <div className="relative">
      <div className="relative bg-darkBorder ml-3">
        <div className="absolute top-0 left-0 right-0 w-full h-10 p-0 flex justify-start text-sm rounded items-center">
          <div className="text-white pl-2 bg-blue-600 rounded-t-sm h-10 flex justify-center items-center w-36">
            SampleFile-1
            <IconButton className="cancelButton" style={{ color: "white" }}>
              <ClearIcon aria-label="Clear Icon" />
            </IconButton>
          </div>
          <div className="text-white rounded-t-sm h-10 pl-2 flex justify-center items-center w-36">
            SampleFile-2
            <IconButton className="cancelButton" style={{ color: "white" }}>
              <ClearIcon aria-label="Clear Icon" />
            </IconButton>
          </div>

          <div className="h-10 mr-1 border border-solid border-darkBorder"></div>
          <div className="text-white rounded-t-sm h-10 pl-2 flex justify-center items-center w-36">
            SampleFile-3
            <IconButton className="cancelButton" style={{ color: "white" }}>
              <ClearIcon aria-label="Clear Icon" />
            </IconButton>
          </div>
          <div className="h-10 mr-1 border border-solid border-darkBorder"></div>
          <div className="text-white  rounded-t-sm h-10 pl-2 flex justify-center items-center w-36">
            SampleFile-4
            <IconButton className="cancelButton" style={{ color: "white" }}>
              <ClearIcon aria-label="Clear Icon" />
            </IconButton>
          </div>

          <div className="h-10 mr-1 border border-solid border-darkBorder"></div>
        </div>
        <div className="text-white bg-darkBlue h-10 flex rounded justify-center items-center w-full"></div>
        <div
          id="editor"
          className="codeEditor"
          style={{ width: editorWidth }}
        />
      </div>
      <div className="absolute bottom-0 left-0">
        <IconButton
          onClick={handleCancel}
          className="cancelButton"
          style={{
            color: "white",
            backgroundColor: "#007AFF",
            borderRadius: "2px",
            padding: "4px",
            height: 20,
            width: 20,
            marginBottom: "20px",
            transform: `rotate(${LeftarrowRotation}deg)`,
          }}
          aria-label="Cancel File Folder">
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
            padding: "4px",
            height: 20,
            width: 20,
            marginBottom: "20px",
            transform: `rotate(${RightarrowRotation}deg)`,
          }}
          aria-label="Cancel Issue Section">
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CodeEditor;
