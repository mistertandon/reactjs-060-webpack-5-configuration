import React, { lazy } from "react";
const ChildA = lazy(() => import("./ChildA"));

const Parent = () => {
  return (
    <>
      Parent
      <Suspense fallback={<div>Child A ...</div>}>
        <ChildA />
      </Suspense>
    </>
  );
};
export default Parent;
