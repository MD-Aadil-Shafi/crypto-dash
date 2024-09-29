import { MdSettings } from "react-icons/md";

const Setting = () => {
  return (
    <section className='pt-10'>
    <h1 className='text-2xl font-bold mb-5'>Settings</h1>
    <div className="flex justify-center mt-20">
      <MdSettings size={32} className="text-slate-400"/>
    </div>
    <p className='text-xl text-slate-400 text-center'>Settings section will be added soon!</p>
  </section>
  )
}

export default Setting