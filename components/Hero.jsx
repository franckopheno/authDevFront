import React from 'react'
import HeroHello from '../public/svg/entrain_de_travailler_hello.svg'
import Image from 'next/image'
import Container from './Container'
import { Fugaz_One } from 'next/font/google';
import Button from './design-system/Button';

const fugaz = Fugaz_One({
    subsets: ["latin"],
    weight: ["400"],
  });

export default function Hero() {
  return (
    <div>
        <section className='grid grid-cols-12'>
            <div className='md:col-span-5 xs:col-span-12'>
                <h1 className={'text-5xl md:text-left sm:text-center xs:text-center text-primary sm:text-6xl md:text-7xl  ' + fugaz.className }>
                    Faites de votre projet une reussite
                </h1>
                <p className='text-lg md:italic md:text-left sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[700px] '>
                {process.env.NEXT_PUBLIC_APP_NAME} est  un startup rassemblant plusieur talent africain afin de realiser tout type de projet local
                    ainsi de {' '}
                    <span className='font-semibold'>permettre à l'afrique d'emboiter le pas technologie</span>
                </p>
                <div className='flex gap-4'>
                    <Button className='bg-primary' children={'Obtenir un abonnement'} href='/'/>
                    <Button className='bg-info' children={'Voir Plus'} />
                </div>
            </div>
            <div className='md:col-span-6 md:flex xs:hidden '>
                <Image className='w-full h-auto' src={HeroHello} alt="Entrain de travailler" />
            </div>
        </section>
        
        </div>

        
    
    
  )
}
