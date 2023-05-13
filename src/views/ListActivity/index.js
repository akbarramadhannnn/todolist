import React, { Suspense, lazy } from "react";
import { LoadingSpinner } from "components/atoms";

const ListActivity = lazy(() => import("./ListActivity"));

const Index = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ListActivity />
    </Suspense>
  );
};

export default Index;
