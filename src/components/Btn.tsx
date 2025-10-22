import type { FC, PropsWithChildren } from 'react';
import ArrowIcon from '../assets/icons/arrow.svg?raw';

interface Props {
    className?: string;
    to?: string;
    theme?: 'accent' | 'pale' | 'dark' | 'accent-outline';
    hideArrow?: boolean;
    tag?: string;
    size?: 'sm' | 'regular';
    onClick?: () => void;
}

const Button: FC<PropsWithChildren<Props>> = ({
    className = '',
    to,
    theme = 'accent',
    hideArrow,
    size = 'regular',
    children,
    onClick,
}) => {
    // Clases principales del botón
    const buttonClasses = `
        group relative flex items-center text-sm leading-none font-medium tracking-[-0.41px]
        px-5 rounded-[32px] border transition-all duration-300 focus:outline-none
        hover:px-7 lg:px-7
        ${theme === 'accent' ? 'bg-appAccent text-white border-transparent' : ''}
        ${theme === 'pale' ? 'bg-appAccent/10 text-appAccent border-transparent' : ''}
        ${theme === 'dark' ? 'bg-appText text-white border-transparent' : ''}
        ${theme === 'accent-outline' ? 'border border-appAccent text-appAccent' : ''}
        ${size === 'sm' ? 'py-3 lg:py-4' : ''}
        ${size === 'regular' ? 'py-4 lg:py-5' : ''}
        ${className}
    `.replace(/\s+/g, ' ').trim();

    // Clases de la flecha
    const arrowClass = `
        w-0 h-3.5 opacity-0 ml-2 will-change-transform
        transition-all duration-300 group-hover:opacity-100 group-hover:w-3.5
    `.replace(/\s+/g, ' ').trim();

    return to ? (
        <a href={to} className={buttonClasses}>
            {children}
            {!hideArrow && (
                <div
                    dangerouslySetInnerHTML={{ __html: ArrowIcon }}
                    className={arrowClass}
                />
            )}
        </a>
    ) : (
        <button onClick={onClick} className={buttonClasses}>
            {children}
            {!hideArrow && (
                <div
                    dangerouslySetInnerHTML={{ __html: ArrowIcon }}
                    className={arrowClass}
                />
            )}
        </button>
    );
};

export default Button;
