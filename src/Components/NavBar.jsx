import { Link } from "react-router-dom";
import Logo from "../assets/LogoWeb.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
function NavBar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
    <div>
    <a className="z-50 lg:right-10 bottom-14 right-8  fixed  text-white" href="https://wa.me/919818691322"><Icon className="lg:size-[65px] size-[40px]" icon="logos:whatsapp-icon"/></a>
    </div>
    <nav className="w-full  flex-wrap lg:absolute  fixed z-50 flex gap-8 bg-[#0a0a0a] lg:bg-transparent content-start justify-between  p-4  left-0">
      <img src={Logo} className="max-w-[100px] lg:w-[100px] lg:h-[50px]" alt="" />
      <div className={`flex max-md:absolute h-[calc(100dvh-61px)] bg-inherit lg:bg-transparent   top-[61px] md:h-auto md:flex-row   p-5 max-md:w-full left-0   flex-col order-2 max-md:basis-80   items-start gap-5 sm:gap-8 ${!isOpen && 'hidden md:flex'}`}>
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <section className="relative group">
          <button className="flex items-center gap-1 hover:text-blue-500">
            Company <Icon icon="mingcute:down-line" />
          </button>
          <div className="lg:absolute sm:fixed lg:left-0 grid  h-0  overflow-hidden translate-y-4 whitespace-nowrap group-hover:h-[90px] transition-all duration-500">
            <Link className="hover:text-blue-500" to="/blog">Blog</Link>
            <Link className="hover:text-blue-500" to="/review">Review</Link>
            <Link className="hover:text-blue-500" to="/aboutus">About Us</Link>
          </div>
        </section>
        <section className="group overflow-y-auto">
          <button className="flex items-center gap-1 hover:text-blue-500">
            Services <Icon icon="mingcute:down-line" />
          </button>
          <div className="sm:fixed w-[100%] group-hover:p-6  bg-[#0a0a0a] lg:left-0 left-32  grid lg:grid-cols-6 h-0 gap-2 lg:overflow-hidden translate-y-4 whitespace-nowrap group-hover:h-auto sm:group-hover:h-[184px] transition-all duration-500">
            <div className="grid gap-1 content-start">
              <span className="font-extrabold text-1xl">Web development</span>
              <Link className="hover:text-blue-500" to="/Services/websitedevelopment">Website Development</Link>
              <Link className="hover:text-blue-500" to="/Services/contentmanegmentsytem">Content Management Systems</Link>
              <Link className="hover:text-blue-500" to="/Services/softwaredevelopment">Software Development</Link>
              <Link className="hover:text-blue-500" to="/Services/sytemintegration">System Integration</Link>
            </div>
            <div className="grid gap-1 content-start">
              <span className="font-extrabold text-1xl">
                Mobile App development
              </span>
               <Link className="hover:text-blue-500" to="">iPhone App Development</Link>
              <Link className="hover:text-blue-500" to="">Android App Development</Link>
              <Link className="hover:text-blue-500" to="">Hybrid App Development</Link>
              <Link className="hover:text-blue-500" to="">Window App Solution</Link>
            </div>
            <div className="grid gap-1 content-start overflow-hidden">
              <span className="font-extrabold text-1xl">E-Commerce</span>
               <Link className="hover:text-blue-500" to="">Ecommerce Custom Web Development</Link>
              <Link className="hover:text-blue-500" to="">Magento Development</Link>
              <Link className="hover:text-blue-500" to="">OpenCart development</Link>
              <Link className="hover:text-blue-500" to="">WooCommerce</Link>
            </div>
            <div className="grid gap-1 content-start">
              <span className="font-extrabold text-1xl">Digital Marketing</span>
               <Link className="hover:text-blue-500" to="">Search Engine Optimization</Link>
              <Link className="hover:text-blue-500" to="">Content Writing</Link>
              <Link className="hover:text-blue-500" to="">Blogs and Articles</Link>
              <Link className="hover:text-blue-500" to="">Social Optimization</Link>
            </div>
            <div className="grid gap-1 content-start">
              <span className="font-extrabold text-1xl">Cloud Software</span>
               <Link className="hover:text-blue-500" to="">Website Development</Link>
              <Link className="hover:text-blue-500" to="">Content Management Systems</Link>
              <Link className="hover:text-blue-500" to="">Software Development</Link>
              <Link className="hover:text-blue-500" to="">System Integration</Link>
            </div>
            <div className="grid gap-1 content-start">
              <span className="font-extrabold text-1xl">Customize Software</span>
               <Link className="hover:text-blue-500" to="">Website Development</Link>
              <Link className="hover:text-blue-500" to="">Content Management Systems</Link>
              <Link className="hover:text-blue-500" to="">Software Development</Link>
              <Link className="hover:text-blue-500" to="">System Integration</Link>
            </div>
          </div>
        </section>
        <Link to="/portfolio" className="hover:text-blue-500">Portfolio</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
      </div>
        <button className="md:hidden"  onClick={toggleMenu}>
          <Icon className="text-3xl" icon={isOpen ? "gridicons:cross" : "mingcute:menu-line"} />
        </button>
    </nav>
    </>
  );
}

export default NavBar;
