import { LuMessageSquareDashed } from "react-icons/lu";

const Messages = () => {
  return (
    <section className='pt-10'>
      <h1 className='text-2xl font-bold mb-5'>Messages</h1>
      <div className="flex justify-center mt-20">
        <LuMessageSquareDashed size={32} className="text-slate-400"/>
      </div>
      <p className='text-xl text-slate-400 text-center'>No messages found!</p>
    </section>
  )
}

export default Messages