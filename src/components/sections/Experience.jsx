import {
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiOpenjdk,
  SiGnubash,
  SiPostgresql,
  SiRust,
  SiReact,
  SiNodedotjs,
  SiSpringboot,
  SiFastapi,
  SiFlask,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiOracle,
  SiMongodb,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiJenkins,
  SiCircuitverse,
  SiMeta,
} from 'react-icons/si';
import { FaDatabase, FaC } from 'react-icons/fa6';
import {
  MatlabOriginal,
  PythonOriginal,
  CplusplusOriginal,
  ROriginal,
  ArduinoOriginal,
  AnsysOriginal,
  RaspberrypiOriginal,
  LinuxOriginal,
  GitOriginal,
} from 'devicons-react';

import solidworksImg from '../../assets/solidworks-svgrepo-com.svg';

import { RevealOnScroll } from '../RevealOnScroll';

export const Experience = () => {
  const programmingLanguages = [
    { name: 'Python', color: '#3776AB', icon: PythonOriginal },
    { name: 'C++', color: '#00599C', icon: CplusplusOriginal },
    { name: 'MATLAB', color: '#0076A8', icon: MatlabOriginal },
    { name: 'R', color: '#276DC3', icon: ROriginal },
  ];
  const tools = [
    { name: 'Ansys', color: '#FEDF00', icon: AnsysOriginal },
    { name: 'Arduino', color: '#00979D', icon: ArduinoOriginal },
    { name: 'Git', color: '#F1502F', icon: GitOriginal },
    { name: 'Linux', color: '#F4BC00', icon: LinuxOriginal },
    { name: 'Raspberry Pi', color: '#C51A4A', icon: RaspberrypiOriginal },
    {
      name: 'SolidWorks',
      color: '#FFFFFF',
      icon: (props) => <img src={solidworksImg} alt="SolidWorks" {...props} />,
    },
    {
      name: 'CATIA',
      color: '#00BFFF',
      icon: (props) => <img src={solidworksImg} alt="SolidWorks" {...props} />,
    },
  ];
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
            My Experience
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:border-white/30 hover:-translate-y-1 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 text-center">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🖥️ Languages</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {programmingLanguages.map(({ name, color, icon: Icon }) => {
                    console.log('Rendering', name, Icon);
                    return (
                      <span
                        key={name}
                        className="flex items-center gap-2 py-1 px-3 rounded-full text-sm hover:shadow-[0_2px_8px_var(--shadow-color)] transition"
                        style={{
                          backgroundColor: `${color}20`,
                          color: color,
                          '--shadow-color': `${color}66`,
                        }}
                      >
                        <Icon className="w-4 h-4" />
                        {name}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🛠️Tools</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tools.map(({ name, color, icon: Icon }) => {
                    console.log('Rendering', name, Icon);
                    return (
                      <span
                        key={name}
                        className="flex items-center gap-2 py-1 px-3 rounded-full text-sm hover:shadow-[0_2px_8px_var(--shadow-color)] transition"
                        style={{
                          backgroundColor: `${color}20`,
                          color: color,
                          '--shadow-color': `${color}66`,
                        }}
                      >
                        <Icon className="w-4 h-4" />
                        {name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-start">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-white/30 transition-all">
              <h3 className="text-xl font-bold mb-4">🛠️ Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.E in Mechanical Engineering</strong> Vanderbilt
                  University (2024-2027)
                </li>
                <li>
                  Relevant Coursework: Aerospace Propulsion, Heat Transfer,
                  Fluid Mechanics, Thermodynamics, Mechanical Design, Dynamics,
                  Statics, System Dynamics, Mechanics of Materials, Machine
                  Analysis and Design
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all space-y-4">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="p-2 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-white/30 transition-all">
                <div className="flex-items-center gap-2 space-y-4 text-gray-300 text-center">
                  <SiMeta className="w-8 h-8 text-[#0082fb] mx-auto translate-y-1" />
                  <h4 className="font-semibold">
                    Software Engineer Intern at Meta <br />
                    (May 2026 - August 2026)
                  </h4>
                </div>
                <p className="text-center text-gray-300">
                  Incoming Software Engineer Intern at Meta for Summer 2026
                </p>
              </div>
              <div className="p-2 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-white/30 transition-all">
                <div className="flex-items-center gap-2 space-y-4 text-gray-300 text-center">
                  <SiOracle className="w-8 h-8 text-[#F80000] mx-auto translate-y-1" />
                  <h4 className="font-semibold">
                    Software Engineer Intern at Oracle <br />
                    (May 2025 - August 2025)
                  </h4>
                </div>
                <p className="text-center text-gray-300">
                  Developed and Integrated AI Features within Oracle Hospitality
                  Products
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {[
                    { name: 'Python', color: '#3776AB', icon: SiPython },
                    { name: 'SQL', color: '#336791', icon: FaDatabase },
                    { name: 'OCI', color: '#F80000', icon: SiOracle },
                    { name: 'Docker', color: '#0db7ed', icon: SiDocker },
                    {
                      name: 'Kubernetes',
                      color: '#326CE5',
                      icon: SiKubernetes,
                    },
                    { name: 'Jenkins', color: '#D33834', icon: SiJenkins },
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
              <div className="p-2 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-white/30 transition-all">
                <div className="flex-items-center gap-2 space-y-4 text-gray-300 text-center">
                  <SiCircuitverse className="w-8 h-8 text-[#00FFFF] mx-auto translate-y-1" />
                  <h4 className="font-semibold">
                    Undergraduate Research Assistant at Vanderbilt VISE
                    <br />
                    (January 2025 - October 2025)
                  </h4>
                </div>
                <p className="text-center text-gray-300">
                  Developed Firmware for biomedical sensors with applications in
                  heart and respiratory monitoring
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {[{ name: 'Rust', color: '#D34516', icon: SiRust }].map(
                    ({ name, color, icon: Icon }) => (
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
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
