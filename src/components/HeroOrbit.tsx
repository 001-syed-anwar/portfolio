
// import StarIcon from '@/assets/icons/star.svg';

export const HeroOrbit = (
  {
    children,
    size,
    rotation
  }:
    {
      children: React.ReactNode,
      size: number,
      rotation: number
    }) => {
  //   animate-spin [animation-duration:30s]
  return (
    <div className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2'>
      <div className='' style={{
        height: `${size}px`,
        width: `${size}px`,
        transform: `rotate(${rotation}deg)`
      }}>
        <div className=' inline-flex' style={{
          transform: `rotate(${rotation * -1}deg)`
        }}>
          {children}
        </div>
      </div>
    </div>
  )
}