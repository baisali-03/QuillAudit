import React from "react";
import * as monaco from "monaco-editor";
import IconButton from "@mui/material/IconButton";
import ClearIcon from '@mui/icons-material/Clear';
import "./CodeEditor.css";

const CodeEditor = ({ code, language, onCancel }) => {
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
    // Perform cancel action here
    if (typeof onCancel === "function") {
      onCancel();
    }
  };

  return (
    <div className="codeEditorContainer ">
      <div className="fileName">
        <div className="fileName1">
          Sample File 
          <IconButton onClick={handleCancel} className="cancelButton" style={{ color: 'white' }}>
            <ClearIcon />
          </IconButton>
        </div>
      </div>
      <div id="editor" className="codeEditor" />
    </div>
  );
};

export default CodeEditor;
