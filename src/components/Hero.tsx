import Background from "../assets/images/hero-bg.jpg";

const Hero = () => {
  return (
    <div className="relative w-full">
      <div className="relative z-0 hidden md:flex w-full h-full">
        <img src={Background} />
      </div>

      <div className="md:absolute z-10 inset-0 flex justify-end items-center md:pr-20">
        <div
          className="md:w-[400px] w-full md:h-[300px] bg-primary md:rounded-2xl flex flex-col justify-center items-start gap-2 
        px-8 py-4 text-white shadow-1 md:px-4"
        >
          <div className="text-1xl font-semibold">New Arrival</div>

          <div className="text-3xl font-semibold">
            Discover Our New Collection
          </div>

          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <button
            className="w-[200px] h-[60px] bg-secondary border 
          text-white rounded-2xl font-semibold
          uppercase text-[16px] transition active:scale-110"
          >
            buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
