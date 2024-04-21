import React, { useState } from "react";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import NoteIcon from "@mui/icons-material/Note";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";

function FolderSection({ explorer }) {
  const [expand, setExpand] = useState(false);
  const [selectedFile, setSelectedFile] = useState("Sample File");

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const handleFileClick = (fileName) => {
    setSelectedFile(fileName);
  };

  return (
    <div className="text-white leading-4 text-sm py-1 font-body font-normal">
      {explorer.isFolder ? (
        <div className="text-white leading-4 text-sm py-1 font-body font-normal">
          <button
            onClick={toggleExpand}
            style={{
              border: "none",
              background: "none",
              color: "white",
              cursor: "pointer",
              outline: "none",
              boxShadow: "none",
              appearance: "none",
            }}>
            <span>
              <span style={{ color: expand ? "#007AFFE5" : "inherit" }}>
                {expand ? "▼" : "▶"}
              </span>{" "}
              {expand ? (
                <FolderOpenOutlinedIcon style={{ color: "#007AFFE5" }} />
              ) : (
                <FolderIcon
                  style={{ color: expand ? "#007AFFE5" : "#AAAAAA" }}
                />
              )}{" "}
              <span style={{ color: expand ? "#007AFFE5" : "inherit" }}>
                {explorer.name}
              </span>
            </span>
          </button>
          <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
            {explorer.items.map((exp, index) => (
              <FolderSection key={index} explorer={exp} />
            ))}
          </div>
        </div>
      ) : (
        <div
          onClick={() => handleFileClick(explorer.name)}
          style={{
            backgroundColor:
              selectedFile === explorer.name ? "#007AFF14" : "transparent",
            cursor: "pointer",
            color: selectedFile === explorer.name ? "#007AFF" : "inherit",
          }}
          className="py-1">
          <NoteIcon
            style={{
              color: selectedFile === explorer.name ? "#007AFF" : "#AAAAAA",
              marginRight: 4,
            }}
          />
          <span
            style={{
              color: selectedFile === explorer.name ? "#007AFF" : "inherit",
            }}>
            {explorer.name}
          </span>
          <br />
        </div>
      )}
    </div>
  );
}

export default FolderSection;
