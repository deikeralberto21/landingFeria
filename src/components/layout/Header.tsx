import type { FC } from 'react';
import Logo from '../../assets/icons/logo.svg?raw';
import Phone from '../../assets/icons/phone.svg?raw';
import Wave from '../../assets/icons/wave.svg?raw';

const Header: FC = () => {
    const nav = [
        {
            label: 'Contactanos',
            href: '/contact',
            icon: () => <div dangerouslySetInnerHTML={{__html: Phone}} className="w-4 h-4 lg:w-3.5 lg:h-3.5" />,
        },
    ];

    return (
        <header className="relative z-50">
                <nav 
                    className="fixed w-full  backdrop-blur-md text-white"
                >
                {/* Main header */}
                <div className="py-4 lg:py-5 ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                        {/* Logo */}
                        <a href="/" className="flex items-center hover:text-blue-400" aria-label="Home page">
                            <h1 className="font-sans text-lg font-bold text-appText">C-Med Days Badalona 2026</h1>
                        </a>

                        {/* Nav buttons */}
                        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                            {nav.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className={`flex items-center rounded-2xl px-3 py-2 sm:px-4 sm:py-2 border transition-all duration-300
                                        ${
                                            index === 0
                                                ? 'border-blue-400 bg-blue-400 text-blue-400 text-white'
                                                : 'bg-appText border-transparent text-white'
                                        }`}
                                >
                                    <span className="text-xs sm:text-sm font-medium mr-1.5 sm:mr-2">
                                        {item.label}
                                    </span>
                                    {item.icon()}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
