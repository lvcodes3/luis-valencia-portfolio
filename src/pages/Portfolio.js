import { useState } from "react";

import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

const Portfolio = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="w-full h-[calc(100vh-120px)] flex flex-col justify-start items-center bg-slate-100 dark:bg-slate-800 text-black dark:text-white">
      <div className="pt-[60px] flex flex-col items-start gap-y-[60px]">
        <a
          href="https://www.linkedin.com/in/luis-valencia-profile"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center gap-x-1 cursor-pointer hover:scale-105"
        >
          <FaLinkedin className="w-[50px] h-[50px] text-blue-600" />
          <h1 className="text-xl font-semibold">LinkedIn</h1>
        </a>

        <a
          href="https://github.com/lvcodes3"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center gap-x-1 cursor-pointer hover:scale-105"
        >
          <FaGithub className="w-[50px] h-[50px] dark:text-white" />
          <h1 className="text-xl font-semibold">GitHub</h1>
        </a>

        <div
          onClick={() => {
            if (!showProjects) {
              setShowProjects(true);
            } else {
              setShowProjects(false);
            }
          }}
          className="flex justify-center items-center gap-x-1 cursor-pointer hover:scale-105"
        >
          <FaCode className="w-[50px] h-[50px] text-red-500" />
          <h1 className="text-xl font-semibold">My Deployed Projects</h1>
        </div>
      </div>
      {showProjects && (
        <div className="pt-3 flex flex-col justify-center items-center gap-y-4">
          <a
            href="https://scale.fresnostate.edu/scale/login.php"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <h2 className="text-lg font-medium">SCALE Web App</h2>
          </a>

          <a
            href="https://todo-app-lvcodes3.vercel.app"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <h2 className="text-lg font-medium">
              Todo Web App (Singly Linked List)
            </h2>
          </a>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
