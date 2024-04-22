import React from 'react'

const QuickCreate = () => {
  return (
      <form className='p-4'>
        <h2 className="text-lg font-bold leading-7 text-gray-900">Quick Create</h2>
        <div className=" bg-white p-4 m-2 rounded-lg ring-1 ring-inset ring-gray-300">
            <label htmlFor="link" className="block text-sm font-medium leading-6 text-gray-500">
              Generate video from any URL (E.g. Amazon) 
            </label>
            <div className="mt-2 "> 
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                
                <input
                  type="text"
                  name="link"
                  id="link"
                  autoComplete="link"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="http://amazon.com"
                />
              </div>
            </div>
          <div className="mt-6 text-base font-semibold leading-7 text-gray-900">Or</div>
          <div className="mt-2 flex flex-col sm:flex-row items-center justify-end gap-6">
            <button
              type="submit"
              className="rounded-md outline outline-2 outline-indigo-600 outline-offset-2  bg-indigo-100 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create from scratch
            </button>
            <button
              type="submit"
              className="rounded-md outline outline-2 outline-indigo-600 outline-offset-2  bg-indigo-100 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create from templates
            </button>
          </div>
        </div>
      </form>
  )
}

export default QuickCreate