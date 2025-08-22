import type { FC } from 'react';

const ArtPrototyping: FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-24 bg-brand-500/20 rounded-lg border border-brand-500/40" />
        <div className="w-5 h-5 bg-brand-500 rounded-full absolute -right-2 -bottom-2 flex items-center justify-center">
          <div className="w-2 h-2 bg-black rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ArtPrototyping;
