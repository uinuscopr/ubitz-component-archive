import React from "react";
import { Route, Routes } from "react-router-dom";

import ErrorBoundary from "../common/ErrorBoundary";
import WrapBg from "../common/WrapBg";
import Header from "../common/Header";

import Home from "../../pages/Home";
import Collection from "../../pages/Collection";
import Timer from "../../pages/Timer";

const Router = () => {
  return (
    <>
      <div className="body-wrapper">
        <WrapBg />
        <div className="wrap-contents">
          <ErrorBoundary>
            <React.Suspense fallback={<></>}>
              <HeaderRouter />
            </React.Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <React.Suspense fallback={<></>}>
              <BodyRouter />
            </React.Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <React.Suspense fallback={<></>}>
              <FooterRouter />
            </React.Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <React.Suspense fallback={<></>}>
              <GNBRouter />
            </React.Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
};

const HeaderRouter = () => (
  <>
    <Routes>
      <Route
        path={"/*"}
        element={
          <>
            <Header />
          </>
        }
      />
    </Routes>
  </>
);

const BodyRouter = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/timer" element={<Timer />} />
    </Routes>
  </>
);

const FooterRouter = () => (
  <>
    <Routes>
      <Route path={"/*"} element={<></>} />
    </Routes>
  </>
);

const GNBRouter = () => (
  <>
    <Routes>
      <Route path={"/*"} element={<></>} />
    </Routes>
  </>
);
export default Router;
