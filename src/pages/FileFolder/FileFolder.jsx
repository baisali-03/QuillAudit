import * as React from "react";
import "./FileFolder.css";
import explorer from "../../components/folderSection/data";
import FolderSection from "../../components/folderSection/FolderSection";

export default function FileFolder() {
  return (
    <React.Fragment>
      <div class="w-86 p-2 mx-6 bg-zinc-900 shadow rounded">
        <div className="text-white pl-2 pt-2 text-sm">Folders & Files</div>
        <div className="line"></div>
        <FolderSection explorer={explorer} />
      </div>
    </React.Fragment>
  );
}
