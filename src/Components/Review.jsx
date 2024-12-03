import Marquee from "react-fast-marquee";
import Footer from "./Footer";
function Review() {
  const customer = [
    {
      name: "Abdur Raoof",
      image: "https://via.placeholder.com/150",
      review:
        "I have great experience with rising it solutions especially Mr Abdul, kind hearted man, good caring and honestly taking responsibility, provides better guidance and support to the customer. He had taken responsibility helped a lot in giving better service. Thank you Mr Abdul",
    },
  ];
  console.log(customer);
  return (
    <>
      <section className="p-5">
        <div className="text-white text-center text-5xl">Customer Reviews</div>
        <p className="text-white text-center text-1xl mt-5">
          Honest Reviews, Better Service.
        </p>
        <div className="">
          <Marquee
            behavior=""
            pauseOnHover
            direction="left"
            className="mt-12 mb-20"
          >
            <div className="w-[500px] hover:border-white text-center grid  place-items-center rounded-md p-5 h-[322px] border mx-5">
              <h1 className="p-3 place-content-center text-3xl font-semibold size-20 rounded-full bg-red-500">
                A
              </h1>
              <h1 className="text-white font-bold text-2xl">Abdur Raoof</h1>
              <p>
                I have great experience with rising it solutions especially Mr
                Abdul, kind hearted man, good caring and honestly taking
                responsibility, provides better guidance and support to the
                customer. He had taken responsibility helped a lot in giving
                better service. Thank you Mr Abdul
              </p>
            </div>
            <div className="w-[500px] hover:border-white text-center grid  place-items-center rounded-md p-5 h-[322px] border mx-5">
              <h1 className="p-3 place-content-center text-3xl font-semibold size-20 rounded-full bg-blue-500">
                A
              </h1>
              <h1 className="text-white font-bold text-2xl">Ajay Kumar</h1>
              <p>
                Excellent collaboration, insightful suggestions, and timely
                responses. Highly recommend for their professionalism and
                expertise.
              </p>
            </div>
            <div className="w-[500px] hover:border-white text-center grid  place-items-center rounded-md p-5 h-[322px] border mx-5">
              <h1 className="p-3 place-content-center text-3xl font-semibold size-20 rounded-full bg-blue-500">
                Y
              </h1>
              <h1 className="text-white font-bold text-2xl">Yusuf Alam</h1>
              <p>
                This place. Is really amazing Nd have a very sophisticated vibe
                me tapasya tiwari like this place very much
              </p>
            </div>
            <div className="w-[500px] hover:border-white text-center grid  place-items-center rounded-md p-5 h-[322px] border mx-5">
              <h1 className="p-3 place-content-center text-3xl font-semibold size-20 rounded-full bg-purple-500">
                S
              </h1>
              <h1 className="text-white font-bold text-2xl">
                Suraj Maddheshiya8957
              </h1>
              <p>
                I really very liked the way Rising IT Solutions guided me. They
                are superb and responsive towards their responsibilities.
              </p>
            </div>
            <div className="w-[500px] hover:border-white text-center grid  place-items-center rounded-md p-5 h-[322px] border mx-5">
              <h1 className="p-3 place-content-center text-3xl font-semibold size-20 rounded-full bg-red-500">
                A
              </h1>
              <h1 className="text-white font-bold text-2xl">
              Aftab Alam
              </h1>
              <p>
              Super service provider I really loved it service time and facility more.
              </p>
            </div>
            <div className="w-[500px] hover:border-white text-center grid  place-items-center rounded-md p-5 h-[322px] border mx-5">
              <h1 className="p-3 place-content-center text-3xl font-semibold size-20 rounded-full bg-red-500">
                A
              </h1>
              <h1 className="text-white font-bold text-2xl">
              Aatif Idreshi
              </h1>
              <p>
              I have had an amazing experience with Rising  IT Solutions. I learned a lot from my coworkers.
              </p>
            </div>
            <div className="w-[500px] hover:border-white text-center grid  place-items-center rounded-md p-5 h-[322px] border mx-5">
              <h1 className="p-3 place-content-center text-3xl font-semibold size-20 rounded-full bg-purple-500">
                S
              </h1>
              <h1 className="text-white font-bold text-2xl">
              Sheetal chhoti Chhoti
              </h1>
              <p>
              Thik place is very amazing and I love it services
              </p>
            </div>
            <div className="w-[500px] hover:border-white text-center grid  place-items-center rounded-md p-5 h-[322px] border mx-5">
              <h1 className="p-3 place-content-center text-3xl font-semibold size-20 rounded-full bg-red-500">
                A
              </h1>
              <h1 className="text-white font-bold text-2xl">
              Ajay Maurya
              </h1>
              <p>
              User interface and services of the rising it solutions is very good
              </p>
            </div>
            <div className="w-[500px] hover:border-white text-center grid  place-items-center rounded-md p-5 h-[322px] border mx-5">
              <h1 className="p-3 place-content-center text-3xl font-semibold size-20 rounded-full bg-yellow-500">
                U
              </h1>
              <h1 className="text-white font-bold text-2xl">
              Utkarsh
              </h1>
              <p>
              Thankyou Rising it solution you are  giving  me  the best work
              </p>
            </div>
            <div className="w-[500px] hover:border-white text-center grid  place-items-center rounded-md p-5 h-[322px] border mx-5">
              <h1 className="p-3 place-content-center text-3xl font-semibold size-20 rounded-full bg-orange-500">
                T
              </h1>
              <h1 className="text-white font-bold text-2xl">
              Tapasaya Tiwari
              </h1>
              <p>
              Thankyou so much  Rising it solution, your company provide me the best it services, That i want.
              </p>
            </div>
          </Marquee>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Review;
