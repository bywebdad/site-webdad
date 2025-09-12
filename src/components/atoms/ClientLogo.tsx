import Image from 'next/image';
import type { FC } from 'react';

export type ClientLogoProps = {
  alt: string;
  src: string;
  className?: string;
  width?: number;
  height?: number;
};

const ClientLogo: FC<ClientLogoProps> = ({ 
  alt, 
  src, 
  className = '', 
  width = 158, 
  height = 48 
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`max-h-12 w-full object-contain ${className} dark:brightness-0 dark:invert`}
      style={{ height: "auto" }}
      sizes="(min-width: 1024px) 158px, (min-width: 640px) 120px, 100px"
      priority={false}
    />
  );
};

export default ClientLogo;
