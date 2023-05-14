import React, { Suspense, lazy } from "react";
import Layout from "layout";
import { Route, Routes } from "react-router-dom";
import { LoadingSpinner } from "components/atoms";

const Dashboard = lazy(() => import("views/Dashboard"));
const ListActivity = lazy(() => import("views/ListActivity"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/list-activity/:id" element={<ListActivity />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
