import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 to-yellow-300 bg-clip-text text-transparent leading-snug">
            Hello, I'm Caleb Strout
          </h1>

          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-md mx-auto px-2">
            I am currently a Junior in college majoring in Mechanical
            Engineering with a focus area in Aerospace Engineering at Vanderbilt
            University. My goal is to eventually use my experience and interests
            in Aerospace Design, Propulsion, and Testing to meaningfully
            contribute in the ever-chaning Aerospace industry!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#experience"
              className="bg-red-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Experience
            </a>
            <a
              href="#projects"
              className="bg-orange-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-orange-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              Contact Me
            </a>
            <a
              href="/Colin_Strout_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
