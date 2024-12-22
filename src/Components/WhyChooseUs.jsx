import Whychooseus from "../assets/svg/whychooseus.png";
const WhyChooseUs = () => {
  return (
    <div className="space-y-5 mb-10 min-h-[800px]">
      <h1 className="text-center font-bold text-5xl mt-6">Why Choose Us</h1>
      <p className="text-center text-1xl mb-10 ">
        We offer you the most innovative and industry-best IT solutions at
        competitive pricing that keeps you working with us.
      </p>
      <div className="flex justify-evenly flex-wrap gap-10 lg:w-[1300px] lg:h-[600px]  border   items-center  mx-auto rounded-lg  dark:text-gray-800">
        <div className="left flex items-center justify-center">
          <img src={Whychooseus} className="max-w-[500px] w-[100%] lg:w-[100%] lg:p-0 p-3" alt="" />
        </div>
        <div className="right">
<div className="cards p-5">
    <div className="card red ">
        <p className="tip">Quality Services</p>
        <p className="second-text">Empowering your business with seamless IT support.
        Quality services that keep you ahead of the curve.</p>
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
