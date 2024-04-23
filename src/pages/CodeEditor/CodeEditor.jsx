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
  showIssueSection
}) => {
  React.useEffect(() => {
    // Define custom theme for code-editor
    monaco.editor.defineTheme("myTheme", {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#13161a",
        "editor.foreground": "#7B8191",
        "editorCursor.foreground": "#7B8191",
        "editor.lineHighlightBackground": "#13161a",
      },
    });
    monaco.editor.setTheme("myTheme");
    const editor = monaco.editor.create(document.getElementById("editor"), {
      value: code,
      language: language,
      automaticLayout: true,
      lineNumbers: "on",
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
  const editorWidth = showFileFolder && showIssueSection ? "42vw" : showFileFolder || showIssueSection ? "68vw" : "96vw";

  //-----------------Condition to rotate arrow icon for show folder---------------------
  const LeftarrowRotation = showFileFolder ? 0 : 180;

 //----------------Condition to rotate arrow icon for show Issue Section-----------------
 const RightarrowRotation = showIssueSection ? 0 : 180;

  return (
    <div className='relative'>
      <div className="relative bg-darkBorder ml-3">
        <div className="absolute top-0 left-0 right-0 w-full h-10 p-0 flex justify-between text-sm rounded items-center">
          <div className="text-white bg-blue-600 rounded-t-sm h-10 flex justify-center items-center w-32">
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
          <div className="h-10 mr-2 border border-solid border-darkBorder"></div>
          Sample Project
          <IconButton className="cancelButton" style={{ color: "white" }}>
            <ClearIcon />
          </IconButton>
          <div className="h-10 mr-1 border border-solid border-darkBorder"></div>
        </div>
        <div id="editor" className="codeEditor" style={{ width: editorWidth }} />
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
            transform: `rotate(${LeftarrowRotation}deg)`,
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
            transform: `rotate(${RightarrowRotation}deg)`, 
          }}>
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CodeEditor;
