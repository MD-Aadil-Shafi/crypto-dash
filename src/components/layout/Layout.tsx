import { ReactNode, useEffect } from "react"
import Sidebar2 from "../Sidebar2";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import ToastContainer, {showToast} from 'react-top-toast';

interface LayoutProps {
    children: ReactNode;
  }

const Layout = ({children}:LayoutProps) => {
  const location = useLocation()

  useEffect(()=>{
    showToast('Api may take a minute to give first response', 'info')
  },[])

  return (
    <section className="flex h-screen overflow-x-hidden">
        <section className="hidden sm:flex w-[100px] p-3 flex-col justify-center">
            <Sidebar2/>
        </section>

        <section className="flex sm:hidden absolute bottom-0 justify-center w-full z-50 bg-white shadow-lg">
          <Sidebar2/>
        </section>
        <motion.div
      key={location.pathname}
      initial={{ x: "20%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-20%", opacity: 0, transition: { duration: 0.2 } }}
      transition={{ delay: 0, duration: 0.2 }}
      className="w-full pl-4"
    >
   
            {children}

        </motion.div>
        <ToastContainer/>
    </section>
  )
}

export default Layout