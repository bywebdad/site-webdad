import type { FC } from 'react';

const ArtDesignSystem: FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="flex space-x-2 mb-2">
        <div className="w-6 h-6 bg-brand-500 rounded" />
        <div className="w-6 h-6 bg-orange-300 rounded" />
        <div className="w-6 h-6 bg-orange-200 rounded" />
      </div>
      <div className="flex space-x-1 mb-2">
        <div className="w-16 h-4 bg-brand-500 rounded-md" />
        <div className="w-10 h-4 bg-brand-500/60 rounded-md" />
      </div>
      <div className="flex space-x-1">
        <div className="w-6 h-6 rounded border border-neutral-700 flex items-center justify-center">
          <div className="w-3 h-3 bg-brand-500/70 rounded-sm" />
        </div>
        <div className="w-6 h-6 rounded border border-neutral-700 flex items-center justify-center">
          <div className="w-3 h-1 bg-brand-500/70 rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default ArtDesignSystem;
