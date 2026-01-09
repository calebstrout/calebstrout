import { useState } from 'react';
import rocketImg from '../assets/vertical-rocket.png'; // your PNG path

export const LoadingScreen = ({ onComplete }) => {
  const [showSmoke, setShowSmoke] = useState(false);
  const [showFire, setShowFire] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center">
      {/* Rocket (with flames and smoke positioned relative to it) */}
      <div
        className="animate-rocket relative z-10"
        onAnimationStart={() => {
          setShowSmoke(true);
          setShowFire(true);
        }}
        onAnimationEnd={() => setTimeout(onComplete, 300)}
      >
        <img
          src={rocketImg}
          alt="Rocket"
          className="w-24 h-24 filter invert brightness-200 relative z-10"
        />

        {/* Flames directly under the rocket, almost touching */}
        {showFire && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 flex items-end space-x-1 z-0">
            <div className="w-6 h-10 bg-gradient-to-t from-red-700 to-orange-500 rounded-full blur-lg animate-fire" />
            <div className="w-4 h-8 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full blur animate-[fire_2s_ease-out_forwards_0.1s]" />
            <div className="w-7 h-12 bg-gradient-to-t from-red-600 to-orange-400 rounded-full blur-md animate-fire" />
          </div>
        )}

        {/* Smoke puffs directly beneath the flames so they appear attached */}
        {showSmoke && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 flex flex-col items-center space-y-1 z-0">
            <div className="w-12 h-12 bg-gray-500 rounded-full blur-lg smoke-puff animate-[smoke_4s_ease-out_forwards] delay-[0s]" />
            <div className="w-10 h-10 bg-gray-400 rounded-full blur-md smoke-puff animate-[smoke_4s_ease-out_forwards] delay-[0.2s]" />
            <div className="w-11 h-11 bg-gray-600 rounded-full blur-lg smoke-puff animate-[smoke_4s_ease-out_forwards] delay-[0.4s]" />
            <div className="w-9 h-9 bg-gray-500 rounded-full blur-md smoke-puff animate-[smoke_4s_ease-out_forwards] delay-[0.6s]" />
          </div>
        )}
      </div>
    </div>
  );
};
