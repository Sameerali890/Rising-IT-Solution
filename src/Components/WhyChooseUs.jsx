import Whychooseus from "../assets/svg/whychooseus.png";
const WhyChooseUs = () => {
  return (
    <div className="space-y-5 mb-10 h-[800px]">
      <h1 className="text-center font-bold text-5xl mt-6">Why Choose Us</h1>
      <p className="text-center text-1xl ">
        We offer you the most innovative and industry-best IT solutions at
        competitive pricing that keeps you working with us.
      </p>
      <div className="flex justify-evenly gap-10  border w-[85%]  items-center   h-[80%] mx-auto rounded-lg  dark:text-gray-800">
        <div className="left">
          <img src={Whychooseus} className="size-[600px]" alt="" />
        </div>
        <div className="right">
<div className="cards">
    <div className="card red">
        <p className="tip">Quality Services</p>
        <p className="second-text">Our software company is committed to providing high-quality services that seamlessly integrate cutting-edge technology, user-centric design, and robust development to meet and exceed our clients&apos; expectations.</p>
    </div>
    <div className="card blue">
        <p className="tip">Timely Project Delivery</p>
        <p className="second-text">We know time is money. Get your Website or App ready within deadline as we respect our clients & time.</p>
    </div>
    <div className="card green">
        <p className="tip">24/7 Support</p>
        <p className="second-text">Our Web Developer & Designer will be always available all round the clock until project completion.</p>
    </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
