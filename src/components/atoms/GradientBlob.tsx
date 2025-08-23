import type { FC, HTMLAttributes } from 'react';

export type GradientBlobProps = {
  wrapperClassName?: string;
  innerClassName?: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Атом: декоративное «пятно»-градиент с произвольным позиционированием.
 * - Передавайте Tailwind-классы позиционирования через wrapperClassName.
 * - Можно переопределить стили внутреннего блока через innerClassName.
 */
const GradientBlob: FC<GradientBlobProps> = ({
  wrapperClassName = '',
  innerClassName = 'aspect-[1097/845] w-[68rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-[0.15]',
  ...rest
}) => {
  return (
    <div aria-hidden="true" className={wrapperClassName} {...rest}>
      <div
        className={innerClassName}
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
  );
};

export default GradientBlob;
