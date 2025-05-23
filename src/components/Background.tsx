import Bg from '../assets/images/Bg.png'

interface props {
    Click: React.MouseEventHandler<HTMLDivElement>
}
const Background = ({Click}: props) => {
  return (
    <>
    <div className="z-0 top-0 h-full w-full absolute flex justify-center items-center" onClick={Click}>
        <img src={Bg} alt="" className='h-full w-full opacity-30 xl:h-[50%] xl:w-[20%] m-auto' />
    </div>
    </>
  )
}

export default Background