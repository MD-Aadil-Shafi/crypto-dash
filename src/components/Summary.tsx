import { popularCryptocurrencies } from '../utils/constants'

const Summary = () => {
  return (
    <section className='pt-5'>
      <h1 className='text-2xl text-slate-500 font-bold mb-5'>Popular Currencies</h1>

      <div className='flex gap-5 flex-wrap justify-center sm:justify-start pb-24'>
        {popularCryptocurrencies?.map((item, index)=>(
          <div className='p-5 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all ease-in-out'
           key={index}>
        <img src={item?.logoUrl} className='w-20 h-20 rounded-full shadow-lg'/>
        <h3 className='text-xl font-bold mt-4'>{item?.symbol}</h3>
        <p className='text-slate-500'>{item?.name}</p>
      </div>
        ))}
      
      </div>
    </section>
  )
}

export default Summary