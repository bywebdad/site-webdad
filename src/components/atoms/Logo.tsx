import React from 'react';

type LogoProps = {
  className?: string;
  alt?: string;
  label?: string;
  showLabel?: boolean;
  srcLight?: string;
  srcDark?: string;
  width?: number;
  height?: number;
};

const Logo: React.FC<LogoProps> = ({
  className = '',
  alt = 'Логотип',
  label = 'WEBDAD',
  showLabel = true,
  srcLight = '/brand/Logo.png',
  srcDark,
  width = 32,
  height = 32,
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {srcDark ? (
        <>
          <img
            src={srcLight}
            alt={alt}
            width={width}
            height={height}
            className="h-8 w-auto block dark:hidden"
          />
          <img
            src={srcDark}
            alt={alt}
            width={width}
            height={height}
            className="h-8 w-auto hidden dark:block"
          />
        </>
      ) : (
        <img
          src={srcLight}
          alt={alt}
          width={width}
          height={height}
          className="h-8 w-auto"
        />
      )}
      {showLabel && (
        <span className="font-semibold text-slate-900 dark:text-white">{label}</span>
      )}
    </div>
  );
};

export default Logo;
