import React, { Suspense, lazy } from "react";
import Layout from "layout";
import { Route, Routes } from "react-router-dom";
import { LoadingSpinner } from "components/atoms";

const Dashboard = lazy(() => import("views/Dashboard"));
const ListActivity = lazy(() => import("views/ListActivity"));

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/list-activity/:id"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ListActivity />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
