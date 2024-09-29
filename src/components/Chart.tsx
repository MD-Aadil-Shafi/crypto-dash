import { GrExpand } from "react-icons/gr";
import { IoMdAddCircleOutline, IoMdCloseCircleOutline } from "react-icons/io";
import { chartTimeGaps } from "../utils/constants";
import { useState, useEffect } from "react";
import ReactApexChart from 'react-apexcharts';
// import { dataSets } from "../utils/mockData";
import Compare from "./Compare";
import {
  useQuery,
} from '@tanstack/react-query'
import { getData } from "../utils/actions";
import Loader from "./Loader";
import {showToast} from 'react-top-toast';


const Chart = () => {

    const [full, setFull] = useState(false)
    const [one, setOne] = useState('bitcoin')
    const [two, setTwo] = useState('')

    const fullScreenToggle = () =>{
      setFull(!full)
    }

    const [series, setSeries] = useState([
      {
        name: 'Sample Data',
        // data: dataSets['1w'][0],
        data: []
      }
    ]);
    
    const [selectedRange, setSelectedRange] = useState('1w');
    const [isComparisonActive, setIsComparisonActive] = useState(false);

    const options = {
      chart: {
        type: 'area',
        height: 350
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        // categories: getXAxisCategories(selectedRange)
        labels: {
          show: false
        }
      },
      tooltip: {
        shared: true,
        intersect: false
      }
    };


  const handleFilterChange = (range:string) => {
    setSelectedRange(range);
    if (isComparisonActive) {
      setSeries([
        { name: data['name'][0], data: data[range][0] },
        { name: data['name'][1], data: data[range][1] }
      ]);
    } else {
      setSeries([{ name: data['name'], data: data[range] }]);
    }
  };

  const handleComparisonToggle = () => {
    // @ts-ignore
    document.getElementById('compare_modal').showModal()

    setIsComparisonActive(!isComparisonActive);
  };


  function getXAxisCategories(range:string) {
    switch (range) {
      case '1day':
        return ['00:00', '06:00', '12:00', '18:00', '24:00'];
      case '3days':
        return ['Day 1', 'Day 2', 'Day 3'];
      case '1week':
        return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      case '1month':
        return Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
      case '6months':
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      case '1year':
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec'];
      case 'all':
        return ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];
      default:
        return [];
    }
  }


  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      getData(one || 'bitcoin', two),
   
  })

  const handleFetch = () => {
    refetch();
  };


  useEffect(()=>{
    if(typeof data?.id === "string"){
      setSeries([
        {
          name: data['name'],
          data: data['1w']
        }
      ])
    }else if(data?.id?.length === 2){
      setSeries([
        { name: data['name'][0], data: data[selectedRange][0] },
        { name: data['name'][1], data: data[selectedRange][1] }
      ]);
    }
  },[data])


  if (isPending) return <section className="w-full h-full flex flex-col justify-center items-center">
                        <Loader/>
                        </section>

  if (error) showToast("Error Fetching Data. Please try later.", "error");

  if(data?.id) return (
    <section>
        <div className="flex justify-between flex-wrap">
        <div className="flex gap-7 mb-3">
        <button className="flex gap-2 text-slate-500 items-center"
        onClick={fullScreenToggle}
        ><GrExpand/>
         Fullscreen
         </button>
        <button className="flex gap-2 text-slate-500 items-center"
        onClick={handleComparisonToggle}
        >{isComparisonActive ?
          <>
          <IoMdCloseCircleOutline/> Reset
          </>
          :
          <>
          <IoMdAddCircleOutline/> Compare
          </>
          }
          </button>
        </div>
        
        <div className="flex gap-5 mr-20 mb-3">
        {chartTimeGaps?.map((item, index)=>(
            <button className={`px-1 w-[50px] rounded text-slate-500 ${selectedRange === item?.name && "bg-primary text-white"}`}
            key={index}
            onClick={()=>handleFilterChange(item?.name)}
            >{item?.name}</button>
        ))}
        </div>
        </div>

        <div className={`${full && "absolute top-5 left-0 bg-white w-full h-full z-50"}`}>
          {full ?
        <button className="flex gap-2 text-slate-500 items-center"
        onClick={fullScreenToggle}
        ><GrExpand/>
         Minimize
         </button>
         : null }
        <ReactApexChart
        //@ts-ignore
        options={options} series={series} type="area" height={full ? 700 : 350} />
        </div>
        <Compare
        one={one}
        two={two}
        setOne={setOne}
        setTwo={setTwo}
        handleFetch={handleFetch}
        />
    </section>
  )
}

export default Chart