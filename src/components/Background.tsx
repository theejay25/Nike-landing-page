import Bg from '../assets/images/Bg.png'

interface props {
    Click: React.MouseEventHandler<HTMLDivElement>
}
const Background = ({Click}: props) => {
  return (
    <>
    <div className="z-0 top-0 h-full w-full absolute" onClick={Click}>
        <img src={Bg} alt="" className='h-full w-full opacity-30' />
    </div>
    </>
  )
}

export default Background