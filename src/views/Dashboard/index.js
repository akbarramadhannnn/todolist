import React, { Suspense, lazy } from "react";
import { LoadingSpinner } from "components/atoms";

const Dashboard = lazy(() => import("./Dashboard"));

const Index = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Dashboard />
    </Suspense>
  );
};

export default Index;
