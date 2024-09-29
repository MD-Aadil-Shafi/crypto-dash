import { useState } from 'react'
import { popularCryptocurrencies } from '../utils/constants'

type CompareProps = {
  one:string,
  two:string,
  setOne:(val:string)=>void,
  setTwo:(val:string)=>void,
  handleFetch:()=>void
}

const Compare = ({one, two, setOne, setTwo, handleFetch}:CompareProps) => {

    // const [one, setOne] = useState('')
    // const [two, setTwo] = useState('')
    const [clientError, setClientError] = useState('')

    const handleClear = () =>{
        setOne("")
        setTwo("")
    }

    const handleSubmit = () =>{
        setClientError('')
        if(!one || !two) return setClientError('Both selection is required.')
        handleFetch()
        //@ts-ignore
        document.getElementById("close_modal")?.click()
    }

  return (
<dialog id="compare_modal" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      id="close_modal"
      onClick={handleClear}
      >✕</button>
    </form>
    <h3 className="font-bold text-lg mb-5">Compare two assets.</h3>
    <div className='flex justify-between items-end'>
    <select className="select select-bordered w-1/3"
    value={one} onChange={(e)=>setOne(e.target.value)}
    >
    <option selected value="">Select Option</option>
    {popularCryptocurrencies?.map((item, index)=>(
        <option key={index} value={item?.id}>{item?.name}</option>
    ))}
    
    <option>Greedo</option>
    </select>
    
    <select className="select select-bordered w-1/3"
    value={two} onChange={(e)=>setTwo(e.target.value)}
    disabled={!one}
    >
    <option selected value="">Select Option</option>
    {popularCryptocurrencies?.filter(x => x?.id !== one)?.map((item, index)=>(
        <option key={index*10} value={item?.id}>{item?.name}</option>
    ))}
    </select>

    <button className='btn btn-primary btn-sm'
    onClick={handleSubmit}
    >Submit</button>
    </div>
    <p className='text-center my-2 text-rose-500'>{clientError}</p>
  </div>
</dialog>
  )
}

export default Compare