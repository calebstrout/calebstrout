import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="z-10 px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="md:pr-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-yellow-300 bg-clip-text text-transparent">
              Hello, I'm Caleb Strout
            </h1>

            <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-md md:max-w-none">
              I am currently a Junior in college majoring in Mechanical
              Engineering with a focus area in Aerospace Engineering at
              Vanderbilt University. My goal is to eventually use my experience
              and interests in Aerospace Design, Propulsion, and Testing to
              meaningfully contribute in the ever-changing Aerospace industry!
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#experience"
                className="bg-red-600 text-white py-3 px-6 min-w-[160px] rounded font-medium text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                View Experience
              </a>
              <a
                href="#projects"
                className="bg-orange-600 text-white py-3 px-6 min-w-[160px] rounded font-medium text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-orange-500 text-white py-3 px-6 min-w-[160px] rounded font-medium text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                Contact Me
              </a>
              <a
                href="/Caleb_Strout_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-white py-3 px-6 min-w-[160px] rounded font-medium text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center md:order-2">
            <img
              src="/portrait.png"
              alt="Caleb Strout portrait"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
