import type { FC } from 'react';

export default function Welcome () {

    return(
        <section 
            style={{
                'height':'70vh',
                'backgroundImage': 'url("img/spanabis.jpg")',
                'backgroundSize': 'cover',
                'backgroundPosition': 'center',
                'backgroundRepeat': 'no-repeat',
                'backgroundAttachment':'fixed'
            }} 
            className='p-10 relative'
        >
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-black/70'></div>
            <div className='relative z-10 h-full flex justify-start w-1/2 items-center'>
                <h1 className='font-sans font-extrabold text-white text-7xl'>C-Med Days Badalona 2026!</h1>
            </div>
        </section>
    )
}