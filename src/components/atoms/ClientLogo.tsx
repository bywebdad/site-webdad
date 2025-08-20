import type { FC, ImgHTMLAttributes } from 'react';

export type ClientLogoProps = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
  src: string;
  className?: string;
};

const ClientLogo: FC<ClientLogoProps> = ({ alt, src, className = '', ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={rest.width ?? 158}
      height={rest.height ?? 48}
      className={`max-h-12 w-full object-contain ${className} dark:brightness-0 dark:invert`}
      {...rest}
    />
  );
};

export default ClientLogo;
