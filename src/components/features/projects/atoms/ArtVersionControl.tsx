import type { FC } from 'react';

const ArtVersionControl: FC = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-2">
      <div className="w-full h-3 bg-brand-500/20 rounded flex items-center">
        <div className="w-1/3 h-3 bg-brand-500/60 rounded-l" />
      </div>
      <div className="flex space-x-1">
        <div className="w-3 h-3 rounded-full bg-brand-500" />
        <div className="w-16 h-3 bg-brand-500/20 rounded" />
      </div>
      <div className="flex space-x-1">
        <div className="w-3 h-3 rounded-full bg-brand-500/60" />
        <div className="w-24 h-3 bg-brand-500/20 rounded" />
      </div>
      <div className="flex space-x-1">
        <div className="w-3 h-3 rounded-full bg-brand-500/40" />
        <div className="w-20 h-3 bg-brand-500/20 rounded" />
      </div>
    </div>
  );
};

export default ArtVersionControl;
