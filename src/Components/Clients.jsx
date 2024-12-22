import Marquee from "react-fast-marquee";
import Beverages from "../assets/svg/SA beverages.jpg"
import Win from "../assets/svg/wincapital_logo (1).png"
import Cocacola from "../assets/svg/coca cola.jpg"

const Clients = () => {
  return (
    <section className="p-5">
        <div className="text-white font-bold text-center text-5xl">Clients</div>
        <p className="text-white text-center text-1xl mt-3">
        Together, We Build Smarter IT Futures.
        </p>
        <div className="">
          <Marquee
            behavior=""
            pauseOnHover
            direction="left"
            className="mt-12 mb-20"
          >
            <div className="w-[500px] hover:border-white text-center grid  place-items-center rounded-md p-5 h-[322px] border mx-5">
              <img className="size-52" src={Beverages} alt="" />
            </div>
            <div className="w-[500px] hover:border-white text-center grid  place-items-center rounded-md p-5 h-[322px] border mx-5">
              <img className="size-52" src={Win} alt="" />
            </div>
            <div className="w-[500px] hover:border-white text-center grid  place-items-center rounded-md p-5 h-[322px] border mx-5">
            <img className="w-[400px]" src={Cocacola} alt="" />
            </div>
            <div className="w-[500px] hover:border-white text-center grid  place-items-center rounded-md p-5 h-[322px] border mx-5">
            <img className="size-52" src={Win} alt="" />
            </div>
          </Marquee>
        </div>
      </section>
  )
}

export default Clients