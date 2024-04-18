import * as React from "react";
import { NavLink } from "react-router-dom";
import "./IssueSection.css";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import IssueList from "../../components/issueList/IsuueList";
import IssueInnerList from "../../components/issueInnerList/IssueInnerList";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CustomSeparator = () => (
  <Typography variant="body1" style={{ color: "#7B8191" }}>
    /
  </Typography>
);

export default function IssueSection() {
  const [showInnerList, setShowInnerList] = React.useState(false);
  const handleChevronClick = () => {
    setShowInnerList(true);
  };

  return (
    <>
      <Container maxWidth="l">
        <div className="w-86 p-2 mr-6 bg-zinc-900 shadow rounded">
          <Breadcrumbs
            aria-label="breadcrumb"
            className="issue-heading"
            separator={<CustomSeparator />}>
            <NavLink
            className="font-lato text-text no-underline text-sm font-medium leading-4 text-left"
              onClick={() => setShowInnerList(false)}
              style={{ cursor: "pointer", color: "white" }}
              >
              Count of Issues
            </NavLink>
            {showInnerList ? (
              <div className="font-lato text-white no-underline text-sm font-medium leading-3 text-left">Issue Inner List</div>
            ) : (
              <></>
            )}
          </Breadcrumbs>
          <div className="line1"></div>
          {showInnerList ? (
            <IssueInnerList />
          ) : (
            <IssueList onChevronClick={handleChevronClick} />
          )}
        </div>
      </Container>
    </>
  );
}
