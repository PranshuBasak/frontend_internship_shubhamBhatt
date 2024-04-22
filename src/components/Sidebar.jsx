import { useState } from "react"
import { FaAmazon } from "react-icons/fa"
import { FaClapperboard } from "react-icons/fa6"
import { MdHome } from "react-icons/md"
import { RiBarChartBoxFill } from "react-icons/ri"
import { RxViewGrid } from "react-icons/rx"


const Sidebar = () => {

    const [select, setSelect] = useState(1)

  return (
    <div className=" min-w-20 sm:min-w-28 max-w-28 flex items-center gap-8 flex-col py-4 border-r-2 flex-grow bg-white">
        <div className={` ${select === 1? "bg-indigo-100" : "bg-gray-100"} rounded-lg p-2 cursor-pointer`}
        onClick={() =>{setSelect(1)}}
        >
            <MdHome 
                size={30}
                color={`${select === 1? "#4338ca " : "gray"}`}
            />
        </div>
        <div className={` ${select === 2? "bg-indigo-100" : "bg-gray-100"} rounded-lg p-2 cursor-pointer`}
        onClick={() =>{setSelect(2)}}
        >
            <FaAmazon
                size={30}
                color={`${select === 2? "#4338ca " : "gray"}`}
            />
        </div>
        <div className={` ${select === 3? "bg-indigo-100" : "bg-gray-100"} rounded-lg p-2 cursor-pointer`}
        onClick={() =>{setSelect(3)}}
        >
            <FaClapperboard
                size={30}
                color={`${select === 3? "#4338ca " : "gray"}`}
            />
        </div>
        <div className={` ${select === 4? "bg-indigo-100" : "bg-gray-100"} rounded-lg p-2 cursor-pointer`}
        onClick={() =>{setSelect(4)}}
        >
            <RxViewGrid
                size={30}
                color={`${select === 4? "#4338ca " : "gray"}`}
            />
        </div>
        <div className={` ${select === 5? "bg-indigo-100" : "bg-gray-100"} rounded-lg p-2 cursor-pointer`}
        onClick={() =>{setSelect(5)}}
        >
            <RiBarChartBoxFill
                size={30}
                color={`${select === 5? "#4338ca " : "gray"}`}
            />
        </div>
    </div>
  )
}

export default Sidebar