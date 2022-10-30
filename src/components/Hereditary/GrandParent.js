import React, { lazy, Suspense } from "react";
const Parent = lazy(() => import("./Parent"));

export const GrandParent = () => {
  return (
    <>
      GrandParent
      <Suspense fallback={<div>Parent...</div>}>
        <Parent />
      </Suspense>
    </>
  );
};
