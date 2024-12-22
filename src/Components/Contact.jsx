import Swal from "sweetalert2";
import Footer from "../Components/Footer"
function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9acd8131-bcdf-4312-8fd6-bd99311605eb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      event.target.reset();
    }
  };
  return (
    <>
      <div className="space-y-4  mb-10 lg:h-[800px]">
        <h1 className="text-center text-5xl mt-6">Let&apos;s Talk</h1>
        <p className="text-center text-1xl">
          Your IT Challenges, Our Expertise—Together, We Build the Future
        </p>
        <div className="flex justify-evenly lg:justify-evenly border min-w-[100%] lg:w-[100vw] flex-col lg:flex-row  items-center   max-h-[100%]  mx-auto rounded-lg  dark:text-gray-800">
          <div className="left p-5 lg:p-0">
            <div
              className="section-banner h-[250px] w-[250px] lg:w-[500px] lg:h-[500px] "
            >
              <div id="star-1">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-2">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-3">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-4">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-5">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-6">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-7">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <form
              onSubmit={onSubmit}
              noValidate=""
              className="space-y-4 p-8 lg:w-[550px]"
            >
              <div className="flex items-center">
                <div className="flex flex-wrap gap-4">
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      className="peer sr-only"
                      name="Web Development"
                    />
                    <div className=" rounded-md flex items-center justify-center bg-white w-[100px] h-[50px]  p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                      <div className="">
                        <p className="text-[8px] text-center font-bold uppercase text-gray-500">
                          Web Development
                        </p>
                      </div>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      className="peer sr-only"
                      name="App Development"
                    />
                    <div className=" rounded-md flex items-center justify-center bg-white w-[100px] h-[50px] p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                      <div className="">
                        <p className="text-[8px] text-center font-bold uppercase text-gray-500">
                          App Development
                        </p>
                      </div>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      className="peer sr-only"
                      name="E-commerce"
                    />
                    <div className=" rounded-md flex items-center justify-center bg-white w-[100px] h-[50px] p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                      <div className="">
                        <p className="text-[8px] text-center font-bold uppercase text-gray-500">
                          E-commerce
                        </p>
                      </div>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      className="peer sr-only"
                      name="Digital Marketing"
                    />
                    <div className=" rounded-md flex items-center justify-center bg-white w-[100px] h-[50px] p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                      <div className="">
                        <p className="text-[8px] text-center font-bold uppercase text-gray-500">
                          Digital Marketing
                        </p>
                      </div>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      className="peer sr-only"
                      name="Cloud Software"
                    />
                    <div className=" rounded-md flex items-center justify-center bg-white w-[100px] h-[50px] p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                      <div className="">
                        <p className="text-[8px] text-center font-bold uppercase text-gray-500">
                          Cloud Software
                        </p>
                      </div>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      className="peer sr-only"
                      name="Customize Software"
                    />
                    <div className=" rounded-md flex items-center justify-center bg-white w-[100px] h-[50px] p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                      <div className="">
                        <p className="text-[8px] text-center font-bold uppercase text-gray-500">
                          Customize Software
                        </p>
                      </div>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      className="peer sr-only"
                      name="Other Inquiry"
                    />
                    <div className=" rounded-md flex justify-center items-center  bg-white w-[100px] h-[50px] p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                      <div className="">
                        <p className="text-[8px] text-center font-bold uppercase text-gray-500">
                          Other Inquiry
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder=""
                  name="Full Name"
                  className=" text-black p-3 rounded "
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  name="Email"
                  className="w-full p-3 rounded text-black "
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold">
                  Mobile No:
                </label>
                <input
                  id="email"
                  required
                  name="Mobile Number"
                  type="number"
                  className="w-full p-3 rounded text-black "
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-semibold">
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  rows="3"
                  name="Message"
                  className="w-full p-3 rounded text-black "
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 hover:border-green-300 text-sm font-bold tracking-wide uppercase rounded border"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
}

export default Contact;
