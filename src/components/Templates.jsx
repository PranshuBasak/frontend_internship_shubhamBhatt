import { FaExternalLinkAlt } from 'react-icons/fa'
import ListDropdown from './ListDropdown'
import { image1, image2, image3, image4 } from '../assets/index.js'

const images = {
  image1: {
    src: image1,
    id: 1,
    title: 'Nature Beauty',
    description: 'A breathtaking view of a lush green forest.'
  },
  image2: {
    src: image2,
    id: 2,
    title: 'Cityscape',
    description: 'A bustling city skyline illuminated by night lights.'
  },
  image3: {
    src: image3,
    id: 3,
    title: 'Wildlife Encounter',
    description: 'A close-up of a majestic wild animal in its habitat.'
  },
  image4: {
    src: image4,
    id: 4,
    title: 'Historical Landmark',
    description: 'A glimpse of a centuries-old architectural marvel.'
  }
};

const Templates = () => {
  return (
    <div className="flex flex-col p-4  min-w-[400px] max-w-[1000px] w-fit">
      <h2 className="text-lg font-bold leading-7 text-gray-900 flex items-center gap-4">
            Templates
            <FaExternalLinkAlt 
                size={15}
            />
      </h2>
      <div className="bg-white m-2 rounded-lg ring-1 ring-inset ring-gray-300 pb-2">
        <div className="flex flex-grow p-2 justify-between">
          <div className="mt-2 "> 
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="search"
                id="search"
                autoComplete="search"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="search here"
              />
            </div>
          </div>
          
          <ListDropdown /> 
          <ListDropdown /> 
        </div>
        <div className="p-4 flex flex-wrap gap-4">
        {[...Array(40)].map((_, index) => (
          <div className="flex flex-col w-32" key={index + 1}>
            <img 
              src={Object.values(images)[index % Object.keys(images).length].src} 
              alt={Object.values(images)[index % Object.keys(images).length].title}
              className="w-32 aspect-[1/2] object-cover rounded" />
            <h3 
              className="text-lg font-semibold block truncate">
              {Object.values(images)[index % Object.keys(images).length].title}
            </h3>
            <p 
              className="block truncate">
              {Object.values(images)[index % Object.keys(images).length].description}
            </p>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Templates