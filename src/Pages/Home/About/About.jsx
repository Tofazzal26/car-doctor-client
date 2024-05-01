import about from "../../../../public/assets/images/about_us/person.jpg";
import parts from "../../../../public/assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="my-4 lg:my-[100px]">
      <div className="hero">
        <div className="hero-content flex-col gap-6 lg:gap-[120px] relative lg:flex-row">
          <div className="">
            <img
              src={about}
              className="rounded-lg h-[200px] lg:h-[500px] lg:w-[500px] shadow-2xl"
            />
            <img
              src={parts}
              alt=""
              className="lg:h-[250px] h-[200px] absolute hidden lg:block lg:top-[320px] border-[10px] rounded-md border-white lg:left-[200px]"
            />
          </div>
          <div>
            <p className="lg:text-[20px] font-bold text-[#FF3811]">About Us</p>
            <h1 className="lg:text-5xl text-xl font-bold lg:w-[370px] lg:leading-[60px]">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6 lg:w-[490px] text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="lg:w-[490px] text-[#737373] mb-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.{" "}
            </p>
            <button className="text-white bg-[#FF3811] font-semibold lg:px-6 px-4 py-2 lg:text-[18px] lg:py-3">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
