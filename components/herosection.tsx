import { Link } from "@heroui/link";
function HeroSection() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat grid place-items-center"
      style={{
        backgroundImage: "url('/Stairway to the Moon.jpeg')",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0, 0, 0, 0.70)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-center items-center gap-6 text-white">
          <h1 className="text-5xl font-bold text-center text-custom-light-sky-blue ">
            Empowering Your Business Through Innovative Solutions
            <span className="text-custom-reddish-pink">.</span>
          </h1>
          <p className="text-xl text-center text-gray-200">
            Transform your IT infrastructure with expert guidance. We specialize
            in process automation, digital tools, and technology optimization
            that drive real business growth.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              isExternal
              className="px-6 py-3 bg-custom-dark-blue text-white hover:bg-custom-reddish-pink rounded-none  hover:shadow-[4px_4px_0px_0px_#4392AC] transition-all"
              href="https://cal.com/monkgogi-moshaga-9bp2as"
            >
              Schedule a Call
            </Link>
            <Link
              className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-custom-dark-blue transition-colors"
              href="#services"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
