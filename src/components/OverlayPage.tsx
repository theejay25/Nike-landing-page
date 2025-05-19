import Nike from '../assets/images/brown-nike.png'

interface props {
    Click: React.MouseEventHandler<HTMLDivElement>
}

const OverlayPage = ({ Click }: props) => {
  return (
    <>
    <div className="top-20 absolute h-full w-full z-10 " onClick={Click}>
        <p className="title-text text-4xl pl-9 mt-35 lg:text-9xl">nike<br />air max</p>
        <img src={Nike} alt="" className='shoe-image'/>
        <p className="text-white w-[250px] pl-9 mt-[-25%] lg:mt-[-10%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum natus corporis porro.
        </p>
    </div>
    </>
  )
}

export default OverlayPage