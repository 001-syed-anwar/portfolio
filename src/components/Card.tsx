import grainImage from '@/assets/images/grain.jpg';
import { twMerge } from 'tailwind-merge';

export const Card = ({className, children}:{
    className?:string;
    children:React.ReactNode;
}) => {
    return (
        <div
            className={twMerge(`flex flex-col lg:flex-row bg-gray-800 rounded-3xl relative z-0 shadow-lg
              after:-z-10 after:content-[''] after:absolute after:inset-0
              after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl
              p-6`,className)}
        >
            <div className='absolute inset-0 -z-30 opacity-5' style={{ backgroundImage: `url(${grainImage.src})` }} />
            {children}
        </div>
    )
}