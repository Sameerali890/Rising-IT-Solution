import Logo from "../assets/LogoWeb.png";
function Footer() {
  return (
    <section className="">
      <footer className="border  bg-base-200 flex justify-evenly gap-20  text-base-content p-5 ">
        <nav className="flex flex-col">
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
        <nav className="flex flex-col">
          <h6 className="font-bold text-2xl">Address</h6>
          <a className="hover:text-blue-500 cursor-pointer">
            Phone No: <strong>9818691322</strong>
          </a>
          <a className="hover:text-blue-500 cursor-pointer">
            Office No:{" "}
            <strong>B-748, TOWER B, <br /> I-THUM  NOIDA SECTOR-62,201301(UP)</strong>
          </a>
        </nav>
      </footer>
      <footer className="footer flex justify-between  bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <img className="w-[100px]" src={Logo} alt="" />
          <p>IT SOLUTIONS</p>
        </aside>
        <nav className="">{/* social media */}</nav>
      </footer>
    </section>
  );
}

export default Footer;
