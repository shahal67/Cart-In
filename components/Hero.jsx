'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'

const Hero = () => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    return (
        <div className='mx-6'>
            <div className='flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10'>
                <div className='relative flex-1 flex flex-col bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 rounded-3xl xl:min-h-100 group shadow-[0_20px_50px_-12px_rgba(255,51,102,0.15)] overflow-hidden'>
                    <div className='p-5 sm:p-16 relative z-10'>
                        <div className='inline-flex items-center gap-3 bg-white/60 backdrop-blur-md text-brand-primary pr-4 p-1 rounded-full text-xs sm:text-sm font-bold shadow-sm border border-white/50'>
                            <span className='bg-brand-primary px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs shadow-sm'>NEWS</span> Free Shipping on Orders Above $50! <ChevronRightIcon className='group-hover:ml-2 transition-all' size={16} />
                        </div>
                        <h2 className='text-4xl sm:text-6xl leading-[1.1] my-5 font-extrabold bg-gradient-to-r from-brand-primary via-purple-500 to-brand-secondary bg-clip-text text-transparent max-w-xs sm:max-w-md drop-shadow-sm'>
                            Gadgets you'll love. Prices you'll trust.
                        </h2>
                        <div className='text-slate-700 text-sm font-bold mt-4 sm:mt-8'>
                            <p className='text-brand-secondary'>Starts from</p>
                            <p className='text-4xl font-extrabold'>{currency}4.90</p>
                        </div>
                        <button className='btn-vibrant mt-6 sm:mt-10 px-8 sm:px-14 py-3 sm:py-4 text-base'>
                            LEARN MORE
                        </button>
                    </div>
                    <Image className='sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm group-hover:scale-105 transition-transform duration-500 z-0' src={assets.hero_model_img} alt="" />
                </div>
                <div className='flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-600'>
                    <div className='flex-1 flex items-center justify-between w-full bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-6 px-8 group shadow-[0_10px_30px_-10px_rgba(255,173,81,0.3)] hover:-translate-y-1 transition-all duration-300'>
                        <div>
                            <p className='text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent max-w-40 drop-shadow-sm'>Best products</p>
                            <p className='flex items-center gap-1 mt-4 font-bold text-orange-600 group-hover:text-red-500 transition-colors'>View more <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} /> </p>
                        </div>
                        <Image className='w-35 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300' src={assets.hero_product_img1} alt="" />
                    </div>
                    <div className='flex-1 flex items-center justify-between w-full bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl p-6 px-8 group shadow-[0_10px_30px_-10px_rgba(120,178,255,0.3)] hover:-translate-y-1 transition-all duration-300'>
                        <div>
                            <p className='text-3xl font-extrabold bg-gradient-to-r from-brand-secondary to-blue-500 bg-clip-text text-transparent max-w-40 drop-shadow-sm'>20% discounts</p>
                            <p className='flex items-center gap-1 mt-4 font-bold text-brand-secondary group-hover:text-blue-500 transition-colors'>View more <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} /> </p>
                        </div>
                        <Image className='w-35 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300' src={assets.hero_product_img2} alt="" />
                    </div>
                </div>
            </div>
            <CategoriesMarquee />
        </div>

    )
}

export default Hero