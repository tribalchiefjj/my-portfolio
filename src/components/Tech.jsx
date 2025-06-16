import React, { Suspense, lazy } from "react";

const BallCanvas = React.lazy(() => import("./canvas/Ball.jsx"));
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <Suspense fallback={<div className="text-white text-center">Loading Tech...</div>}>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </Suspense>
  );
};

export default SectionWrapper(Tech, "");
