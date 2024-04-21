import * as React from "react";
import { NavLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Typography } from "@mui/material";
import IssueList from "../../components/issueList/IsuueList";
import IssueInnerList from "../../components/issueInnerList/IssueInnerList";
import IssueInnerDescription from "../../components/issueInnerDescription/IssueInnerDescription";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CustomSeparator = () => (
  <Typography variant="body1" style={{ color: "#7B8191" }}>
    /
  </Typography>
);
export default function IssueSection() {
  const [breadcrumbLabels, setBreadcrumbLabels] = React.useState([
    "Count of Issues",
  ]);
  const [showInnerList, setShowInnerList] = React.useState(false);
  const [showDescription, setShowDescription] = React.useState(false);

  const handleChevronClick = () => {
    setShowInnerList(!showInnerList);
    setShowDescription(false);
    setBreadcrumbLabels(["Count of Issues",  "High Severity Issues"]);
  };

  const handleIssueTitleClick = () => {
    setShowDescription(true);
    setShowInnerList(false);
    setBreadcrumbLabels(["Count of Issues", "High Severity Issues","Issue #1"]);
  };

  return (
    <Container maxWidth="l">
      <div className="w-96 p-2 mr-6 bg-darkblue shadow rounded">
        <Breadcrumbs
          aria-label="breadcrumb"
          className="font-medium leading-4 text-left pl-6 pt-1 text-subTitle "
          separator={<CustomSeparator />}>
          {breadcrumbLabels.map((label, index) => (
            <NavLink
              key={index}
              className="font-lato text-text no-underline text-sm font-medium leading-4 text-left"
              onClick={() => {
                setBreadcrumbLabels(breadcrumbLabels.slice(0, index + 1));
                setShowInnerList(index === 1);
                setShowDescription(index === 2);
              }}
              style={{ cursor: "pointer", color: "white" }}>
              {label}
            </NavLink>
          ))}
        </Breadcrumbs>
        <div className="w-auto my-4 mx-4 border border-solid border-darkBorder"></div>
        {showInnerList ? (
          <IssueInnerList
            onChevronClick={handleChevronClick}
            onIssueTitleClick={handleIssueTitleClick}
          />
        ) : showDescription ? (
          <IssueInnerDescription />
        ) : (
          <IssueList onChevronClick={handleChevronClick} />
        )}
       
        {!showDescription && (
          <>
           <div className="w-auto my-4 mx-6 border border-solid border-darkBorder"></div>
          <div className="text-white text-sm leading-4 ml-3 flex flex-row items-center">
            <Checkbox {...label} style={{ color: "white" }} />
            <div>Exclude Dependencies</div>
          </div>
          </>
        )}
      </div>
    </Container>
  );
}
