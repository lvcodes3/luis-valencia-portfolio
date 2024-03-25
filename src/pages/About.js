import fsImage from "../images/fs.png";
import or2stemImage from "../images/or2stem.jpg";
import codingImage from "../images/coding.webp";

const About = () => {
  const skills = [
    "AJAX",
    "Bash",
    "Bootstrap 4",
    "CSS",
    "Git",
    "GraphQL",
    "HTML",
    "JavaScript",
    "JSON",
    "MongoDB",
    "MySQL",
    "Next.js",
    "PHP",
    "PostgreSQL",
    "Python",
    "Redux",
    "Tailwind CSS",
    "TypeScript",
    "Vue.js",
    "C++",
    "Node.js",
    "Express.js",
    "React.js",
    "Drizzle ORM",
    "Socket.IO / Web Sockets",
    "JWTs",
    "User Auth",
    "Stripe",
    "Shadcn/ui",
    "REST APIs",
    "Responsive Web Apps",
    "Software Development Life Cycle",
    "Fluent English and Spanish",
  ];

  const softwares = [
    "Adobe",
    "Clerk Auth",
    "FileZilla",
    "GitHub",
    "Jira",
    "macOS",
    "MAMP",
    "Microsoft Windows",
    "Visual Studio Code",
    "Xcode",
    "Postman",
  ];

  return (
    <div className="w-full h-full dark:text-white bg-slate-100 dark:bg-slate-800">
      {/* Education */}
      <div className="py-[30px]">
        <h1 className="pl-[7%] pb-2 text-2xl font-bold">My Education</h1>
        <hr className="border-2 border-black dark:border-white" />
        <div className="p-1 flex md:flex-row flex-col-reverse justify-center">
          <div className="flex-[2] flex flex-col justify-center items-center gap-1">
            <h2 className="text-xl font-semibold">
              California State University, Fresno
            </h2>
            <h3 className="text-lg font-medium">
              Bachelors of Science, Computer Science <em>(May 2023)</em>
            </h3>
            <div className="w-[75%] w-max-[75%]">
              <p>
                Software Engineering I, Software Engineering II, Web
                Programming, Computer Security, Data Structures and Algorithms,
                Database Systems, Operating Systems, Internet Networking and
                Protocols, Simulation, Computer Graphics, etc...
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src={fsImage}
              alt="California State University, Fresno"
              className="w-[200px] h-[200px] rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Work */}
      <div className="py-[30px]">
        <h1 className="pl-[7%] pb-2 text-2xl font-bold">My Work Experience</h1>
        <hr className="border-2 border-black dark:border-white" />
        <div className="p-1 flex md:flex-row flex-col justify-center pb-[30px]">
          <div className="flex-1 flex justify-center items-center">
            <img
              src={codingImage}
              alt="Software Engineer"
              className="w-[200px] h-[120px]"
            />
          </div>
          <div className="flex-[2] flex flex-col justify-center items-center gap-1">
            <h2 className="text-xl font-semibold">Software Engineer</h2>
            <h3 className="text-lg font-medium">Data Consultants</h3>
            <p>07/01/23 - present</p>
            <div className="w-[75%] w-max-[75%]">
              <p>
                Engineered significant updates on the "Grapevine eF&I" web app
                for national car dealerships, utilizing PHP, JavaScript, MySQL,
                HTML, and CSS. Implemented a street-level tax rate lookup
                feature, enhancing transaction accuracy by 10%, and established
                a robust data audit system, ensuring a 10% enhancement in data
                integrity and regulatory compliance. Developed custom APIs to
                augment application capabilities and interoperability, resulting
                in a 5% increase in operational efficiency. Administered
                front-end improvements, executed bug fixes, and optimized code,
                leading to a 15% increase in application performance.
              </p>
            </div>
          </div>
        </div>
        <div className="p-1 flex md:flex-row flex-col justify-center">
          <div className="flex-1 flex justify-center items-center">
            <img
              src={or2stemImage}
              alt="OR2STEM"
              className="w-[200px] h-[101.01px]"
            />
          </div>
          <div className="flex-[2] flex flex-col justify-center items-center gap-1">
            <h2 className="text-xl font-semibold">Full Stack Web Developer</h2>
            <h3 className="text-lg font-medium">
              California State University, Fresno
            </h3>
            <p>06/13/22 - 12/29/23</p>
            <div className="w-[75%] w-max-[75%]">
              <p>
                Developed SCALE, a modern web app for California State
                University, Fresno's Math Department, using PHP, JavaScript,
                PostgreSQL, HTML, and CSS. Integrated with Canvas LMS for secure
                authentication, ensuring 100% secure access for faculty and
                students. Implemented faculty functionalities for monitoring
                student progress, managing math content, creating dynamic
                assessments, and student functionalities for browsing content,
                answering questions, and tracking progress. Resulted in a 10-20%
                increase in faculty productivity and a 10-25% increase in
                student engagement and academic performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="py-[30px]">
        <h1 className="pl-[7%] pb-2 text-2xl font-bold">My Skills</h1>
        <hr className="border-2 border-black dark:border-white" />
        <div className="p-1 flex md:flex-row flex-col justify-center">
          <div className="flex-[2] flex flex-col items-center md:pb-0 pb-[30px]">
            <h2 className="pb-2 text-xl font-semibold">Technical:</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill) => {
                return (
                  <div
                    key={skill}
                    className="w-[100px] h-[100px] p-1 flex justify-center items-center dark:text-white bg-green-400 dark:bg-slate-700 border-2 border-black rounded-2xl cursor-pointer hover:scale-105"
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-[2] flex flex-col items-center">
            <h2 className="pb-2 text-xl font-semibold">Software:</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {softwares.map((software) => {
                return (
                  <div
                    key={software}
                    className="w-[100px] h-[100px] p-1 flex justify-center items-center dark:text-white bg-green-400 dark:bg-slate-700 border-2 border-black rounded-2xl cursor-pointer hover:scale-105"
                  >
                    {software}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
