import { useEffect, useState } from "react"

function App() {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
  })

  return (
    <>
      <div className={`h-0 w-0 t-0 l-0 uppercase font-extrabold text-5xl text-center duration-800 bg-black text-white ${open ? 'h-full w-full rounded-br-0' : 'rounded-br-[100%]'}`}>
        <h1 className={`w-[100vw] text-center`}>here</h1>
      </div>
    </>
  )
}

export default App
