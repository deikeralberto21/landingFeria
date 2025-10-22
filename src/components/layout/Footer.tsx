import React, { type FC } from 'react';

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    const socials = [
        // { label: 'Instagram', href: 'https://www.instagram.com/' },
        // { label: 'Facebook', href: 'https://www.facebook.com/' },
        // { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
        // { label: 'X', href: 'https://X.com/' },
    ];

    const nav = [
        // { label: 'Privacy and policy', href: '/legal' },
        // { label: 'Terms and Conditions', href: '/legal' },
        // { label: 'Contact us', href: '/contact' },
    ];

    return (
        <footer className="bg-black text-white">
            {/* Padding responsivo: px-4 sm:px-6 lg:px-8, py responsive */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
                {/* Social links */}
                <div className="flex flex-wrap justify-center gap-6 pb-5 border-b border-[#302E45] mb-5 lg:gap-8 lg:mb-6">
                    {socials.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm leading-none font-PlayfairDisplay font-medium tracking-[-0.41px] text-appGray-200 transition-colors duration-300 hover:text-white lg:text-base lg:leading-none"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Main footer nav */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
                    {/* Powered by */}
                    {/* <a
                        href="https://thebcms.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center lg:justify-start"
                    >
                        <div className="text-sm leading-none font-medium tracking-[-0.41px] text-[#B2AFCC] mr-2 lg:text-base lg:leading-none lg:mr-3">
                            Powered by
                        </div>
                        <img
                            src="/logo.png"
                            alt="BCMS Logo"
                            className="w-auto h-5 lg:h-6"
                        />
                    </a> */}

                    {/* Nav links */}
                    <nav className="flex flex-wrap items-center justify-center gap-2 lg:gap-4">
                        {nav.map((link, index) => (
                            <React.Fragment key={index}>
                                <a
                                    href={link.href}
                                    className="text-xs leading-none font-medium tracking-[-0.41px] text-white hover:underline lg:text-sm lg:leading-none"
                                >
                                    {link.label}
                                </a>
                                {index !== nav.length - 1 && (
                                    <div className="w-1 h-1 rounded-full bg-appGray-100" />
                                )}
                            </React.Fragment>
                        ))}
                    </nav>

                    {/* Copyright */}
                    <div className="text-xs leading-none font-medium tracking-[-0.41px] text-center text-[#83808C] lg:text-base lg:text-left lg:leading-none">
                        {/* &copy; {currentYear} BCMS. All rights reserved */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
