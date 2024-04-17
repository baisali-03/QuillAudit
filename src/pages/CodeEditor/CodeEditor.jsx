import React from "react";
import * as monaco from "monaco-editor";
import "./CodeEditor.css";

const CodeEditor = ({ code, language }) => {
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

  return (
    <div className="codeEditorContainer">
      <div className="fileName">
        <div className="fileName1">Sample File  <span style={{paddingLeft:20}}> X</span></div>

      </div>
      <div id="editor" className="codeEditor" />
    </div>
  );
};

export default CodeEditor;
