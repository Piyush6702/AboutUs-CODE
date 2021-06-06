import "../styles/about.css";
import React, { lazy } from "react";
const AboutCode = lazy(() => import("../components/aboutCode"));

const Mission = lazy(() => import("../components/mission"));
const Vision = lazy(() => import("../components/vision"));
const Values = lazy(() => import("../components/ourValues"));
const WorkWithUs = lazy(() => import("../components/WorkWithUs"));

const Executives = lazy(() => import("../components/Executives"));
const Founder = lazy(() => import("../components/founder"));
function About() {
  return (
    <div className="about">
      <AboutCode />

      <Mission />

      <Vision />
      {/* <Values/> */}
      <Values />
      <Founder />
      <Executives />

      <WorkWithUs />
    </div>
  );
}

export default About;
