import "../src/styles.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard/Dashboard";

const LazyInnerIssue = React.lazy(() =>
  import("./components/issueInnerList/IssueInnerList")
);
const LazyInnerIssueDescription = React.lazy(() =>
  import("./components/issueDescription/IssueDescription")
);


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<DashBoard />} />
        <Route
          path="/issue"
          element={
            <React.Suspense fallback="Loading...">
              <LazyInnerIssue />
            </React.Suspense>
          }
        />
         <Route
          path="/issueDescription"
          element={
            <React.Suspense fallback="Loading...">
              <LazyInnerIssueDescription />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
 
  );
};

export default App;
