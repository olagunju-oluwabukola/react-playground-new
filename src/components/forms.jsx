import React, {useState} from 'react'

const Forms = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
        feedback:""
    })

    const next = () => setCurrentStep((prev) => (prev  < 4 ? prev+1 : prev))
    const back = () => {
        if (currentStep > 1){
                 setCurrentStep(currentStep - 1)
        }

    }
  return (
    <div>
        <div className="bg-white p-8 rounded-2xl shadow-xl w-96">

  <div className="mb-6 h-2 w-full bg-gray-100 rounded-full">
    <div
      className="h-full bg-blue-500 rounded-full transition-all duration-500"
      style={{ width: `${(currentStep / 3) * 100}%` }}
    />
  </div>

        { currentStep ===1 && (<div className="animate-fade-in">
    <h2 className="text-2xl font-bold mb-4">Step 1: What is your name?</h2>
    <input
      type="text"
      placeholder="Jane Doe"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      className="w-full p-3 border-2 border-amber-200 rounded-xl focus:border-amber-400 outline-none"
      required
    />
  </div>

)}

{currentStep === 2 &&(
    <div>
         <h2 className="text-2xl font-bold mb-4">Step2: Enter Your Email</h2>
    <input
      type="email"
       className="w-full p-3 border-2 border-amber-200 rounded-xl focus:border-amber-400 outline-none"
      placeholder="jane@gmail.com"
      required
      value={formData.email}
      onChange={(e)=> setFormData({...formData, email:e.target.value})}/>
    </div>
)}

{
currentStep === 3 &&(
    <div>
            <h2 className="text-2xl font-bold mb-4">Step3: Enter Your Tel</h2>
    <input
      type="number"
       className="w-full p-3 border-2 border-amber-200 rounded-xl focus:border-amber-400 outline-none"
       placeholder='2349087654321'
       required
       value={formData.tel}
       onChange={(e)=>setFormData({...formData, tel:e.target.value})}
       />
    </div>
)
}

{
currentStep === 4 && (
  <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-200">
    <h2 className="text-xl font-bold mb-4">Review your info:</h2>
    <div className='space-y-4'>
        <p> <span className='font-bold'>Name:</span> {formData.name}</p>
           <p> <span className='font-bold'>Email:</span> {formData.email}</p>
              <p> <span className='font-bold'>Tel:</span>{formData.tel}</p>
    </div>
    </div>
    )
}

<div className='flex justify-between mt-8'>
{currentStep > 1 &&(
    <button onClick={back} className='bg-gray-400 text-white p-4 rounded-2xl font-bold '>Previous</button>
)}

{ currentStep < 4 &&(
<div>
    <button className='bg-green-700 p-4 rounded-2xl font-bold text-white cursor-pointer ' onClick={next}> Next </button>
</div>
)}

{ currentStep ===4 &&(
    <div>
    <button  className='bg-green-700 p-4 rounded-2xl font-bold text-white cursor-pointer ' onClick={()=>alert("Sumitted successfully")}> Submit </button>
</div>
)
}
</div>
</div>
    </div>
  )
}

export default Forms