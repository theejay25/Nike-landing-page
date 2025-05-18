import { useEffect, useState } from "react"
import logo from './assets/images/favicon.png'

function App() {

  const [open, setOpen] = useState(false)

  const links = ['catalogues', 'overview', 'contacts']

  useEffect(() => {
    setOpen(true)
  })

  return (
    <>
      <div className={`h-0 w-0 t-0 l-0 duration-800 bg-[#1a1a1a] text-white ${open ? 'h-full w-full rounded-br-0' : 'rounded-br-[100%]'}`}>
        <div className="w-full bg-red-700 h-[7vh] flex flex-row items-center px-3">
          <img src={logo} alt="" width='70px' />
          <ul className="h-full w-[20vw] inline-flex gap-6 items-center justify-center capitalize">
              {links.map(link => (
                <li key={link}>{link}</li>
              ))}
          </ul>
          <div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
