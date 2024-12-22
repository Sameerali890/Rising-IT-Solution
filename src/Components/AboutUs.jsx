import DevelopmentPhase from "./DevelopmentPhase";
import Footer from "./Footer";

function AboutUs() {
  return (
    <div>
      <div className="grid place-content-center place-items-center   mb-5">
        <h1 className="lg:text-6xl text-4xl font-bold p-5">ABOUT US</h1>
        <div className="card max-w-[90dvw] max-h-[85vh]">
          <h2 className="lg:text-3xl text-[11px]">
            At <span className="font-bold">Rising IT Solutions</span>, we are dedicated to delivering innovative and
            high-quality IT services that empower businesses to succeed in the
            digital age. Established with a vision to provide cutting-edge
            technological solutions, we specialize in a wide array of services,
            including Website Development, Android App Development, E-commerce
            Solutions, Digital Marketing, and much more. Our team of experienced
            professionals works closely with clients to understand their unique
            needs and create tailored solutions that drive growth, streamline
            operations, and enhance user experiences. We combine creativity with
            technical expertise to build user-friendly websites, powerful mobile
            applications, and digital marketing strategies that help businesses
            thrive in an increasingly competitive market.
          </h2>
          <ol className="z-20 text-[10px]  h-[100%] lg:text-[20px] mt-5 space-y-4">
            <strong className="text-2xl lg:text-[35px]">
              Our Services:
            </strong>
            <li>
              <h3 className="font-bold">Website Development:</h3>
              <p>
              Custom websites that are responsive, scalable, and designed to engage users while meeting your business objectives.
              </p>
            </li>
            <li>
              <h3 className="font-bold">Android App Development:</h3>
              <p>
              Innovative mobile solutions that provide seamless user experiences across Android devices, helping businesses connect with customers on the go.
              </p>
            </li>
            <li>
              <h3 className="font-bold">E-commerce Solutions:</h3>
              <p>
              End-to-end e-commerce platforms that are secure, scalable, and optimized for growth, enabling businesses to sell products and services online with ease.
              </p>
            </li>
            <li>
              <h3 className="font-bold">Digital Marketing: </h3>
              <p>
              Data-driven strategies to enhance your online presence, increase brand awareness, and drive traffic through SEO, social media marketing, paid campaigns, and more.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <DevelopmentPhase />
        <Footer />
    </div>
  );
}

export default AboutUs;
