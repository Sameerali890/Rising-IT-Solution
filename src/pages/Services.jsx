import Webdevelopment from "../assets/Web Development.png"
import Contentmanagement from "../assets/svg/contentmanagement.png"
import softwaredevelopment from "../assets/svg/software development.png"
import SystemIntegration from "../assets/svg/System Integration.png"
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";

function Services() {
  var { service } = useParams();

  const services = [
    {
      title: "websitedevelopment",
      img: Webdevelopment,
      description: "Rising IT Solutions is a dynamic web development company dedicated to creating innovative and user-friendly digital experiences. We specialize in building responsive websites and applications that not only enhance brand visibility but also drive business growth. Our team of skilled developers and designers utilizes the latest technologies and industry best practices to deliver tailored solutions that meet the unique needs of our clients. From e-commerce platforms to corporate websites, Rising IT Solutions is committed to providing high-quality, scalable, and secure web solutions that empower businesses to thrive in the digital landscape.",
    },
    {
      title: "contentmanegmentsytem",
      img: Contentmanagement,
      description: "At Rising IT Solutions, our Content Management System (CMS) services empower businesses to easily create, manage, and optimize their digital content. We offer tailored CMS solutions that provide user-friendly interfaces, robust functionality, and seamless integration with existing platforms. Whether you need a simple blog, a complex corporate website, or an e-commerce store, our CMS solutions enable clients to update content effortlessly without requiring extensive technical skills. With a focus on scalability, security, and customization, Rising IT Solutions ensures that your content management is efficient and effective, allowing you to focus on growing your business.",
    },
    {
      title: "softwaredevelopment",
      img: softwaredevelopment,
      description: "At Rising IT Solutions, we specialize in comprehensive software development services tailored to meet the unique needs of our clients. Our experienced team employs agile methodologies to deliver custom software solutions that enhance operational efficiency and drive innovation. From desktop applications to mobile solutions and enterprise systems, we focus on creating scalable, secure, and user-friendly software. We collaborate closely with clients throughout the development process to ensure that the final product aligns with their goals and exceeds expectations. With Rising IT Solutions, you can expect high-quality software that empowers your business to succeed in a competitive landscape.",
    },
    {
      title: "systemintegration",
      img: SystemIntegration,
      description: "At Rising IT Solutions, our system integration services streamline and unify diverse software applications and IT systems to enhance operational efficiency. We specialize in connecting various platforms, databases, and applications, ensuring they work seamlessly together. Our expert team assesses your existing infrastructure and implements tailored integration solutions that improve data flow, reduce redundancy, and enhance overall functionality. Whether integrating cloud services, on-premise systems, or legacy applications, Rising IT Solutions is dedicated to providing cohesive solutions that drive productivity and support your business goals.",
    },
  ];

  const data = services.find((s) => s.title == service);
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="left w-[50%] grid place-content-center p-8 place-items-center h-full">
          <h2 className="text-5xl font-bold uppercase">{data.title}</h2>
          <p className="text-2xl mt-[2%] text-center">{data.description}</p>
        </div>
        <div className="right w-[50%] h-ful">
          <img className="w-[900px]" src={data.img} alt="service" />
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default Services;
