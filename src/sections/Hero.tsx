import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg';
import { HeroOrbit } from '@/components/HeroOrbit';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';

export const HeroSection = () => {
  return (
    <div id="home" className='py-32 md:py-48 lg:py-60 relative z-0 overflow-hidden'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div className='absolute inset-0 -z-30 opacity-5' style={{ backgroundImage: `url(${grainImage.src})` }} />
        <div className='hero-ring' />
        <div className='hero-ring size-[820px]' />
        <div className='hero-ring size-[1020px]' />
        <div className='hero-ring size-[1220px]' />
        <HeroOrbit size={800} rotation={-45}>
          <StarIcon className="size-28 text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={100}>
          <StarIcon className="size-12 text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-15}>
          <SparkleIcon className="size-12 text-emerald-300/20 " />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={35}>
          <SparkleIcon className="size-5 text-emerald-300/20 " />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={90}>
          <SparkleIcon className="size-12 text-emerald-300/20 " />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={180}>
          <SparkleIcon className="size-10 text-emerald-300/20 " />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={150}>
          <SparkleIcon className="size-12 text-emerald-300/20 " />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={80}>
          <div className="size-3 rounded-full bg-emerald-300/10 " />
        </HeroOrbit>
        <HeroOrbit size={820} rotation={350}>
          <div className="size-5 rounded-full bg-emerald-300/10 " />
        </HeroOrbit>
      </div>
      <div className="container relative z-10">
        <div className='flex flex-col items-center'>
          <Image src={memojiImage} className='size-[100px]' alt='Profile' />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full'></div>
            <div className='text-sm font-medium'>Available for SDE Role</div>
          </div>
          <div className='max-w-lg mx-auto'>
            <h1 className='font-serif text-3xl md:text-5xl text-center mt-8'>Building Scalable Apps</h1>
            <p className='mt-4 text-center text-white/60 md:text-lg'>
              I specilise in backend development
            </p>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
            <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
              <span className='font-semibold'>Explore my work</span>
              <ArrowDown className="size-4" />
            </button>
            <button className='inline-flex items-center gap-2 border border-white/15 bg-white text-gray-900 h-12 px-6 rounded-xl'>
              <span>👋</span>
              <span className='font-semibold'>Let&apos;s connect</span>
            </button>
          </div>
        </div>
      </div>
    </div >
  );
};
