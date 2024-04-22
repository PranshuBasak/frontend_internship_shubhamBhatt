
import { ImVideoCamera } from 'react-icons/im'
import { MdAccountBox } from 'react-icons/md'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between border-b-2 bg-white'>
        <div className="border-r-2  border-gray-300 p-2  cursor-pointer flex items-center justify-center w-28">
            <ImVideoCamera 
                size={40}
                color='#3e379e'
            />
        </div>
        <div className="flex gap-2 px-2 md:px-4  items-center">
            <button 
                type="button" 
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Create
            </button>
                
            <div className=" rounded-lg cursor-pointer">
                <MdAccountBox 
                    size={50}
                    color='grey'
                />
            </div>
        </div>
    </div>
  )
}

export default Navbar