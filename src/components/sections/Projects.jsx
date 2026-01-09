import {
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiLinux,
  SiGnubash,
  SiNumpy,
  SiJavascript,
  SiUnity,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { FaC } from 'react-icons/fa6';
import { RevealOnScroll } from '../RevealOnScroll';
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <a
              href="https://www.vadl.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">
                  🚀 Vanderbilt Aerospace Design Laboratory
                </h3>
                <p className="text-gray-300 mb-4">
                  Integrated sensors and real-time data collection for a soil
                  collection payload of a 4,500 ft apogee rocket as part of NASA
                  ULSI
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {[
                    { name: 'C', color: '#A8B9CC', icon: FaC },
                    { name: 'Python', color: '#3776AB', icon: SiPython },
                    { name: 'Linux', color: '#F4BC00', icon: SiLinux },
                  ].map(({ name, color, icon: Icon }) => (
                    <span
                      key={name}
                      className="flex items-center gap-2 py-1 px-3 rounded-full text-sm transition hover:shadow-[0_2px_8px_var(--shadow-color)]"
                      style={{
                        backgroundColor: `${color}20`,
                        color: color,
                        '--shadow-color': `${color}66`,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </a>
            <a
              href="https://github.com/vanderbiltrobotics"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">
                  ⚙️ Autonomous Lunar Robot
                </h3>
                <p className="text-gray-300 mb-4">
                  Leveraging SLAM algorithms to optimize image processing and
                  detection algorithms for an Autonomous Lunar Robot and Street
                  Obstacle Robot as part of Vanderbilt Robotics
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {[
                    { name: 'Python', color: '#3776AB', icon: SiPython },
                    { name: 'C++', color: '#00599C', icon: SiCplusplus },
                    { name: 'Bash', color: '#4EAA25', icon: SiGnubash },
                    { name: 'Numpy', color: '#03688C', icon: SiNumpy },
                    { name: 'Linux', color: '#F4BC00', icon: SiLinux },
                  ].map(({ name, color, icon: Icon }) => (
                    <span
                      key={name}
                      className="flex items-center gap-2 py-1 px-3 rounded-full text-sm transition hover:shadow-[0_2px_8px_var(--shadow-color)]"
                      style={{
                        backgroundColor: `${color}20`,
                        color: color,
                        '--shadow-color': `${color}66`,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </a>
            <a
              href="https://github.com/SPACE-at-Berkeley/SUITS-2023_2024"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">🥽 AR EVA Simulaion </h3>
                <p className="text-gray-300 mb-4">
                  Collaborated with students at UC Berekley to create an
                  Augmented Reality Extravehicular Activity Simulation, being
                  one of 10 teams selected. Including an interactive head
                  mounted display and hardware in the loop. Was one of 10 teams
                  to compete as part of the 2023-2024 NASA S.U.I.T.S Challenge
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {[
                    { name: 'C#', color: '#9179E4', icon: TbBrandCSharp },
                    {
                      name: 'JavaScript',
                      color: '#F0DB4F',
                      icon: SiJavascript,
                    },
                    { name: 'Unity', color: '#4a5870', icon: SiUnity },
                  ].map(({ name, color, icon: Icon }) => (
                    <span
                      key={name}
                      className="flex items-center gap-2 py-1 px-3 rounded-full text-sm transition hover:shadow-[0_2px_8px_var(--shadow-color)]"
                      style={{
                        backgroundColor: `${color}20`,
                        color: color,
                        '--shadow-color': `${color}66`,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </a>
            <a
              href="https://github.com/coderaceapp/coderace"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">
                  🏎️ Coderace.io (VandyHacks 2024)
                </h3>
                <p className="text-gray-300 mb-4">
                  Interactive website that makes practicing data structures and
                  algorithms style questions fun and engaging through
                  head-to-head competition
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {[
                    {
                      name: 'TypeScript',
                      color: '#3178C6',
                      icon: SiTypescript,
                    },
                    { name: 'Node', color: '#339933', icon: SiNodedotjs },
                    { name: 'Next.js', color: '#FFFFFF', icon: SiNextdotjs },
                    { name: 'GraphQL', color: '#e535ab', icon: SiGraphql },
                  ].map(({ name, color, icon: Icon }) => (
                    <span
                      key={name}
                      className="flex items-center gap-2 py-1 px-3 rounded-full text-sm transition hover:shadow-[0_2px_8px_var(--shadow-color)]"
                      style={{
                        backgroundColor: `${color}20`,
                        color: color,
                        '--shadow-color': `${color}66`,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </a>
            <a
              href="https://github.com/colinstrout/LFRE"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">
                  🚂 Rocket Engine Control System
                </h3>
                <p className="text-gray-300 mb-4">
                  Programmed the control and combustion algorithms of a 10-pound
                  thrust student-made liquid rocket fuel engine, including
                  pressure analytics
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {[
                    { name: 'Python', color: '#3776AB', icon: SiPython },
                    { name: 'C++', color: '#00599C', icon: SiCplusplus },
                  ].map(({ name, color, icon: Icon }) => (
                    <span
                      key={name}
                      className="flex items-center gap-2 py-1 px-3 rounded-full text-sm transition hover:shadow-[0_2px_8px_var(--shadow-color)]"
                      style={{
                        backgroundColor: `${color}20`,
                        color: color,
                        '--shadow-color': `${color}66`,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
