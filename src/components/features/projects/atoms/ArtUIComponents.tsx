import type { FC } from 'react';

const ArtUIComponents: FC = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-2">
      <div className="bg-brand-500/20 rounded-lg p-1 flex items-center justify-center">
        <div className="w-8 h-8 rounded-md bg-brand-500/40" />
      </div>
      <div className="bg-brand-500/10 rounded-lg p-1 flex items-center justify-center">
        <div className="w-12 h-3 rounded-md bg-brand-500/40" />
      </div>
      <div className="bg-brand-500/10 rounded-lg p-1 flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-brand-500/40" />
      </div>
      <div className="bg-brand-500/20 rounded-lg p-1 flex items-center justify-center">
        <div className="w-10 h-4 rounded-md bg-brand-500/40" />
      </div>
    </div>
  );
};

export default ArtUIComponents;
