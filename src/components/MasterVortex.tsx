
import React from 'react';

const MasterVortex = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-40 w-40">
        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-4 border-battle-primary/30 animate-rotate-slow"></div>
        <div className="absolute top-[10%] left-[10%] right-[10%] bottom-[10%] rounded-full border-4 border-battle-accent/30 animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute top-[20%] left-[20%] right-[20%] bottom-[20%] rounded-full bg-gradient-radial from-battle-primary/50 to-battle-dark/80 animate-pulse-glow flex items-center justify-center">
          <div className="text-4xl font-bold text-white">V</div>
        </div>
        <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-battle-accent animate-pulse-glow"></div>
        <div className="absolute -bottom-1 -left-3 h-4 w-4 rounded-full bg-battle-primary animate-pulse-glow"></div>
      </div>
      <h3 className="text-xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-battle-primary to-battle-accent">Master Vortex</h3>
      <p className="text-sm text-center text-foreground/70 mt-2 max-w-xs">
        Your AI judge for prompt battles. Impress me with your creativity and precision!
      </p>
    </div>
  );
};

export default MasterVortex;
