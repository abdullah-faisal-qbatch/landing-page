import React from "react";
import "./../styles/RequestDemo.css";

const RequestDemo = () => {
  return (
    <div className="flex flex-col items-center space-y-5 bg-slate-300 main-section">
      <p className="text-4xl font-bold text-center data-section">
        Say goodbye to long queues, big updates, and{" "}
        <span className="txt-color">confusion.</span>
      </p>
      <p className="max-w-sm text-center description-section">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt moillit anim id est laborum --- semper quis lectus
        nulla at volutpat diam ut venenatis
      </p>
      <div className="flex ml-0 space-x-1">
        <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded">
          Request Demo
        </button>
      </div>
    </div>
  );
};

export default RequestDemo;
