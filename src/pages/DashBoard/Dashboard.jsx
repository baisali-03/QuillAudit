import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Navbar from "../../components/navbar/Navbar";
import ProjectCard from "../ProjectCard/ProjectCard";

function handleClick(event) {
  event.preventDefault();
}

const CustomSeparator = () => (
  <Typography variant="body1" style={{ color: "#7B8191" }}>
    /
  </Typography>
);

export default function DashBoard() {
  const [isTabView, setIsTabView] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsTabView(window.innerWidth < 1353);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call on initial render
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
     
      {isTabView ? (
        <div className="text-subTitle flex self-center justify-self-center">This Website is not supported on tab view</div>
      ) : (
        <>
        <Navbar />
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs
            aria-label="breadcrumb"
            className="py-2 pl-6"
            separator={<CustomSeparator />}
          >
            <div className="font-lato text-text no-underline text-sm font-medium leading-4 text-left">
              AI Audit
            </div>
            <div className="font-lato text-text text-sm font-medium leading-4 text-left">
              My Projects
            </div>
            <div className="font-lato text-white text-sm font-medium leading-4 text-left">
              Code Editor
            </div>
          </Breadcrumbs>
          <ProjectCard />
        </div>
        </>
      )}
    </>
  );
}
