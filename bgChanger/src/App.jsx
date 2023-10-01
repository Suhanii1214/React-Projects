import { useState } from "react"


function App() {
  const[color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
          <div className="flex flex-wrap bg-white gap-3 justify-center shadow-lg rounded-xl px-3 py-2">
            <button className="outline-none rounded-full px-4 py-1 bg-gray-800 shadow-lg" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
            <button className="outline-none rounded-full px-4 py-1 bg-gray-800 shadow-lg" style={{backgroundColor: "lightgreen"}} onClick={() => setColor("lightgreen")}>Green</button>
            <button className="outline-none rounded-full px-4 py-1 bg-gray-800 shadow-lg" style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
            <button className="outline-none rounded-full px-4 py-1 bg-gray-800 shadow-lg" style={{backgroundColor: "orange"}} onClick={() => setColor("orange")}>Orange</button>
            <button className="outline-none rounded-full px-4 py-1 bg-gray-800 shadow-lg" style={{backgroundColor: "skyblue"}} onClick={() => setColor("skyblue")}>Blue</button>
            <button className="outline-none rounded-full px-4 py-1 bg-gray-800 shadow-lg" style={{backgroundColor: "aqua"}} onClick={() => setColor("aqua")}>Aqua</button>
            <button className="outline-none rounded-full px-4 py-1 bg-gray-800 shadow-lg" style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}>Pink</button>
            <button className="outline-none rounded-full px-4 py-1 bg-gray-800 shadow-lg" style={{backgroundColor: "purple"}} onClick={() => setColor("purple")}>Purple</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
