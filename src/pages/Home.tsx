import { useState } from 'react'
import Tabs from '../components/Tabs'
import Chart from '../components/Chart'
import Summary from '../components/Summary'
import Stats from '../components/Stats'
import Analysis from '../components/Analysis'
import { useQuery } from '@tanstack/react-query'

const Home = () => {

    const [activeTab, setActiveTab] = useState('Summary')

    const { data } = useQuery({
      queryKey: ['repoData']
    })

    const renderComponents = () =>{
        switch(activeTab){
            case "Summary": return <Summary/>;
            case "Chart": return <Chart/>;
            case "Statistics": return <Stats/>;
            case "Analysis": return <Analysis/>;
        }
    }


  return (
    <div className='pt-10'>
      {data && typeof data?.id === "string" ?
        <section className='flex gap-2'>
        <h1 className='text-5xl font-semibold'>{data?.['current']}</h1>
        <p className='text-xl text-slate-400'>USD</p>
        </section>
      : data && data?.id?.length ?
      <section className='flex gap-2'>
        <h1 className='text-5xl font-semibold'>{data?.['current']?.[0]}</h1>
        <p className='text-xl text-slate-400'>USD</p>
        <p className='text-xl px-2'>|</p>
        <h1 className='text-5xl font-semibold'>{data?.['current']?.[1]}</h1>
        <p className='text-xl text-slate-400'>USD</p>
      </section>
      : 
      <section className='flex gap-2'>
      <h1 className='text-5xl font-semibold'>63,179.71</h1>
      <p className='text-xl text-slate-400'>USD</p>
      </section>
      }
        <p className='text-sm text-green-500 pt-4 pb-5'>+ 2,161.42 (3.54%)</p>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <div className='mt-10'>
        {renderComponents()}
        </div>
    </div>
  )
}

export default Home