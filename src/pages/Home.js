import { Link } from "react-router-dom";

import luis from "../images/luis.jpg";

const Home = () => {
  return (
    <div className="w-screen h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full h-full flex md:flex-row flex-col justify-center items-center gap-4 bg-slate-100 dark:bg-slate-800">
        <img
          src={luis}
          alt="Luis Valencia"
          className="w-[342.45px] h-[439.95px] rounded-[50%]"
        />
        <div className="flex flex-col gap-3 p-2">
          <h1 className="text-4xl font-extrabold text-center dark:text-white">
            Luis Valencia
          </h1>
          <p className="text-xl font-medium text-center dark:text-white">
            Full Stack Software Engineer
          </p>
          <div className="flex justify-center items-center gap-4">
            <Link
              to="/about"
              className="w-[150px] p-[2px] text-center font-medium bg-green-400 cursor-pointer border-2 border-green-500 rounded-full hover:scale-105 dark:text-white"
            >
              More About Me
            </Link>
            <Link
              to="/portfolio"
              className="w-[150px] p-[2px] text-center font-medium bg-green-400 cursor-pointer border-2 border-green-500 rounded-full hover:scale-105 dark:text-white"
            >
              My Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
