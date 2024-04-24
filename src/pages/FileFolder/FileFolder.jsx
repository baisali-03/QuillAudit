import * as React from "react";
import explorer from "../../components/folderSection/data";
import FolderSection from "../../components/folderSection/FolderSection";

export default function FileFolder() {
  return (
    <React.Fragment>
      <div class="w-[25vw] h-[73vh] p-2 ml-6 bg-darkblue shadow rounded">
        <div className="text-white pl-2 pt-2 text-sm">Folders & Files</div>
        <div className="w-auto my-4 mx-2 border border-solid border-darkBorder"></div>
        <FolderSection explorer={explorer} />
      </div>
    </React.Fragment>
  );
}
