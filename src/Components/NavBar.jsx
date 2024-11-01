import { Link } from "react-router-dom";
import Logo from "../assets/LogoWeb.png";
import { Icon } from "@iconify/react/dist/iconify.js";
function NavBar() {
  return (
    <nav className="container absolute z-10 flex items-center p-4 -translate-x-1/2 left-1/2">
      <img src={Logo} className="w-[100px]" alt="" />
      <div className="flex items-center gap-8 ml-auto">
        <Link to="/">Home</Link>
        <section className="relative group">
          <button className="flex items-center gap-1">
            Company <Icon icon="mingcute:down-line" />
          </button>
          <div className="absolute left-0 grid  h-0 gap-2 overflow-hidden translate-y-4 whitespace-nowrap group-hover:h-[60px] transition-all duration-500">
            <Link className="hover:text-blue-500" to="/blog">Blog</Link>
            <Link className="hover:text-blue-500" to="/aboutus">About Us</Link>
          </div>
        </section>
        <section className="group">
          <button className="flex items-center gap-1">
            Services <Icon icon="mingcute:down-line" />
          </button>
          <div className="fixed  w-[100%] group-hover:p-6  bg-[#0a0a0a] left-0 grid grid-cols-6 h-0 gap-2 overflow-hidden translate-y-4 whitespace-nowrap group-hover:h-[184px] transition-all duration-500">
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
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;
