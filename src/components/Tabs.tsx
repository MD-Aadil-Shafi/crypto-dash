import { tabsData } from '../utils/constants.ts'

type TabsProps = {
    activeTab:string,
    setActiveTab:(val:string)=>void,
}

const Tabs = ({activeTab, setActiveTab}:TabsProps) => {
    
    const handleChange = (val:string)=>{
            setActiveTab(val)
    }

  return (
<div role="tablist" className="tabs tabs-bordered flex [--tab-border-color:blue]">
    {tabsData?.map((item, index)=>(
        <a role="tab" className={`w-[70px] tab ${activeTab === item?.name && "tab-active font-semibold"}`}
         key={index}
         onClick={()=>handleChange(item?.name)}
         >
        {item?.name}
        </a>
    ))}
</div>
  )
}

export default Tabs