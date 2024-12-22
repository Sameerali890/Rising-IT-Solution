import Logo from "../assets/LogoWeb.png";
import { Icon } from "@iconify/react/dist/iconify.js";
function Footer() {
  return (
    <section className="overflow-hidden">
      <footer className="border  bg-base-200 flex justify-evenly lg:flex-nowrap lg:justify-center flex-wrap gap-10  text-base-content p-8 ">
        <div className="flex justify-between lg:justify-around w-[100%] lg:w-[50%]">
        <nav className="flex flex-col ">
          <h6 className="font-bold text-2xl">Services</h6>
          <a className="hover:text-blue-500 cursor-pointer">
            Website Developemnt
          </a>
          <a className="hover:text-blue-500 cursor-pointer">
            Android App Development
          </a>
          <a className="hover:text-blue-500 cursor-pointer">E-commerce</a>
          <a className="hover:text-blue-500 cursor-pointer">
            Digital Marketing
          </a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="font-bold text-2xl">Company</h6>
          <a className="hover:text-blue-500 cursor-pointer">About us</a>
          <a className="hover:text-blue-500 cursor-pointer">Blog</a>
          <a className="hover:text-blue-500 cursor-pointer">Contact</a>
          <a className="hover:text-blue-500 cursor-pointer">Terms of use</a>
          <a className="hover:text-blue-500 cursor-pointer">Privacy policy</a>
          <a className="hover:text-blue-500 cursor-pointer">Cookie policy</a>
        </nav>
        </div>
        <nav className="flex flex-col">
          <h6 className="font-bold text-2xl">Address</h6>
          <a className="hover:text-blue-500 cursor-pointer">
            Phone No: <strong>9818691322</strong>
          </a>
          <a className="hover:text-blue-500 cursor-pointer">
            Office No:{" "}
            <strong> Office 7th floor Tower B ITHUM TOWER, <br /> Industrial Area, Sector 62, Noida, Uttar-Pradesh 201301</strong>
          </a>
        </nav>
      </footer>
      <footer className="footer flex justify-between  bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <img className="w-[100px]" src={Logo} alt="" />
          <p>IT SOLUTIONS</p>
        </aside>
        <nav className="flex gap-4 justify-center items-center">
        <a href="https://www.facebook.com/profile.php?id=61551356494401">
          <Icon className="size-8" icon="mingcute:facebook-line" />
        </a>
         <a href="https://www.instagram.com/risingitsolutions/?next=%2F">
           <Icon className="size-8" icon="fe:instagram" />
         </a>
         <a href="https://x.com/Rising_it8">
           <Icon className="size-8" icon="ri:twitter-line" />
         </a>
        </nav>
      </footer>
    </section>
  );
}

export default Footer;
