import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from './Navbar'

const Tasks = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'start' }}>
            {/* Sidebar */}
            <div style={{width:'20%'}}>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="p-6" style={{width:'80%', height:'100vh'}}>
               <Navbar />
            
            </div>
        </div>
  )
}

export default Tasks