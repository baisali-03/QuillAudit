import "../src/styles.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard/Dashboard";

const LazyInnerIssue = React.lazy(() =>
  import("./components/issueInnerList/IssueInnerList")
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
