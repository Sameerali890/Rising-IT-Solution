import { useState } from "react";
import { SparklesCore } from "../Components/ui/Sparkles";
import { BackgroundBeamsWithCollision } from "./ui/Beams"
import { Link } from "react-router-dom";
import AppDev from "../assets/svg/app develop.png"
import Ecommerce from "../assets/svg/e-commerce img.png"
import CustomizeSoft from "../assets/svg/custom.png"
import DigiMarket from "../assets/svg/digi market.png"
import Cloudsoft from "../assets/svg/cloud soft.png"

function SparklesPreview() {
  const [currentTab, setCurrentTab] = useState(0);
  var array = ["Customize Software", "Android App Development", "Digital Marketing", "Cloud Software","E-commerce" ];
  var content = [
    {
      heading:
        "Get Customize Software for Service Providers — More than Just Software!",
      description:
        "Custom software refers to applications specifically developed to meet the unique needs of a business or individual. Unlike off-the-shelf software, which is designed for a broad audience, custom software is tailored to address specific requirements, workflows, and challenges. This can enhance efficiency, improve user experience, and provide competitive advantages by integrating seamlessly with existing systems. Custom software can include anything from mobile apps to complex enterprise systems.",
        img: CustomizeSoft,
    },
    {
      heading: "Transforming Ideas into Innovative Apps!",
      description:
        "Android app development is the process of creating applications specifically for devices running the Android operating system. This involves using programming languages like Java or Kotlin, along with Android Studio, the official integrated development environment (IDE). Developers design, build, test, and deploy apps to meet user needs and leverage Android’s features, such as notifications, GPS, and camera functionalities. The goal is to deliver engaging and user-friendly experiences on a wide range of devices, from smartphones to tablets.",
        img: AppDev,
    },
    {
      heading: "Elevate Your Brand in the Digital World!",
      description:
        "Digital marketing is the practice of promoting products or services using digital channels, such as websites, social media, email, and search engines. It encompasses various strategies, including content marketing, SEO (search engine optimization), pay-per-click advertising, social media marketing, and email campaigns. The goal of digital marketing is to reach and engage target audiences effectively, driving traffic, generating leads, and ultimately increasing sales. It allows businesses to analyze performance in real-time and adjust strategies for better results.",
        img: DigiMarket,
    },
    {
      heading: "Empowering Your Business in the Cloud!",
      description:
        "Cloud software refers to applications and services hosted on remote servers and accessed via the internet, rather than being installed locally on a device. This model enables users to access their data and applications from anywhere, promoting flexibility and collaboration. Cloud software can include various types of services, such as SaaS (Software as a Service), PaaS (Platform as a Service), and IaaS (Infrastructure as a Service). Key benefits include scalability, cost-effectiveness, automatic updates, and enhanced security, making it an essential choice for modern businesses.",
        img: Cloudsoft,
    },
    {
      heading: "Shop Smart, Live Better—Anytime, Anywhere!",
      description:
        "E-commerce, or electronic commerce, refers to the buying and selling of goods and services over the internet. It encompasses a wide range of online transactions, including retail sales, wholesale trade, and digital services. E-commerce platforms allow businesses to reach global markets, manage inventory, process payments, and deliver products efficiently. Key benefits include convenience, 24/7 accessibility, and the ability to analyze customer behavior for improved marketing strategies. It has revolutionized how consumers shop and businesses operate, making it a vital component of the modern economy.",
      img: Ecommerce,
    },
  ];
  return (
    <div className="relative w-full h-dvh ">
      <div className="absolute inset-0 w-full h-dvh -z-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
        <div className="absolute inset-0 w-full h-dvh -z-[9] "><BackgroundBeamsWithCollision/></div>

      <div className="container w-full min-h-full h-full p-4 mx-auto overflow-hidden ">
        {content.map((kuch, index) => {
          return (
            <section
              key={index}
              className={`flex-shrink-0 flex-wrap-reverse  w-full h-full justify-center lg:place-items-center lg:justify-around  ${
                currentTab == index ? "flex" : "hidden"
              }`}
            >
              <div className="w-[500px] lg:w-[600px]   text-center lg:text-left ">
                <p className="mb-5 text-[25px] lg:text-[45px] font-bold">{kuch.heading}</p>
                <h1 className="max-sm:line-clamp-4">{kuch.description}</h1>
                <div className="flex items-center justify-center  mt-[5%]">
                  <div className="relative  lg:right-52 group">
                    <button className="relative inline-block   p-px  font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                      <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                        <div className="relative z-10 flex items-center space-x-2">
                          <Link
                            to="/contact"
                            className="transition-all duration-500 group-hover:translate-x-1"
                          >
                            Let's get started
                          </Link>
                          <svg
                            className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                            data-slot="icon"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clip-rule="evenodd"
                              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <img
                className="size-[250px] lg:size-[550px] -mt-[25%] lg:mt-0 aspect-square rounded-lg"
                src={kuch.img}
                alt=""
              />
            </section>
          );
        })}
      </div>
      <div className="flex justify-center">
        <div className="md:absolute lg:flex  grid grid-cols-3  justify-self-center place-items-center lg:justify-center lg:gap-8 gap-3  lg:bottom-4 bottom-5 absolute w-[80%] ">
          {array.map((kuch, index) => {
            return (
              <button onClick={() => setCurrentTab(index)} key={index} className="items-center   lg:py-4 lg:px-3 border p-1 text-[10px] lg:text-[20px] w-[100px] lg:w-fit h-[60px] lg:h-full  rounded-lg font-bold  text-black bg-white hover:bg-slate-600">
                {kuch}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default SparklesPreview;
