import React from 'react';
import { SiGnubash } from 'react-icons/si';
import solidworksImg from '../assets/solidworks.svg';
import {
  PythonOriginal,
  COriginal,
  TypescriptOriginal,
  CplusplusOriginal,
  ReactOriginal,
  NodejsOriginal,
  NumpyOriginal,
  LinuxOriginal,
  UnityOriginal,
  CsharpOriginal,
  GraphqlPlain,
  NextjsOriginal,
  JavascriptOriginal,
  MatlabOriginal,
  AnsysOriginal,
  RaspberrypiOriginal,
} from 'devicons-react';

export const projects = [
  {
    id: 1,
    slug: 'apogee-control-system',
    title: 'Apogee Control System (ACS)',
    description:
      'Developed an air brake like autonomous system to control apogee of high-altitude rockets as part of Summer Internship at VADL',
    image: '/deploy.gif',
    gallery: [
      {
        src: '/acs.png',
        caption:
          'ACS CAD with cross section of gear deployment system for fin actuation',
      },
      { src: '/acs-logic.png', caption: 'ACS Logic Block Diagram' },
      {
        src: '/summer-flight.jpg',
        caption:
          'Summer Flight Field test with mentor and team to test ACS performance',
      },
      {
        src: '/windtunnel.png',
        caption:
          'Wind tunnel test bench for aerodynamic performance analysis of ACS fins when deployed',
      },
      {
        src: '/acs-cfd.png',
        caption: 'CFD analysis of rocket with ACS fins deployed',
      },
      {
        src: '/sim.png',
        caption:
          'Example simulation projection of apogee during flight, including point where ACS is deployed',
      },
      { src: '/deploy.gif', caption: 'Airbrake deployment' },
    ],
    sections: [
      {
        type: 'paragraph',
        text: 'In the Summer of 2025, I was tasked on a team of 4 engineers to design, manufacture and test a system that has the ability to control a rocket ascent to a specified goal apogee to account for variances in weather and motor dynamics. The ACS consists of four NACA 0012 airfoil fins that are rotated from a servo motor in a manner to only induce drag on the rocket. A Raspberry Pi 4 connected to a VectorNav IMU, collected altitude and velocity data in real time to input into a RK4 apogee prediction model. Once 50 data points (logged at ~100 Hz) resulted in predicted apogee values greater than the goal apogee, the fins are deployed to a desired angle. The system was tested on four 4" diameter rockets that were all 68" long with nominal apogees between 850 to 965 ft depending on motor hardware used. The goal apogee for the summer was 750 ft which all flights came within 5% of. Wind tunnel and CFD testing verified the induced drag of the fins in reference to the nose to be 5 for 90° deployment and 3.5 for 45° deployment. ',
      },
    ],
    tags: ['Python', 'MATLAB', 'Linux', 'ANSYS', 'Solidworks', 'Raspberry Pi'],
    infoUrl: 'https://www.vadl.org/',
    demos: [
      {
        name: 'See ACS in Action',
        url: 'https://www.youtube.com/watch?v=x1K_hM7DuNE',
      },
    ],
    githubUrl: 'https://github.com/VADL-24-45/Apogee-Control/tree/main',
  },
  {
    id: 2,
    slug: 'vadl',
    title: 'NASA USLI 2025-2026',
    description:
      'Competing in the 2025-2026 NASA University Student Launch Initiative as a Vehicle and Simulations Engineer',
    image: '/Subscale.gif',
    sections: [
      {
        type: 'subtitle',
        text: 'Competition & Vehicle Overview',
      },
      {
        type: 'gallery',
        items: [
          {
            src: '/launch.png',
            caption: '',
          },
          {
            src: '/mission.png',
            caption: 'Overview of overall mission for launch',
          },
          { src: '/vehicle.png', caption: 'Launch Vehicle Overview' },
        ],
        autoPlay: true,
        autoPlayInterval: 6000,
      },
      {
        type: 'paragraph',
        text: 'The Vanderbilt Aerospace Design Laboratory (VADL) 2025–2026 NASA Student Launch mission showcases a fully integrated rocket and payload system designed to emulate key elements of extraterrestrial surface exploration. The vehicle ascends to a target apogee of 4,200 ft AGL, with an actively controlled ascent enabled by a deployable Apogee Control System (ACS) that deploys at 3,500 ft AGL to regulate drag and minimize apogee dispersion. Following ACS-regulated ascent, the rocket transitions into a dual-deploy recovery sequence, with the main parachute deploying at 550 ft AGL to ensure a controlled and low-energy descent. At 300 ft AGL, the payload autonomously extracts from the vehicle and continues to touchdown, where it deploys and executes a soil collection and in-situ testing operation. From liftoff through payload landing, the mission spans approximately two to three minutes, culminating in an autonomous surface operation that demonstrates VADL’s capability to integrate precision flight control, robust recovery systems, and post-landing payload autonomy within a single end-to-end mission.',
      },
      {
        type: 'subtitle',
        text: 'FEA, CFD, and Simulations',
      },
      {
        type: 'gallery',
        items: [
          {
            src: '/fea-vehicle.png',
            caption:
              'FEA of Vehicle Components using static study in SOLIDWORKS',
          },
          {
            src: '/vehicle-cfd.png',
            caption:
              'Mesh Analysis and Air Flow Analysis of Vehicle with ACS using ANSYS Fluent',
          },
          {
            src: '/rocket-py.png',
            caption:
              'Flight Trajectory Analysis with varying cant and wind speeds using RocketPy',
          },
          {
            src: '/monte-carlo.png',
            caption:
              'Monte Carlo Analysis of Vehicle Trajectory with varying Ballast, Wind Speed, ACS deployment altitude using MATLAB',
          },
          {
            src: '/vehicle-sim.png',
            caption:
              'Analysis of Center of Pressure, Center of Gravity, and Static Stability Margin throughout flight using various simualtion tools for iterative comparison and validation',
          },
        ],
        autoPlay: true,
        autoPlayInterval: 10000,
      },
      {
        type: 'paragraph',
        text: 'I conducted aerodynamic, flight, and structural analysis for the full-scale launch vehicle using ANSYS Fluent, MATLAB, SolidWorks, and ANSYS Mechanical. CFD analysis characterized drag across the flight Mach regime, center-of-pressure location for stability, and flow separation around fins and transitions. I also developed a custom MATLAB flight simulator to rapidly iterate on vehicle design, modeling thrust, atmospheric conditions, aerodynamic forces, and parachute dynamics, with results cross-validated against OpenRocket, RockSim, RocketPy, and RASAero II to predict apogee, drift, stability margins, and landing performance.',
      },
      {
        type: 'paragraph',
        text: 'Structural loads were evaluated under worst-case conditions to ensure positive margins of safety and guide mass-efficient design changes. This analysis was supported by full-scale physical testing, including tensile and compressive tests to validate FEA predictions and hardware-in-the-loop testing to ensure convergence with flight simulations. I additionally served as subscale lead, defining test objectives, leading vehicle construction, and analyzing subscale flights to de-risk and inform the full-scale mission.',
      },
    ],
    tags: ['C++', 'Python', 'MATLAB', 'ANSYS', 'Solidworks', 'Linux'],
    infoUrl: 'https://www.vadl.org/',
    demos: [
      {
        name: 'Subscale Flight Test',
        url: 'https://www.youtube.com/watch?v=PwDictpSYkA',
      },
      { name: 'Preliminary Design Review', url: '/VADL 25-26 PDR.pdf' },
    ],
    demoName: 'Subscale Flight Test',
    demoUrl: 'https://www.youtube.com/watch?v=PwDictpSYkA',
    githubUrl: 'https://github.com/VADL-25-26',
  },
  {
    id: 3,
    slug: 'lunabotics',
    title: 'Autonomous Lunar Robot',
    description:
      'Assisted in the mechanical design and manufacturing the bucket systems for an autonomous lunar excavator robot',
    image: '/Rover GIF.gif',
    gallery: [
      {
        src: '/bucketchain.png',
        caption: 'Prototype of the bucket chain linkage for excavation system',
      },
      {
        src: '/chamber.JPG',
        caption:
          'Prototype of open chamber excavation system to collect lunar dust and transport to seperate collection bucket using linear actuators',
      },
      {
        src: '/robot-cad.png',
        caption:
          'Prototype of lunar robot with complete model of the excavation and drivetrain systems',
      },
      {
        src: '/nasabot.png',
        caption: 'Final functioning robot with bucket system',
      },
    ],
    sections: [
      {
        type: 'paragraph',
        text: 'I am currently contributing to the development of an Autonomous Lunar Robot, focusing on mechanical design and drivetrain development to support autonomous excavation and material transport operations. Using SOLIDWORKS, I designed and machined a custom U-channel and tension belt retainer to improve the robot’s electromechanical reliability during digging operations in simulated lunar regolith. In parallel, I helped provision an enhanced drivetrain system to support future full autonomy, improving robustness and performance for sustained robotic operation in extraterrestrial environments.',
      },
    ],
    tags: ['Solidworks'],
    infoUrl: 'https://www.instagram.com/vandyrobotics/',
    demoUrl: '#',
    githubUrl: '#',
  },
];

export const tagMeta = {
  TypeScript: { color: '#3178C6', icon: TypescriptOriginal },
  'Next.js': { color: '#FFFFFF', icon: NextjsOriginal },
  'Node.js': { color: '#339933', icon: NodejsOriginal },
  GraphQL: { color: '#e535ab', icon: GraphqlPlain },
  Python: { color: '#3776AB', icon: PythonOriginal },
  'C++': { color: '#00599C', icon: CplusplusOriginal },
  Linux: { color: '#F4BC00', icon: LinuxOriginal },
  Bash: { color: '#4EAA25', icon: SiGnubash },
  Numpy: { color: '#03688C', icon: NumpyOriginal },
  JavaScript: { color: '#F0DB4F', icon: JavascriptOriginal },
  Unity: { color: '#4a5870', icon: UnityOriginal },
  'C#': { color: '#9179E4', icon: CsharpOriginal },
  C: { color: '#A8B9CC', icon: COriginal },
  'D3.js': { color: '#f34f2a' },
  React: { color: '#61DAFB', icon: ReactOriginal },
  MATLAB: { color: '#0076A8', icon: MatlabOriginal },
  ANSYS: { color: '#FEDF00', icon: AnsysOriginal },
  'Raspberry Pi': { color: '#C51A4A', icon: RaspberrypiOriginal },
  Solidworks: {
    color: '#FF0000',
    icon: (props) =>
      React.createElement('img', {
        src: solidworksImg,
        alt: 'SolidWorks',
        ...props,
      }),
  },
};

export default projects;
