
// import StarIcon from '@/assets/icons/star.svg';

export const HeroOrbit = (
  {
    children,
    size,
    rotation,
    orbitDuration,
    spinDuration,
  }:
    {
      children: React.ReactNode,
      size: number,
      rotation: number,
      spinDuration?: string;
      orbitDuration?: string,
    }) => {
  return (
    <div className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 '>
      <div className="animate-spin" style={{
        animationDuration: orbitDuration,
      }}>
        <div className='flex items-start justify-start' style={{
          height: `${size}px`,
          width: `${size}px`,
          transform: `rotate(${rotation}deg)`,
        }}>
          <div className="animate-spin" style={{
            animationDuration: spinDuration,
          }}>
            <div className=' inline-flex' style={{
              transform: `rotate(${rotation * -1}deg)`,
            }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}