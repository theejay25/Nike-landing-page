import Bg from '../assets/images/Bg.png'

const Background = () => {
  return (
    <>
    <div className="z-10 top-0 h-full w-full absolute">
        <img src={Bg} alt="" className='h-full w-full opacity-30' />
    </div>
    </>
  )
}

export default Background