import "./Development.css";
import Process from "../assets/svg/process-main-1.svg";
import Processone from "../assets/svg/our-process-main-2.svg";
import Processtwo from "../assets/svg/our-process-main-3.svg";
import Processthree from "../assets/svg/our-process-main-4.svg";
import Processfour from "../assets/svg/our-process-main-5.svg";
import Processfive from "../assets/svg/our-process-main-6.svg";
import Processsix from "../assets/svg/our-process-main-7.svg";

function DevelopmentPhase() {
  return (
    <div className="space-y-2 p-4 flex flex-col justify-center items-center">
      <div>
        <h1 className=" mb-2 font-bold text-5xl text-center text-white">
          Our Process
        </h1>
        <p className=" text-1xl mb-2 text-center text-white">
          Are you curious to know a bit in brief about our process? Here it is.
        </p>
      </div>
      <div
        role="alert"
        className="bg-green-100  gap-5 w-[80%] h-[200px] dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-5 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105"
      >
        <img className="size-20" src={Process} alt="" />
        <div>
          <h1 className="font-bold text-2xl"> Documentation</h1>
          <p className="leading-relaxed mb-3">
            The system documentation includes architecture design, requirements,
            validation, source code, testing and verification details, help
            guide, and maintenance information. It helps the client overview the
            entire system, and techies and functional professionals know about
            the technology integration under a single umbrella.
          </p>
        </div>
      </div>

      <div
        role="alert"
        className="bg-blue-100 w-[80%] gap-5 h-[200px] dark:bg-blue-900 border-l-4 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-100 p-5 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-blue-200 dark:hover:bg-blue-800 transform hover:scale-105"
      >
        <img className="size-20" src={Processone} alt="" />
        <div>
          <h1 className="font-bold text-2xl"> Prototype Creating</h1>
          <p className="leading-relaxed mb-3">
            Creating a prototype has added benefits. The software professional
            gets feedback from the client and users at the early stage of the
            project. The client can evaluate if the software or application
            specifications match the expectations. Accordingly, the team will
            execute the same.
          </p>
        </div>
      </div>

      <div
        role="alert"
        className="bg-yellow-100 gap-5 w-[80%] h-[200px] dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-700 text-yellow-900 dark:text-yellow-100 p-5 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-yellow-200 dark:hover:bg-yellow-800 transform hover:scale-105"
      >
        <img className="size-20" src={Processtwo} alt="" />
        <div>
          <h1 className="font-bold text-2xl"> Designing</h1>
          <p className="leading-relaxed mb-3">
            It is a crucial phase of the process to include everyone involved
            with the product or service. It is basically for all to comprehend
            the possibilities in the project, the aspects that are not possible
            to achieve, and the look-alike of the overall system, which will be
            in the designing phase.
          </p>
        </div>
      </div>

      <div
        role="alert"
        className="bg-red-100 gap-5 w-[80%] h-[200px] dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-5 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform hover:scale-105"
      >
        <img className="size-20" src={Processthree} alt="" />
        <div>
          <h1 className="font-bold text-2xl">Development and Execution</h1>
          <p className="leading-relaxed mb-3">
            It is another significant phase of the process. While developing and
            implementing new and existing features, our expertise will keep
            determining problems and looking out for potential areas for
            improvement. The experts are well aware of the latest market trends,
            about peers and how they are doing, get the training if needed, and
            deliver none but the best solution to clients in the industry.
          </p>
        </div>
      </div>
      <div
        role="alert"
        className="bg-slate-100 gap-5 w-[80%] h-[200px] dark:bg-slate-950 border-l-4 border-slate-500 dark:border-slate-700 text-slate-900 dark:text-slate-100 p-5 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-800 transform hover:scale-105"
      >
        <img className="size-20" src={Processsix} alt="" />
        <div>
          <h1 className="font-bold text-2xl"> Beta Release</h1>
          <p className="leading-relaxed mb-3">
            It allows the client to do small-scale testing of the website or
            application to check if the functionality is working as per
            expectation. Beta testing focuses less on reviewing and figuring out
            bugs and more on assuring if the web app or site application is easy
            to use, concise, user- friendl , intuitive, or not.
          </p>
        </div>
      </div>
      <div
        role="alert"
        className="bg-orange-100 gap-5 w-[80%] h-[200px] dark:bg-orange-900 border-l-4 border-orange-500 dark:border-orange-700 text-orange-900 dark:text-orange-100 p-5 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-orange-200 dark:hover:bg-orange-800 transform hover:scale-105"
      >
        <img className="size-20" src={Processfour} alt="" />
        <div>
          <h1 className="font-bold text-2xl">Feedback Analysis</h1>
          <p className="leading-relaxed mb-3">
            It is an integral part of the process. In this phase, the feedback
            of the client and different departments are examined, gathered, and
            brainstormed. The feedback examination basis is upon the
            documentation, designing, development, and beta release testing of
            each module in the project. Accordingly, the information is shared
            with the client, assuring transparency throughout the
            implementation.
          </p>
        </div>
      </div>
      <div
        role="alert"
        className="bg-amber-100 gap-5 w-[80%] h-[200px] dark:bg-amber-900 border-l-4 border-amber-500 dark:border-amber-700 text-amber-900 dark:text-amber-100 p-5 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-amber-800 transform hover:scale-105"
      >
        <img className="size-20" src={Processfive} alt="" />
        <div>
          <h1 className="font-bold text-2xl">Final Go</h1>
          <p className="leading-relaxed mb-3">
            A new product experience is indescribable from the client&apos;s
            perspective, adding value to their brand and business. We make sure
            that the final launch and go of the software is effective, what is
            expected by the client. Any flaws/bugs that may pop in beta testing
            will go in the fixation phase before launching anything out in the
            market.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DevelopmentPhase;
