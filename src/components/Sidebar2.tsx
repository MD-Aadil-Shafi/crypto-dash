import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { sidebarLinks } from '../utils/sidebarLinks';

const Sidebar2 = () => {
 
    const location = useLocation()

    return (
    <section className='flex flex-row sm:flex-col w-full justify-center items-center p-1 rounded-lg shadow-lg border-2 border-slate-300'>
        
        {sidebarLinks?.map((item, index)=>(
        <Link key={index}
         to={item?.link}
        className={`my-3 p-2 ${location?.pathname === item?.link && "shadow-xl rounded-lg"} transition-all ease-in-out`}>

        {item?.icon && React.cloneElement(item.icon as React.ReactElement, {
            className: `${location?.pathname === item?.link ? "text-primary" : "text-slate-500"}`
          })}
        </Link>
        ))}

    </section>
  )
}

export default Sidebar2