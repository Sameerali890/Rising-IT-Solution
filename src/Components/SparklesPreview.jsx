import { useState } from "react";
import { SparklesCore } from "./ui/sparkles";
import { BackgroundBeamsWithCollision } from "./ui/Beams"

function SparklesPreview() {
  const [currentTab, setCurrentTab] = useState(0);
  var array = ["Customize Software", "Android App Development", "Digital Marketing", "Cloud Software","E-commerce" ];
  var content = [
    {
      heading:
        "Get Customize Software for Service Providers — More than Just Software!",
      description:
        "Custom software refers to applications specifically developed to meet the unique needs of a business or individual. Unlike off-the-shelf software, which is designed for a broad audience, custom software is tailored to address specific requirements, workflows, and challenges. This can enhance efficiency, improve user experience, and provide competitive advantages by integrating seamlessly with existing systems. Custom software can include anything from mobile apps to complex enterprise systems.",
        img: "https://zerogravitytechnologies.com/assets/images/software%20animate.gif",
    },
    {
      heading: "Transforming Ideas into Innovative Apps!",
      description:
        "Android app development is the process of creating applications specifically for devices running the Android operating system. This involves using programming languages like Java or Kotlin, along with Android Studio, the official integrated development environment (IDE). Developers design, build, test, and deploy apps to meet user needs and leverage Android’s features, such as notifications, GPS, and camera functionalities. The goal is to deliver engaging and user-friendly experiences on a wide range of devices, from smartphones to tablets.",
        img: "https://miro.medium.com/v2/resize:fit:1024/1*epcB_DmFnbxgvGn1FVxV5w.gif",
    },
    {
      heading: "Elevate Your Brand in the Digital World!",
      description:
        "Digital marketing is the practice of promoting products or services using digital channels, such as websites, social media, email, and search engines. It encompasses various strategies, including content marketing, SEO (search engine optimization), pay-per-click advertising, social media marketing, and email campaigns. The goal of digital marketing is to reach and engage target audiences effectively, driving traffic, generating leads, and ultimately increasing sales. It allows businesses to analyze performance in real-time and adjust strategies for better results.",
        img: "https://arthtechnology.com/assets/img/images/digital-marketing-service-provider-company-in-vadodara.gif",
    },
    {
      heading: "Empowering Your Business in the Cloud!",
      description:
        "Cloud software refers to applications and services hosted on remote servers and accessed via the internet, rather than being installed locally on a device. This model enables users to access their data and applications from anywhere, promoting flexibility and collaboration. Cloud software can include various types of services, such as SaaS (Software as a Service), PaaS (Platform as a Service), and IaaS (Infrastructure as a Service). Key benefits include scalability, cost-effectiveness, automatic updates, and enhanced security, making it an essential choice for modern businesses.",
        img: "https://i.pinimg.com/originals/86/56/8d/86568d91236335604340fcc893087cdb.gif",
    },
    {
      heading: "Shop Smart, Live Better—Anytime, Anywhere!",
      description:
        "E-commerce, or electronic commerce, refers to the buying and selling of goods and services over the internet. It encompasses a wide range of online transactions, including retail sales, wholesale trade, and digital services. E-commerce platforms allow businesses to reach global markets, manage inventory, process payments, and deliver products efficiently. Key benefits include convenience, 24/7 accessibility, and the ability to analyze customer behavior for improved marketing strategies. It has revolutionized how consumers shop and businesses operate, making it a vital component of the modern economy.",
      img: "https://www.zuplic.com/wp-content/uploads/2018/07/eCommerce-Animated-GIF.gif",
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

      <div className="container w-full h-full p-4 mx-auto overflow-hidden ">
        {content.map((kuch, index) => {
          return (
            <section
              key={index}
              className={`flex-shrink-0  w-full h-full justify-between  place-items-center ${
                currentTab == index ? "flex" : "hidden"
              }`}
            >
              <div className="w-[600px]">
                <p className="mb-5 text-4xl">{kuch.heading}</p>
                {kuch.description}
              </div>
              <img className="w-[550px]" src={kuch.img} alt="" />
            </section>
          );
        })}
      </div>
      <div className="absolute flex justify-center w-full bottom-4 ">
        {array.map((kuch, index) => {
          return (
            <button onClick={() => setCurrentTab(index)} key={index} className="items-center px-3 py-4 ml-3 rounded-lg font-bold text-black bg-white hover:bg-slate-600">
              {kuch}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default SparklesPreview;
