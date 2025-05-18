import { useEffect, useState } from "react";
import { CiSearch, CiShoppingCart, CiMenuFries } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";
import logo from './assets/images/favicon.png'
import Background from "./components/Background";
import OverlayPage from "./components/OverlayPage";

function App() {

  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)
  const [clicked, setClicked] = useState(false)

  const links = ['catalogues', 'overview', 'contacts']

  useEffect(() => {
    setOpen(true)
  })

  return (
    <>
      <div className={`wrapper-div bg-[#1a1a1a] text-white h-0 w-0 ${open ? 'h-full w-full rounded-br-0' : 'rounded-br-[100%]'}`}  onClick={() => setClicked(false)}>
        <div className="w-full absolute h-[7vh] flex flex-row items-center px-3 justify-between">
          <img src={logo} alt="" width='70px' />

          <ul className={`ul-div  mt-[10%] ${clicked ? 'opacity-100  mt-[11%] ' : 'opacity-0'}`}>
              {links.map(link => (
                <li key={link} className="list mt-3">{link}</li>
              ))}
          </ul>
          
          <div className="h-full w-[35vw] flex flex-row justify-between items-center pr-2">
            <CiSearch className="h-[7vh] w-[7vw] text-white cursor-pointer"/>
            <CiShoppingCart className="h-[7vh] w-[7vw] text-white cursor-pointer" />
            <div className="z-100" onClick={(e) => {
              e.stopPropagation()
              setClicked(!clicked)
              }}>
              {( clicked ?
               (<RiCloseLargeFill className="h-[7vh] w-[7vw] text-white cursor-pointer" />) :
               (<CiMenuFries className="h-[7vh] w-[7vw] text-white cursor-pointer" />) 
              )}
            </div>
          <div className={`cart-numbers ${open ? 'bg-red-500' : 'bg-white'}`}>
              {count}
          </div>
          </div>
        </div>

        <button onClick={() => setCount(
          (prev) => {
            return  prev < 10 ? prev + 1 : prev
          }
        )} className="hidden"> add to cart
        </button>

      </div>
      <OverlayPage Click={() => setClicked(false)} />
      <Background  Click={() => setClicked(false)}/>
    </>
  )
}

export default App
