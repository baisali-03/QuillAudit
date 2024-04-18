import * as React from "react";
import { NavLink } from "react-router-dom";
import "./IssueSection.css";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Typography } from "@mui/material";
import IssueList from "../../components/issueList/IsuueList";
import IssueInnerList from "../../components/issueInnerList/IssueInnerList";
import IssueDescription from "../../components/issueDescription/IssueDescription";

const CustomSeparator = () => (
  <Typography variant="body1" style={{ color: "#7B8191" }}>
    /
  </Typography>
);

export default function IssueSection() {
  const [breadcrumbLabels, setBreadcrumbLabels] = React.useState(["Count of Issues"]);
  const [showInnerList, setShowInnerList] = React.useState(false);
  const [showDescription, setShowDescription] = React.useState(false);

  const handleChevronClick = () => {
    setShowInnerList(!showInnerList);
    setShowDescription(false);
    setBreadcrumbLabels(["Count of Issues"]);
  };

  const handleIssueTitleClick = () => {
    setShowDescription(true);
    setShowInnerList(false);
    setBreadcrumbLabels(["Count of Issues", "High Severity Issues"]);
  };

  const handleDescriptionClick = () => {
    setShowDescription(true);
    setShowInnerList(false);
    setBreadcrumbLabels(["Count of Issues", "High Severity Issues", "Issue Description"]);
  };

  return (
    <Container maxWidth="l">
      <div className="w-86 p-2 mr-6 bg-zinc-900 shadow rounded">
        <Breadcrumbs
          aria-label="breadcrumb"
          className="issue-heading"
          separator={<CustomSeparator />}
        >
          {breadcrumbLabels.map((label, index) => (
            <NavLink
              key={index}
              className="font-lato text-text no-underline text-sm font-medium leading-4 text-left"
              onClick={() => {
                setBreadcrumbLabels(breadcrumbLabels.slice(0, index + 1));
                setShowInnerList(index === 1); 
                setShowDescription(index === 2); 
              }}
              style={{ cursor: "pointer", color: "white" }}
            >
              {label}
            </NavLink>
          ))}
        </Breadcrumbs>
        <div className="line1"></div>
        {showInnerList ? (
          <IssueInnerList onChevronClick={handleChevronClick} onIssueTitleClick={handleIssueTitleClick} />
        ) : showDescription ? (
          <IssueDescription />
        ) : (
          <IssueList onChevronClick={handleChevronClick} />
        )}
      </div>
    </Container>
  );
}
