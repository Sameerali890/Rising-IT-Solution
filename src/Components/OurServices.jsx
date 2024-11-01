
import { ThreeDCardDemo } from "./ui/CardDemo";
function OurServices() {
  const services = [
    {
      title: "Android App Development",
      description:
        "Develop mobile apps that cater to specific needs and workflows of your target audience.",
      img: "https://miro.medium.com/v2/resize:fit:1024/1*epcB_DmFnbxgvGn1FVxV5w.gif",
    },
    {
      title: "Digital Marketing",
      description:
        "Create engaging and user-friendly online content to reach your target audience.",
      img: "https://arthtechnology.com/assets/img/images/digital-marketing-service-provider-company-in-vadodara.gif",
    },
    {
      title: "Cloud Software",
      description:
        "Deploy applications and services on secure, scalable, and cost-effective cloud platforms.",
      img: "https://i.pinimg.com/originals/86/56/8d/86568d91236335604340fcc893087cdb.gif",
    },
    {
      title: "E-Commerce",
      description:
        "Develop a platform that allows businesses to sell products and services online, enabling customers to browse, purchase, and track their orders.",
      img: "https://www.zuplic.com/wp-content/uploads/2018/07/eCommerce-Animated-GIF.gif",
    },
    {
      title: "Customize Software",
      description:
        "Applications specifically developed to meet the unique needs of a business or individual.",
      img: "https://zerogravitytechnologies.com/assets/images/software%20animate.gif",
    },
  ];
  return (
    <div className="py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl mb-16 font-bold text-center">Our Services</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5  justify-center">
        {services.map((service) => (
          <ThreeDCardDemo key={service.title} data={service} />
        ))}
      </div>
    </div>
  );
}

export default OurServices;
