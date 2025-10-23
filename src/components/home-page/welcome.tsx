import type { FC } from 'react';

export default function Welcome () {

    return(
        <section 
            style={{
                'height':'90vh',
                'backgroundImage': 'url("img/spanabis.jpg")',
                'backgroundSize': 'cover',
                'backgroundPosition': 'center',
                'backgroundRepeat': 'no-repeat'
            }} 
            className='p-10 relative'
        >
            <div className='absolute inset-0 bg-gradient-to-t from-green-500/50 to-indigo-500/50'></div>
            <div className='relative z-10 h-full flex justify-start w-1/2 items-center'>
                <h1 className='font-sans font-extrabold text-white text-8xl'>C-Med Days Badalona 2026</h1>
            </div>
        </section>
    )
}