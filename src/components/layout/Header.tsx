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

    const navPages = [
        
        // {
        //     label: 'Inicio',
        //     href: '/',
        // },
        // {
        //     label: 'Actividades',
        //     href: '/activities',
        // },
    ];

    return (
        <header className="relative z-50">
                <nav 
                    className="fixed w-full  backdrop-blur-md text-green-400"
                >
                {/* Main header */}
                <div className="py-4 lg:py-5 ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                        {/* Logo */}
                        <a href="/" className="flex items-center hover:text-blue-400" aria-label="Home page">
                            <h1 className="font-sans text-lg font-bold text-appText">C-Med Days Badalona 2026</h1>
                        </a>
                        <div className=' w-1/2 flex justify-center items-center gap-5'>
                            {navPages.map((item, index)=>(
                                <a className='text-black hover:text-white transition border-b-green-500  border-b-3' href={item.href} key={index}>
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        {/* Nav buttons */}
                        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                            {nav.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className={`flex items-center rounded-2xl px-3 py-2 sm:px-4 sm:py-2 border transition-all text-black duration-300 bg-green-400 hover:bg-green-500`}>
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
