import { useState } from "react"
const State = () =>{
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState("blue")
    const [isOn, setIsOn] = useState(false)
    const [text, setText] = useState("")
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

        <div className="my-10">
           <h1 className="font-bold capitalize">light status: {isOn ? "light on": "light off"}</h1>
           <button className="text-white p-2 rounded-2xl font-bold mt-2" onClick={toogleLight} style={{backgroundColor: `${isOn ? 'red' : 'blue'}`}}> {isOn ? "Turn off": "Turn on"}</button>
        </div>
       <div className="text-2xl font-bold my-10">
        <h1>count = {count}</h1>
        <h1>{theme}</h1>
       <div className=" flex gap-4">
         <button onClick={increment} className="bg-black text-white p-2 rounded-xl"> Increase</button>
        <button  onClick={decrement} className="bg-black text-white p-2 rounded-xl">Decrease</button>
       </div>
       </div>

<div className="my-10">
    <label htmlFor="input" className="font-bold text-2xl text-amber-400">Input: </label>
    <input type="text"
    id="text"
    value={text}
    onChange={(e)=>setText(e.target.value)}
    className="border-5  p-4 rounded-2xl border-amber-200 outline-none  "
    />

    <h1 className="font-bold text-2xl">Text: {text}</h1>
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