import { useState } from "react"
const State = () =>{
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState("blue")
    const [isOn, setIsOn] = useState(false)
    const [Text, setText] = useState("")
    const [colors, setColors] = useState({r:0, g:0, b:0})

    const toogleLight = () => {
        setIsOn(!isOn)
    }
    const decrement  = () =>{
        setCount(prev => prev -1)
    }

    const increment = () => {
        setCount(prev => prev +1)
        setTheme("red")
    }
    return(
        <>

        <div>
            <h1 className="my-5">{ isOn? "light on💡" : "light off🌑"}</h1>
            <button onClick={toogleLight} className=" text-white p-2 rounded-2xl" style={{background: isOn?"yellow":"red"}}> { isOn ? "Turn off" : "Turn on"}</button>
        </div>
       <div className="text-2xl font-bold my-10">
        <h1>count = {count}</h1>
        <h1>{theme}</h1>
       <div className=" flex gap-4">
         <button onClick={increment} className="bg-black text-white p-2 rounded-xl"> Increase</button>
        <button  onClick={decrement} className="bg-black text-white p-2 rounded-xl">Decrease</button>
       </div>
       </div>

       <div>
        <input type="text"
        value={Text}
        onChange={(e)=> setText(e.target.value)}
        className="border p-2 rounded-2xl" />
        <h1 className="font-bold py-4">Output: {Text}</h1>
       </div>

       <div>
        <h1 className="h-40 w-40" style={{backgroundColor: `rgb(${colors.r}, ${colors.g}, ${colors.b})`}}>RGB Display</h1>
        <label htmlFor="green"> green: {colors.g}</label>
        <input type="range"
        min="0"
        max="225"
        onChange={(e)=> setColors({
            ...colors,
            g: e.target.value
        })}
        />
 <label htmlFor="green"> red: {colors.r}</label>
             <input type="range"
        min="0"
        max="225"
        onChange={(e)=> setColors({
            ...colors,
            r: e.target.value
        })}
        />
       </div>
        </>
    )
}
export default State