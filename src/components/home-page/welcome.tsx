import type { FC } from 'react';

export default function Welcome () {

    return(
        <section style={{'height':'90vh'}} className='p-10 bg-linear-to-t from-sky-500 to-indigo-500'>
            <div className='h-full flex justify-start w-1/2 items-center'>
                <h1 className='font-sans font-extrabold text-white text-7xl'>C-Med Days Badalona 2026!</h1>
            </div>
        </section>
    )
}