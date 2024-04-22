import Navbar from "./components/Navbar"
import QuickCreate from "./components/QuickCreate"
import Sidebar from "./components/Sidebar"
import Templates from "./components/Templates"
import Usage from "./components/Usage"
import YourGallery from "./components/YourGallery"



function App() {

  return (
    <>
        <Navbar/>
        <div className="flex h-screen bg-slate-100">
          <Sidebar/>
          <div className="flex flex-wrap">
            <QuickCreate />
            <YourGallery />
            <Usage 
              tokens={2000}
            />
            <Templates />
          </div>
        </div>
    </>
  )
}

export default App
