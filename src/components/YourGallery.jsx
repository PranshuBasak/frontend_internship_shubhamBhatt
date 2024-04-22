import { FaExternalLinkAlt, FaVideoSlash } from "react-icons/fa"


const YourGallery = () => {
  return (
      <form className='p-4'>
        <h2 className="text-lg font-bold leading-7 text-gray-900 flex items-center gap-4">
            Your Gallery
            <FaExternalLinkAlt 
                size={15}
            />
        </h2>
        <div className=" bg-white m-2 rounded-lg ring-1 ring-inset ring-gray-300 p-14 flex flex-col items-center">
            <FaVideoSlash 
                size={60}
                color="gray"
            />
            <div className="text-lg font-semibold leading-7 text-gray-500">No videos yet create one today</div>
        </div>
      </form>
  )
}

export default YourGallery