import Nike from '../assets/images/brown-nike.png'

interface props {
    Click: React.MouseEventHandler<HTMLDivElement>
}

const OverlayPage = ({ Click }: props) => {
  return (
    <>
    <div className="top-20 absolute h-full w-full z-10" onClick={Click}>
        <p className="uppercase font-extrabold text-white text-4xl pl-9 mt-35">nike<br />air max</p>
        <img src={Nike} alt="" className='w-[100vw] mt-[-15vh] ml-[22vw] rotate-320'/>
    </div>
    </>
  )
}

export default OverlayPage