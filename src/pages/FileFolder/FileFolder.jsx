import * as React from "react";
import explorer from "../../components/folderSection/data";
import FolderSection from "../../components/folderSection/FolderSection";

export default function FileFolder() {
  return (
    <React.Fragment>
      <div class="w-96 p-2 mx-6 bg-darkblue shadow rounded">
        <div className="text-white pl-2 pt-2 text-sm">Folders & Files</div>
        <div className="w-80 my-4 mx-6 border border-solid border-darkBorder"></div>
        <FolderSection explorer={explorer} />
      </div>
    </React.Fragment>
  );
}
