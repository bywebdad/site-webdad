import type { FC } from 'react';

const ArtCollaboration: FC = () => {
  return (
    <div className="w-full h-full grid grid-cols-3 gap-2">
      <div className="col-span-2 bg-brand-500/10 rounded p-2">
        <div className="w-1/2 h-2 bg-brand-500/40 rounded mb-2" />
        <div className="w-full h-1 bg-brand-500/20 rounded mb-1" />
        <div className="w-full h-1 bg-brand-500/20 rounded mb-1" />
        <div className="w-3/4 h-1 bg-brand-500/20 rounded" />
        <div className="flex mt-2">
          <div className="w-5 h-5 rounded-full bg-orange-300 -mr-1 border border-neutral-900" />
          <div className="w-5 h-5 rounded-full bg-brand-500 -mr-1 border border-neutral-900" />
          <div className="w-5 h-5 rounded-full bg-orange-200 border border-neutral-900" />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex-1 bg-brand-500/20 rounded p-1">
          <div className="w-full h-1 bg-brand-500/40 rounded mb-1" />
          <div className="w-2/3 h-1 bg-brand-500/40 rounded" />
        </div>
        <div className="flex-1 bg-brand-500/10 rounded p-1">
          <div className="w-full h-1 bg-brand-500/30 rounded mb-1" />
          <div className="w-1/2 h-1 bg-brand-500/30 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ArtCollaboration;
